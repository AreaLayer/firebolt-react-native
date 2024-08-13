/**
 * @format
 */
import './shim';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {coinjoin as Coinjoin } from './src/coinjoin';
import {firebolt as Firebolt } from './src/firebolt';

AppRegistry.registerComponent(appName, () => App);
