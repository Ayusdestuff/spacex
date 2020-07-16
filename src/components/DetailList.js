import React, {useEffect} from 'react' ;
import {Text, View, StyleSheet} from 'react-native' ;
import {useQuery} from '@apollo/react-hooks' ;
import {GET_LAUNCHES} from './client2' ;


function DetailList(props) {
  const{data} = useQuery(GET_LAUNCHES) ;

    useEffect(() => {console.log(data)}, []) ;
  //const {route, navigation} = props
  //const {item} = route.params
  //const {get_launches} = item
//  const {flight_number,mission_name,launch_year,launch_date_local,upcoming,launch_success,details ,rocket} = get_launches
//  const{rocket_id,rocket_name, rocket_type} = rocket

  return(
    <View style={styles.container}>

      <View>
       <Text style={styles.header}> Launch Details </Text>
       <Text> Flight Number: {data.get_launches && data.get_launches.flight_number} </Text>
       <Text> Launch Successful: {data.get_launches && data.get_launches.launch_success}</Text>
      </View>


    </View>

  ) ;

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 50
    },
    header: {
      fontSize: 26,
      marginBottom: 15
    }
});
export default DetailList ;
