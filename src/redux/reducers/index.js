import { combineReducers,} from 'redux'
import popularFoodReducer from './PopularFoodReducer'
import cartReducer from './CartReducer'
import socketReducer from './SocketReducer'
import listFoodsReducer from './ListFoodsReducer'
export const rootReducers = combineReducers({
    popularFood:popularFoodReducer,
    cart:cartReducer,
    socket: socketReducer,
    listFoods:listFoodsReducer
})