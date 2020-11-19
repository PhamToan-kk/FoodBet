import axios from 'axios';
import * as types from '../../constants'
import {store} from '../store'
import {authApi} from '../../apis/authApi'
import {AsyncStorageService} from '../../services/index'
import Axios from 'axios';
export const actSetUserInfor = (data) => {
    return{
        type: types.SET_USER_INFOR,
        username:data.username,
        id:data.id,
        phone:data.phone,
        role:data.role

    }
}


export const actSignIn = (username,password) => {
    return async (dispatch) => {
           const data = await authApi.login(username,password)
           console.log('data',data)
            dispatch(actSetUserInfor(data))
            const tokens = {
                accessToken :data.accessToken,
                refreshToken: data.refreshToken
            }
            AsyncStorageService.setTokens(tokens)
           
    }
}