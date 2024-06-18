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
import {CoinjoinMarketScreen} from '../../screens/CoinjoinMarketScreen';
import {NavigationProp} from '@react-navigation/native';

const LogoImage = require('../../assets/images/logo.png');

const HEADING_TEXT_1 = 'Firebolt Wallet';
const HEADING_TEXT_2 = 'The ultimate privacy tool for bitcoiners';
const CREATE_WALLET_BUTTON_TEXT = 'Create a new wallet';
const RESTORE_WALLET_BUTTON_TEXT = 'Restore existing wallet';
const COIJOIN_MARKET_BUTTON_TEXT =  'Welcome to the Coinjoin P2P Market';
const COIJOIN_MARKET_BUTTON_TEXT_2 = 'Join the Coinjoin P2P Market';
const COIJOIN_MARKET_BUTTON_TEXT_3 = 'Learn more';

interface Props {
  navigation: NavigationProp<any, any>;
}

function OnBoardingHome({navigation}: Props) {
  const onCreateWalletButtonPress = () => {
    navigation.navigate(SCREEN_NAMES.CreateWallet);
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
      </Center>
    </Box>
  );
}

export default OnBoardingHome;
