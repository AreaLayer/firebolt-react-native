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
  CloseIcon,
} from '@gluestack-ui/themed';
import {SCREEN_NAMES} from '../../navigation/screenNames';
import {RootStackParamList} from '../../navigation/OnBoarding';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

const HEADING_TEXT_1 = 'Setting Up';
const HEADING_TEXT_2 = 'Your PIN code';
const COPY_SEED_TEXT = 'Please enter your 5 digit PIN code!';

const STORE_SEED_BTN_TEXT = 'Continue';

type Props = NativeStackScreenProps<RootStackParamList, 'PinSetup'>;
function PinSetup({navigation, route}: Props) {
  const {words} = route.params;
  const [walletPin, setWalletPin] = useState<(number | null)[]>(
    Array(5).fill(null),
  );
  const digits = React.useMemo(
    () => [1, 2, 3, 4, 5, 6, 7, 8, 9, '', 0, 'X'],
    [],
  );

  const onResetPress = () => {
    setWalletPin(Array(5).fill(null));
  };

  const onSubmit = () => {
    const walletPinParam = walletPin as number[];
    navigation.navigate(SCREEN_NAMES.ConfirmPin, {
      words,
      walletPin: walletPinParam,
    });
  };

  const onDigitPress = (digit: number | string) => {
    if (typeof digit === 'number') {
      const emptyIndex = walletPin.findIndex(item => item === null);
      if (emptyIndex !== -1) {
        const newWalletPin = [...walletPin];
        newWalletPin[emptyIndex] = digit;
        setWalletPin(newWalletPin);
      }
    } else if (digit === 'X') {
      const emptyIndex = walletPin.findIndex(item => item === null);
      if (emptyIndex !== 0) {
        const digitRemovalIndex = emptyIndex === -1 ? 4 : emptyIndex - 1;
        const newWalletPin = [...walletPin];
        newWalletPin[digitRemovalIndex] = null;
        setWalletPin(newWalletPin);
      }
    }
  };

  return (
    <Box py={'10%'} px={'$8'} bg="$primary400" flex={1}>
      <Heading fontWeight="400" w={'$3/5'} size="lg" color="white">
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
        mt={'$8'}
        justifyContent="space-between"
        alignItems="center"
        reversed={false}
        flexWrap="wrap">
        {walletPin.map(item => (
          <Box
            borderRadius={'$md'}
            borderColor="$secondary500"
            w="$12"
            h="$12"
            bg="$secondary500"
            px="$1"
            alignItems="center"
            justifyContent="center">
            <Text fontWeight="$bold" size="xl">
              {item}
            </Text>
          </Box>
        ))}
      </HStack>
      <HStack
        space="lg"
        mt={'$10'}
        justifyContent="center"
        alignItems="center"
        reversed={false}
        flexWrap="wrap">
        {digits.map(item => (
          <Box alignItems="center" width="30%">
            <Button
              borderRadius={'$full'}
              width="$20"
              maxWidth={'100%'}
              h="$20"
              px="$1"
              variant="solid"
              action="secondary"
              onPress={() => onDigitPress(item)}
              isDisabled={false}
              isFocusVisible={false}>
              {item === 'X' ? (
                <ButtonIcon
                  color="$black"
                  as={CloseIcon}
                  m="$2"
                  w="$8"
                  h="$8"
                />
              ) : (
                <ButtonText color="$black" size="3xl">
                  {item}
                </ButtonText>
              )}
            </Button>
          </Box>
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

export default PinSetup;
