/** @format */

import {AppRegistry, YellowBox} from 'react-native';
import App from './src/root';

AppRegistry.registerComponent('Main', () => App);
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated']);
