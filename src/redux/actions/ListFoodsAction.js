import axios from 'axios';
import * as types from '../../constants'
import {store} from '../store'
import {foodApi} from '../../apis/foodApi'

export const actSetFoods = (foods) => {
    return{
        type: types.SET_FOODS,
        foods
    }
}




export const actLoadListFoods = () => {
    return dispatch => {
            foodApi.loadFoods()
            .then((data)=>{
                dispatch(actSetFoods(data))
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
                // console.log("store in action",store.getState());

            });
    }
}