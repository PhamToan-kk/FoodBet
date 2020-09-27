import * as types from '../../constants'
import AsyncStorage from '@react-native-community/async-storage';

const initialState =

{ listFoods:[
    
    

]}

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
    const newListFood =[...state.listFoods]
    switch(action.type){
        case types.ADD_TO_CART:
            const {product,amount} = action
            if(listProducts.includes(product)){
                const indexProduct = listProducts.indexOf(product)
                newListFood[indexProduct].amount += action.amount
            }else{
                newListFood.push({
                    product,
                    amount
                })
            } 
            storeFoods(newListFood)
            return {
                ...state,
                listFoods:newListFood
            }
            break;
        case types.UP_PRODUCTS_TO_CART:
            const {products} = action
            const totalFoods =  newListFood.concat(products)            
            return{
                ...state,
                listFoods:totalFoods
            }
            break;
                
      
        default: 
        return {...state}
    }
}


export default cartReducer


