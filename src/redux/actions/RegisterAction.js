import axios from 'axios';
import * as types from '../../constants'
import {store} from '../store'
import {authApi} from '../../apis/authApi'
import Axios from 'axios';



export const actRegister = (username,password,phone) => {
    return  (dispatch) => {
           authApi.register(username,password,phone)
           .then(
               (data)=>  {
                //    console.log('data register',data)
                   alert(`${data.saveUser.username} register successful !`)
                }

           )
    }
}