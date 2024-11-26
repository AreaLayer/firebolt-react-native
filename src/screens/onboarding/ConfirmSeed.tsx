import React, {useState, useMemo} from 'react';
import {
  Box,
  Text,
  Heading,
  HStack,
  Center,
  Button,
  ButtonText,
  ButtonIcon,
  RepeatIcon,
  useToast,
} from '@gluestack-ui/themed';
import {SCREEN_NAMES} from '../../navigation/screenNames';
import ShowToast from '../../components/ShowToast';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigation/OnBoarding';

const HEADING_TEXT_1 = 'Confirm';
const HEADING_TEXT_2 = 'Seed Phrase';
const COPY_SEED_TEXT = 'Please select each word in the correct order!';
const STORE_SEED_BTN_TEXT = 'Confirm Seed Phrase';

type Props = NativeStackScreenProps<RootStackParamList, 'ConfirmSeed'>;

function ConfirmSeed({navigation, route}: Props) {
  const {words} = route.params;
  const toast = useToast();

  const randomShuffledWords = useMemo(() => {
    const shuffled = [...words];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }, [words]);

  const [selectedSeedWords, setSelectedSeedWords] = useState<(string | null)[]>(
    Array(12).fill(null),
  );
  const [shuffledSeedWords, setShuffledSeedWords] =
    useState<(string | null)[]>(randomShuffledWords);

  const onWordPress = (pressedIndex: number) => {
    const pressedWord = shuffledSeedWords[pressedIndex];
    const newShuffledSeed = shuffledSeedWords.map((word, index) =>
      index === pressedIndex ? null : word,
    );
    const updatedSelectedSeedWords = [...selectedSeedWords];
    for (let i = 0; i < updatedSelectedSeedWords.length; i++) {
      if (!updatedSelectedSeedWords[i]) {
        updatedSelectedSeedWords[i] = pressedWord;
        break;
      }
    }
    setSelectedSeedWords(updatedSelectedSeedWords);
    setShuffledSeedWords(newShuffledSeed);
  };

  const onResetPress = () => {
    setSelectedSeedWords(Array(12).fill(null));
    setShuffledSeedWords(randomShuffledWords);
  };

  const compareStoredSeed = () => {
    return words.every((word, index) => word === selectedSeedWords[index]);
  };

  const onSubmit = () => {
    const isSameAsStoredSeed = compareStoredSeed();
    if (isSameAsStoredSeed) {
      navigation.navigate(SCREEN_NAMES.PinSetup, {words});
    } else {
      toast.show({
        placement: 'top',
        render: ({id}) => (
          <ShowToast
            id={id}
            action="error"
            description="Incorrect order, please try again!"
            accessibilityLabel="Error toast: Incorrect order."
          />
        ),
      });
      onResetPress();
    }
  };

  const isSubmitDisabled = selectedSeedWords.includes(null);

  return (
    <Box py={'10%'} px={'$8'} bg="$primary400" flex={1}>
      <Heading w={'$3/5'} size="2xl" color="white">
        {HEADING_TEXT_1}
      </Heading>
      <Heading w={'$3/5'} size="2xl" color="white">
        {HEADING_TEXT_2}
      </Heading>
      <Text
        mt={'$4'}
        fontWeight={'$bold'}
        size="md"
        color="white"
        textAlign={'left'}>
        {COPY_SEED_TEXT}
      </Text>
      <Box alignItems="flex-end">
        <Button
          size="md"
          onPress={onResetPress}
          mt={'$4'}
          variant="outline"
          action="secondary"
          accessibilityLabel="Reset seed phrase order">
          <ButtonIcon color="white" as={RepeatIcon} />
        </Button>
      </Box>
      <HStack
        space="lg"
        mt={'$4'}
        justifyContent="space-between"
        alignItems="center"
        flexWrap="wrap"
        borderWidth="$2"
        borderRadius="$md"
        borderColor="$secondary500"
        py="$4"
        px="$4">
        {selectedSeedWords.map((word, index) => (
          <Center key={index}>
            {word ? (
              <Box
                borderRadius={'$md'}
                borderColor="$secondary500"
                w="$20"
                h="$8"
                bg="$secondary500"
                px="$1"
                justifyContent="center">
                <Text
                  color="$primary500"
                  size="xs"
                  textTransform="uppercase"
                  fontWeight="$bold"
                  textAlign="left">
                  {`${index + 1}. ${word}`}
                </Text>
              </Box>
            ) : (
              <Box
                borderRadius={'$md'}
                borderWidth="$1"
                borderColor="$secondary500"
                borderStyle="dashed"
                w="$20"
                h="$8"
                px="$1"
                justifyContent="center">
                <Text
                  color="white"
                  size="xs"
                  textTransform="uppercase"
                  fontWeight="$bold"
                  textAlign="left">
                  {`${index + 1}.`}
                </Text>
              </Box>
            )}
          </Center>
        ))}
      </HStack>
      <HStack
        space="lg"
        mt={'$4'}
        justifyContent="space-between"
        alignItems="center"
        flexWrap="wrap">
        {shuffledSeedWords.map((word, index) => (
          <Center key={index}>
            {word ? (
              <Button
                size="xs"
                onPress={() => onWordPress(index)}
                w="$24"
                variant="solid"
                action="secondary"
                accessibilityLabel={`Select word: ${word}`}>
                <ButtonText
                  fontSize="$xs"
                  textTransform="uppercase"
                  color="black"
                  fontWeight="$bold">
                  {word}
                </ButtonText>
              </Button>
            ) : (
              <Box
                borderRadius={'$md'}
                borderWidth="$1"
                borderColor="$secondary500"
                borderStyle="dashed"
                w="$24"
                h="$8"
                px="$1"
                justifyContent="center"
              />
            )}
          </Center>
        ))}
      </HStack>
      <Center>
        <Button
          size="lg"
          mt={'$20'}
          w={'$5/6'}
          variant="solid"
          action="secondary"
          onPress={onSubmit}
          isDisabled={isSubmitDisabled}
          accessibilityLabel="Confirm seed phrase order">
          <ButtonText color="black" fontWeight="$bold">
            {STORE_SEED_BTN_TEXT}
          </ButtonText>
        </Button>
      </Center>
    </Box>
  );
}

export default ConfirmSeed;
