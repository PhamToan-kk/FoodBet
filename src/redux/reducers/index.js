import { combineReducers,} from 'redux'
import popularFoodReducer from './PopularFoodReducer'
import cartReducer from './CartReducer'

export const rootReducers = combineReducers({
    popularFood:popularFoodReducer,
    cart:cartReducer
})