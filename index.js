/**
 * @format
 */
import './shim';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {coinjoin as Coinjoin } from './src/coinjoin';
import {firebolt as Firebolt } from './src/firebolt';
import { SilentPaymentGroup } from './src/app/SP/send';
import {liquidwallet as LiquidWallet } from './src/app/LW/send';
import {wallet as Wallet } from './src/app/W/send';
import {SilentPaymentGroup as SilentPaymentGroup } from './src/app/SP/send';
import {HDWallet as HDWallet} from '.src/app/HDWallet';

AppRegistry.registerComponent(appName, () => App);
