import { combineReducers,} from 'redux'
import popularFoodReducer from './PopularFoodReducer'
import cartReducer from './CartReducer'
import listFoodsReducer from './ListFoodsReducer'
export const rootReducers = combineReducers({
    popularFood:popularFoodReducer,
    cart:cartReducer,
    listFoods:listFoodsReducer
})