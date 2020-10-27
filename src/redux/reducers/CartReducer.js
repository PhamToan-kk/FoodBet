import * as types from '../../constants'
import AsyncStorage from '@react-native-community/async-storage';
import _ from 'lodash';

const initialState =
{ 
    listFoods:[]

}

const getFoods = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('FoodCart')
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch(e) {
      // error reading value
    }
}

const storeFoods = async (value) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem('FoodCart', jsonValue)
    } catch (e) {
      // saving error
    }
  }

const cartReducer = (state=initialState,action)=>{
    
    const listProducts = state.listFoods.map((item)=>item.product)
    const listProductIds = state.listFoods.map((item)=>item.product.id)

    const newListFood =[...state.listFoods]
    const indexProduct = listProducts.indexOf(action.product)
    const indexOfProduct = listProductIds.indexOf(action.productId)

    switch(action.type){
        case types.ADD_TO_CART:
            if(listProductIds.includes(action.product.id)){
                newListFood[indexProduct].amount += action.amount
            }else{
                newListFood.push({
                product: action.product,
                amount :action.amount
                })
            } 
            // storeFoods([])
            return {
                ...state,
                listFoods:newListFood
            }
            break;
        case types.UP_PRODUCTS_TO_CART:
            const totalFoods =  newListFood.concat(action.products)            
            return{
                ...state,
                listFoods:totalFoods
            }
            break;
        case types.DELETE_PRODUCT_OF_CART:
            const productNeed = newListFood.find((x)=>x.product.id === action.productId)
            const remainFoods = _.pull(newListFood,productNeed)
            return{
                ...state,
                listFoods:remainFoods
            }
            break;
        case types.INCREASE_AMOUNT_PRODUCT:
            newListFood[indexOfProduct].amount +=1
            return{
                ...state,
                listFoods:newListFood
            }
        case types.DECREASE_AMOUNT_PRODUCT:   
          
            if(newListFood[indexOfProduct].amount >=2)
            {
                newListFood[indexOfProduct].amount -=1
            }
            return{
                ...state,
                listFoods:newListFood
            }            
        
            

        default: 
        return {...state}
    }
}


export default cartReducer


