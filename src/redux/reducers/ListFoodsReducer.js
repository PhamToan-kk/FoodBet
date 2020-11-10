import * as types from '../../constants'


const initialState = [

]



const listFoodsReducer = (state = initialState, actions) => {
    console.log('action foods',actions)
    switch (actions.type) {
        case types.SET_FOODS:
            return [...actions.foods]
        default:
            return [...state]
    }
}


export default listFoodsReducer