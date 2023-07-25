/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Home from './TSX/HomeScreen';
import HomeSample from './Home';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => HomeSample);
