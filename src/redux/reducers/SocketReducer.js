import * as types from '../../constants'
import AsyncStorage from '@react-native-community/async-storage';
import _ from 'lodash';

// const initialState =
// {
//     name:[1,2,3,4]
// }


const initialState =
{ 
    listFoods:[]

}



const socketReducer = (state=initialState,actions)=>{
    switch(actions.type){
        default: return {...state}
    }
}


export default socketReducer

