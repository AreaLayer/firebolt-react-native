import * as React from 'react';
import {Box, Button, Image, Center, Heading} from 'native-base';

const LogoImage = require('../../assets/images/logo.png');

const HEADING_TEXT_1 = 'Firebolt Wallet';
const HEADING_TEXT_2 = 'The ultimate privacy tool for bitcoiners';
const CREATE_WALLET_BUTTON_TEXT = 'Create a new wallet';
const RESTORE_WALLET_BUTTON_TEXT = 'Restore existing wallet';

function OnBoardingHome() {
  return (
    <Box pb="30%" bgColor={'primary.900'} flex={1} justifyContent={'center'}>
      <Center>
        <Image source={LogoImage} size="xl" />
        <Heading mt={4} w="90%" size="2xl" color="white" textAlign={'center'}>
          {HEADING_TEXT_1}
        </Heading>
        <Heading
          fontWeight={'400'}
          mt={4}
          w="90%"
          size="md"
          color="white"
          textAlign={'center'}>
          {HEADING_TEXT_2}
        </Heading>
        <Button
          _text={{color: 'black', fontWeight: '700'}}
          mt={10}
          size="lg"
          w="90%"
          colorScheme="secondary">
          {CREATE_WALLET_BUTTON_TEXT}
        </Button>
        <Button
          _text={{color: 'white', fontWeight: '700'}}
          fontWeight={800}
          mt={8}
          variant="outline"
          size="lg"
          w="90%"
          colorScheme="secondary">
          {RESTORE_WALLET_BUTTON_TEXT}
        </Button>
      </Center>
    </Box>
  );
}

export default OnBoardingHome;
