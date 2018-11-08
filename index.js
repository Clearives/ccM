/** @format */

import {AppRegistry, YellowBox} from 'react-native';
import App from './src/root';
import {storage} from 'src/utils/storage/index';

global.storage = storage;
AppRegistry.registerComponent('Main', () => App);
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated']);
