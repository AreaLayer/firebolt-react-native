import * as React from 'react';
import {generateMnemonic} from 'bip39';
import {
  Box,
  Text,
  Heading,
  HStack,
  Center,
  Button,
  ButtonText,
} from '@gluestack-ui/themed';
import {SCREEN_NAMES} from '../../navigation/screenNames';
import {NavigationProp} from '@react-navigation/native';

const HEADING_TEXT_1 = 'Copy';
const HEADING_TEXT_2 = 'Seed Phrase';
const COPY_SEED_TEXT = 'Get a pen and paper before you start!';
const COPY_SEED_INFO_TEXT =
  'Write down or copy these words in the correct order and keep them somewhere safe.';

const STORE_SEED_BTN_TEXT = "I've stored my seed phrase";
const CONFIRM_TEXT = 'You will confirm this seed phrase on the next screen';

interface Props {
  navigation: NavigationProp<any, any>;
}

function CreateWallet({navigation}: Props) {
  const words = React.useMemo(() => generateMnemonic().split(' '), []);
  const onSubmit = () => {
    navigation.navigate(SCREEN_NAMES.ConfirmSeed, {words});
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
      <Text mt={'$4'} size="md" color="white">
        {COPY_SEED_INFO_TEXT}
      </Text>
      <HStack
        space="lg"
        mt={'$12'}
        justifyContent="space-between"
        reversed={false}
        flexWrap="wrap">
        {words.map((word, index) => (
          <Center key={index}>
            <Text mb={'$2'} size="xs" color="white" fontWeight="$bold">
              {index + 1}
            </Text>
            <Center
              borderWidth={'$1'}
              borderColor="$secondary500"
              w="$20"
              h="$10"
              bg="$secondary500">
              <Text
                color="$black"
                size="sm"
                textTransform="uppercase"
                borderRadius={'$lg'}
                fontWeight="$bold">
                {word}
              </Text>
            </Center>
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
        <Text size="sm" mt={'$4'} color="$coolGray200">
          {CONFIRM_TEXT}
        </Text>
      </Center>
    </Box>
  );
}

export default CreateWallet;
