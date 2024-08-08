/**
 * @format
 */
import './shim';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { Coinjoin as CoinjoinApp } from './src/coinjoin';

AppRegistry.registerComponent(appName, () => App);
