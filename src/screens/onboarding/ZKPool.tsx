import * as React from 'react';
import {
  Box,
  Button,
  ButtonText,
  Image,
  Center,
  Heading,
} from '@gluestack-ui/themed';
import {SCREEN_NAMES} from '../../navigation/screenNames';
import {NavigationProp} from '@react-navigation/native';
import { MainFunction } from '../../src/coinjoin/main_function';

const LogoImage = require('../../assets/images/logo.png');

// Headings and button text updated for ZK Proof Pools
const HEADING_TEXT_1 = 'Firebolt Wallet';
const HEADING_TEXT_2 = 'The ultimate privacy tool with ZK Pools';
const CREATE_WALLET_BUTTON_TEXT = 'Create a new wallet';
const RESTORE_WALLET_BUTTON_TEXT = 'Restore existing wallet';
const ZK_POOL_ENTER_BUTTON_TEXT = 'Enter ZK Privacy Pool';
const ZK_POOL_EXIT_BUTTON_TEXT = 'Exit ZK Privacy Pool';
const LEARN_MORE_BUTTON_TEXT = 'Learn more about ZK Pools';

interface Props {
  navigation: NavigationProp<any, any>;
}

function OnBoardingHome({navigation}: Props) {
  // Navigate to Create Wallet Screen
  const onCreateWalletButtonPress = () => {
    navigation.navigate(SCREEN_NAMES.CreateWallet);
  };

  // Navigate to Enter ZK Pool Screen
  const onEnterZKPoolButtonPress = () => {
    navigation.navigate(SCREEN_NAMES.EnterZKPool);
  };

  // Navigate to Exit ZK Pool Screen
  const onExitZKPoolButtonPress = () => {
    navigation.navigate(SCREEN_NAMES.ExitZKPool);
  };

  return (
    <Box bg="$primary400" pb="30%" flex={1} justifyContent={'center'}>
      <Center>
        <Image alt="Firebolt Logo" source={LogoImage} size="xl" />
        <Heading mt={'$4'} size="2xl" color="white" textAlign={'center'}>
          {HEADING_TEXT_1}
        </Heading>
        <Heading mt={'$4'} size="md" color="white" textAlign={'center'}>
          {HEADING_TEXT_2}
        </Heading>

        {/* Button to create a new wallet */}
        <Button
          size="lg"
          mt={'$9'}
          w={'$5/6'}
          variant="solid"
          action="secondary"
          isDisabled={false}
          isFocusVisible={false}
          onPress={onCreateWalletButtonPress}>
          <ButtonText color="black" fontWeight="$bold">
            {CREATE_WALLET_BUTTON_TEXT}
          </ButtonText>
        </Button>

        {/* Button to restore existing wallet */}
        <Button
          size="lg"
          mt={'$7'}
          w={'$5/6'}
          variant="outline"
          action="secondary"
          isDisabled={false}
          isFocusVisible={false}>
          <ButtonText fontWeight="$bold">
            {RESTORE_WALLET_BUTTON_TEXT}
          </ButtonText>
        </Button>

        {/* Button to enter ZK privacy pool */}
        <Button
          size="lg"
          mt={'$7'}
          w={'$5/6'}
          variant="solid"
          action="secondary"
          isDisabled={false}
          isFocusVisible={false}
          onPress={onEnterZKPoolButtonPress}>
          <ButtonText color="black" fontWeight="$bold">
            {ZK_POOL_ENTER_BUTTON_TEXT}
          </ButtonText>
        </Button>

        {/* Button to exit ZK privacy pool */}
        <Button
          size="lg"
          mt={'$7'}
          w={'$5/6'}
          variant="solid"
          action="secondary"
          isDisabled={false}
          isFocusVisible={false}
          onPress={onExitZKPoolButtonPress}>
          <ButtonText color="black" fontWeight="$bold">
            {ZK_POOL_EXIT_BUTTON_TEXT}
          </ButtonText>
        </Button>

        {/* Learn more about ZK Pools */}
        <Button
          size="lg"
          mt={'$7'}
          w={'$5/6'}
          variant="outline"
          action="secondary"
          isDisabled={false}
          isFocusVisible={false}>
          <ButtonText fontWeight="$bold">
            {LEARN_MORE_BUTTON_TEXT}
          </ButtonText>
        </Button>
      </Center>
    </Box>
  );
}

export default OnBoardingHome;
