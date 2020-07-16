import React from 'react' ;
import {Text, View, StyleSheet,Button, TouchableOpacity} from 'react-native' ;
import {useNavigation} from '@react-navigation/native' ;
import {GET_LAUNCHES} from './client2' ;


function ListItem(props) {
  const{ get_launches} = props
  const{flight_number,mission_name,launch_year,launch_date_local,upcoming,launch_success,details ,rocket} = get_launches
  const{rocket_id,rocket_name, rocket_type} = rocket

  const navigation =useNavigation()

  return(
   <View style={styles.container}>
    <View style= {styles.row}>
      <Text style={styles.text} numberOfLines={1}> {mission_name} </Text>
      <View style={styles.right} >
       <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => navigation.navigate('DetailList', {item:get_launches})}>
        <Text style={styles.buttonText}>Launch Details </Text>
       </TouchableOpacity>
      </View>
    </View>
  </View>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  row: {
    flexDirection: 'row' ,
    justifyContent: 'space-between'
  },
  right: {
    flex:1,
    alignSelf: 'flex-end',
    alignItems: 'flex-end'
  },
  text: {
    color: '#ffffff',
    fontSize: 24
  },
  buttonContainer: {
    backgroundColor: '#222',
    borderRadius: 5,
    padding: 10,
    margin:20
  },
  buttonText: {
    fontSize: 20,
    color: '#fff'
  }
}) ;

export default ListItem ;
