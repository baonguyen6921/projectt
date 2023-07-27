/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './TSX/App';


import flat from './flatlistLocal';
import {name as appName} from './app.json';
import HomeScreen from './TSX/HomeScreen';
import Example from './Example';
import NoticePage from './TSX/NoticePage';
import XemSan from './TSX/XemSan';
import testFlatlistAPI from './TSX/TestFlatListAPI';
import testSanity from './TSX/testSanity';
import CaNhan from './TSX/CaNhan';
import ChinhSua from './TSX/chinhsua';
import Lichdatsan from './TSX/Lichdatsan';
import Xacnhandatsan from './TSX/Xacnhandatsan';


AppRegistry.registerComponent(appName, () => App);
