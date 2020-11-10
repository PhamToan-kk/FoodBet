/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import MainApp from './src/containers/signUp/navigations/MainApp';


AppRegistry.registerComponent(appName, () => MainApp);
