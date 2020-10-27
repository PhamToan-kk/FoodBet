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


export const actDeleteProductOfCart = (productId)=>{
    return{
        type:types.DELETE_PRODUCT_OF_CART,
        productId:productId,
    }
}

export const actIncreaseAmountProduct = (productId)=>{
    return{
        type:types.INCREASE_AMOUNT_PRODUCT,
        productId:productId,
        payload:1
    }
}

export const actDecreaseAmountProduct = (productId)=>{
    return{
        type:types.DECREASE_AMOUNT_PRODUCT,
        productId:productId,
        payload:1
    }
}

