import * as types from '../../constants'


const initialState = [

]



const listFoodsReducer = (state = initialState, actions) => {
    console.log('action foods',actions)
    const newListFoods = [...state]
    switch (actions.type) {
        case types.SET_FOODS:
            newListFoods.push(actions.foods)
            return [...newListFoods]
        default:
            return [...state]
    }
}


export default listFoodsReducer