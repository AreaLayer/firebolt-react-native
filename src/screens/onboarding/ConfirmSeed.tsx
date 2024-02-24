import * as React from 'react';
import {useState} from 'react';
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
} from '@gluestack-ui/themed';
import {SCREEN_NAMES} from '../../navigation/screenNames';
import {NavigationProp} from '@react-navigation/native';

const HEADING_TEXT_1 = 'Confirm';
const HEADING_TEXT_2 = 'Seed Phrase';
const COPY_SEED_TEXT = 'Please select each words in the correct order!';

const STORE_SEED_BTN_TEXT = 'Confirm Seed Phrase';

const words = [
  'green',
  'bullet',
  'arrow',
  'building',
  'car',
  'weapon',
  'suitcase',
  'farm',
  'cycle',
  'gun',
  'wire',
  'knife',
];

interface Props {
  navigation: NavigationProp<any, any>;
}

function ConfirmSeed({navigation}: Props) {
  const [selectedSeedWords, setSelectedSeedWords] = useState<(string | null)[]>(
    Array(12).fill(null),
  );
  const [shuffledSeedWords, setShuffledSeedWords] =
    useState<(string | null)[]>(words);

  const onWordPress = (pressedIndex: number) => {
    const pressedWord = shuffledSeedWords[pressedIndex];
    const newShuffledSeed = shuffledSeedWords.map((word, index) =>
      index === pressedIndex ? null : word,
    );
    const updatedSelectedSeedWords = [...selectedSeedWords];
    for (let seedWordIndex in updatedSelectedSeedWords) {
      if (!updatedSelectedSeedWords[seedWordIndex]) {
        updatedSelectedSeedWords[seedWordIndex] = pressedWord;
        break;
      }
    }
    setSelectedSeedWords(updatedSelectedSeedWords);
    setShuffledSeedWords(newShuffledSeed);
  };

  const onResetPress = () => {
    setSelectedSeedWords(Array(12).fill(null));
    setShuffledSeedWords(words);
  };

  const onSubmit = () => {
    navigation.navigate(SCREEN_NAMES.ConfirmSeed);
  };

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
          isDisabled={false}
          isFocusVisible={false}>
          <ButtonIcon color="white" as={RepeatIcon} />
        </Button>
      </Box>
      <HStack
        space="lg"
        mt={'$4'}
        justifyContent="space-between"
        alignItems="center"
        reversed={false}
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
                  borderRadius={'$lg'}
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
                  borderRadius={'$lg'}
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
        reversed={false}
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
                isDisabled={false}
                isFocusVisible={false}>
                <ButtonText
                  fontSize="$xs"
                  textTransform="uppercase"
                  color="black">
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
          isDisabled={false}
          isFocusVisible={false}>
          <ButtonText color="black" fontWeight="$bold">
            {STORE_SEED_BTN_TEXT}
          </ButtonText>
        </Button>
      </Center>
    </Box>
  );
}

export default ConfirmSeed;
