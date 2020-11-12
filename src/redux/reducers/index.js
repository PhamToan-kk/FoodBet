import { combineReducers,} from 'redux'
import cartReducer from './CartReducer'
import listFoodsReducer from './ListFoodsReducer'
import userInforReducer from './UserInforReducer'
export const rootReducers = combineReducers({
    cart:cartReducer,
    listFoods:listFoodsReducer,
    userInfo:userInforReducer
})