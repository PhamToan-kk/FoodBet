import axios from 'axios';
import * as types from '../../constants'
import {store} from '../store'
import {OtherInfoApi} from '../../apis/OtherInfoAccountApi'


export const actSetOtherInfoAccount = (shipPrice,discountPercent)=>{
    return{
        type:types.SET_OTHER_INFOR_ACCOUNT,
        shipPrice,
        discountPercent
    }
}

export const actLoadOtherInfoAccount = () => {
    return dispatch => {
        OtherInfoApi.loadInfos()
        .then(res=>{
            dispatch(actSetOtherInfoAccount(res.shipprice,res.discountpercent))
        })
    }
}

export const actSetTextNote = (text)=>{
    return{
        type:types.SET_TEXT_NOTE,
        text
    }
}


export const actSetDistance = (distance)=>{
    return{
        type:types.SET_DISTANCE,
        distance
}
}