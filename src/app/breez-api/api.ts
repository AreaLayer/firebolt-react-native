import { GreenlightCredentials, NodeConfig, NodeConfigVariant } from '@breeztech/react-native-breez-sdk';
import dotenv from 'dotenv';
dotenv.config(); // Load .env variables

const developerKey: number[] = process.env.GREENLIGHT_DEVELOPER_KEY ? process.env.GREENLIGHT_DEVELOPER_KEY.split(',').map(Number) : [];
const developerCert: number[] = process.env.GREENLIGHT_DEVELOPER_CERT ? process.env.GREENLIGHT_DEVELOPER_CERT.split(',').map(Number) : [];

const greenlightCredentials: GreenlightCredentials = {
  developerKey,
  developerCert
};

const nodeConfig: NodeConfig = {
  type: NodeConfigVariant.GREENLIGHT,
  config: {
    partnerCredentials: greenlightCredentials
  }
};
export default nodeConfig;

