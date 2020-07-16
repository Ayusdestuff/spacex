import { registerRootComponent } from 'expo';

import App from './src/components/App7';
import ListItem from './src/components/ListItem' ;
import {client} from './src/components/Client2' ;
import LaunchList from './src/components/LaunchList' ;
//import LaunchDetails from './src/components/LaunchDetails' ;
import DetailList from './src/components/DetailList';
import SearchList from './src/components/SearchList' ;


// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately
registerRootComponent(App,ListItem,LaunchList,DetailList,SearchList);
