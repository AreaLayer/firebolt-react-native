/**
 * @format
 */
import './shim';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Coinjoin} from 'react-native-crypto'

AppRegistry.registerComponent(appName, () => App);
