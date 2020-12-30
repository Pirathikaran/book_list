/**
 * @format
 */
import 'react-native-gesture-handler';

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Home from './Home'
import NaviCom from './NaviCom';




AppRegistry.registerComponent(appName, () => NaviCom);
