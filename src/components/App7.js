import * as React from 'react';
import {AppRegistry, Button, View, Text} from 'react-native' ;
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SearchList from './SearchList';
import LaunchList from './LaunchList' ;
import DetailList from './DetailList' ;
import LaunchDetails from './LaunchDetails' ;
import {client} from './client2' ;
import ListItem from './ListItem' ;
import {ApolloProvider} from 'react-apollo' ;
import {GET_LAUNCHES} from './client2' ;



const Stack = createStackNavigator()

function MainStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Home'
        screenOptions={{
          gestureEnabled: true,
          headerStyle: {
            backgroundColor: '#101010'
          },
          headerTitleStyle: {
            fontWeight: 'bold'
          },
          headerTintColor: '#ffd700',
          headerBackTitleVisible: false
        }}
        headerMode='float'>
        <Stack.Screen
          name='LaunchList'
          component={LaunchList}
          options={{ title: 'SPACEX' }}
        />
        <Stack.Screen
          name='DetailList'
          component={DetailList}
          options={{ title: 'LAUNCH DETAILS' }}
        />
        <Stack.Screen
          name='SearchList'
          component={SearchList}
          options={{ title: 'SearchList' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const App = () => (
  <ApolloProvider client={client}>
    <MainStackNavigator />
  </ApolloProvider>
);

AppRegistry.registerComponent('MyApp', () => App) ;

export default App ;
