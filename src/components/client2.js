import ApolloClient from 'apollo-boost' ;
import {gql} from 'apollo-boost' ;

export const client = new ApolloClient ({
  uri: 'https://teamwork-278213.wl.r.appspot.com/graphql'
}) ;

 export const GET_LAUNCHES = gql `
      {
   get_launches {
     flight_number
     mission_name
     launch_year
     launch_date_local
     upcoming
     launch_success
     details
     rocket{
       rocket_id
       rocket_name
       rocket_type
     }
   }
 }


` ;
export const GET_SINGLE_LAUNCH = gql `
     query Get_Single_Launch($flight_number : Int!){
       get_single_launch(flight_number: $flight_number) {

         mission_name
         launch_year
         launch_date_local
         upcoming
         launch_success
         details
         rocket{
           rocket_id
           rocket_name
           rocket_type
         }
       }
     }

` ;
