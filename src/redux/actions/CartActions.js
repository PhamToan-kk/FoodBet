import * as types from '../../constants'

export const actAddToCart = (product,amount)=>{
    return{
        type:types.ADD_TO_CART,
        product,
        amount
    }
}


export const actUpProductToCart = (products)=>{
    return{
        type:types.UP_PRODUCTS_TO_CART,
        products:products
    }
}