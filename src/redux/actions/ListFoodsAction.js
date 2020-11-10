import axios from 'axios';
import * as types from '../../constants'
import {store} from '../store'

export const setFoods = (foods) => {
    return{
        type: types.SET_FOODS,
        foods
    }
}

// export const actAddToCart = (product,amount)=>{
//     return{
//         type:types.ADD_TO_CART,
//         product,
//         amount
//     }
// }


export const loadListFoods = () => {
    return dispatch => {
        axios.get('http://192.168.3.102:3000/foods/getFoods')
            .then(function (response) {
                console.log('response in action',response.data)
                // handle success
                return response.data
            })
            .then((data)=>{
                dispatch(setFoods(data))
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
                console.log("store in action",store.getState());

            });
    }
}