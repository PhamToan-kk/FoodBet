import axios from 'axios';
import * as types from '../../constants'
import {store} from '../store'
import {authApi} from '../../apis/authApi'
import Axios from 'axios';
import { Text, View,Alert} from 'react-native';



export const actRegister = (username,password,phone) => {
    return  (dispatch) => {
           authApi.register(username,password,phone)
           .then(
               (data)=>  {
                //    console.log('data register',data)
                   Alert.alert(
                    "Notification",
                    `${data.saveUser.username} register successful !`,
                    [
                    
                    { text: "OK", }
                    ],
                    { cancelable: false }
                );           
                }

           )
           .catch((err)=>
           {
               console.log(err)
           }
           )
    }
}