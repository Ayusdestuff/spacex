import React, {useEffect} from 'react' ;
import {Text, View, StyleSheet, ActivityIndicator,FlatList } from 'react-native' ;
import {useQuery} from '@apollo/react-hooks' ;
import {createDrawerNavigator} from '@react-navigation/drawer' ;
import {NavigationContainer} from '@react-navigation/native' ;
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs' ;
import {createStackNavigator} from '@react-navigation/stack' ;
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs' ;
import {useNavigation} from '@react-navigation/native' ;
import {GET_LAUNCHES} from './client2' ;
import ListItem from './ListItem' ;
import DetailList from './DetailList' ;

function LaunchList(props) {
  const navigation = useNavigation() ;
  const{loading, data} = useQuery(GET_LAUNCHES) ;

  useEffect(() => {console.log(data)}, []) ;

  if(loading && !data)
    return(
      <View style={styles.container}>
        <ActivityIndicator size='large' color='#fff' />
      </View>
    )
   return(
     <View style={styles.container}>
     <FlatList
       data={data.get_launches}
       keyExtractor={(item)=> String(item.flight_number)}
       renderItem={({item}) => {
         return (
           <ListItem
            get_launches={item}
            onPress={() => navigation.navigate('DetailList',{flight_number})}
            />
         )
       }}
      />
     </View>
   )

 }

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#cccccc'
  }
});
export default LaunchList ;
