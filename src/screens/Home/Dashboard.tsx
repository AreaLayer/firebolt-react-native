import * as React from 'react';
import {Box, Image, Center, Heading} from '@gluestack-ui/themed';
import {NavigationProp} from '@react-navigation/native';

const LogoImage = require('../../assets/images/logo.png');

const HEADING_TEXT_1 = 'Firebolt Wallet';
const HEADING_TEXT_2 = 'Connected!';

interface Props {
  navigation: NavigationProp<any, any>;
}

function Dashboard({}: Props) {
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
      </Center>
    </Box>
  );
}

export default Dashboard;
