import React, {useEffect} from 'react' ;
import {View,ActivityIndicator, Text, TextInput, StyleSheet } from 'react-native' ;
import {useQuery} from '@apollo/react-hooks' ;
import {graphql} from 'react-apollo' ;
import gql from 'apollo-boost' ;
import {GET_SINGLE_LAUNCH} from './client2' ;

function SearchList(props) {
  const{loading, data} = useQuery(GET_SINGLE_LAUNCH) ;

  useEffect(() => {console.log(data)}, []) ;

  if(loading && !data)
    return(
      <View style={styles.container}>
        <ActivityIndicator size='large' color='#fff' />
      </View>
    )



    const Search = ({data}) => (
      <View style={{paddingLeft:20, paddingTop:20}}>
        <Text> Flight Number: {data.get_launches && data.get_launches.flight_number}</Text>
        <Text> Mission_Name : {data.get_launches && data.get_launches.mission_name}</Text>
        <Text> Launch Year : {data.get_launches && data.get_launches.launch_year} </Text>
        <Text> Launch Success : {data.get_launches && data.get_launches.launch_success}</Text>
        <Text> Details: {data.get_launches && data.get_launches.detail} </Text>
        <Text> Rocket ID: {data.get_launches && data.get_launches.rocket.rocket_id} </Text>
        <Text> Rocket Name: {data.get_launches && data.get_launches.rocket.rocket_name} </Text>
        <Text> Rocket Type: {data.get_launches && data.get_launches.rocket.rocket_type} </Text>
      </View>
    )

  return(
    <View style={styles.container}>
      <Text style={{textAlign: 'center'}}> SPACEX </Text>
      <TextInput
        onChangeText={data.get_launches.flight_number}
        style={styles.input} />

      <Search />

    </View>
  );
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
  },
  input: {
    backgroundColor:'#dddddd',
    height: 50,
    margin:20,
    marginBottom: 0,
    paddingLeft: 10
  }
}) ;

export default SearchList ;
