import React,{useState,useEffect} from 'react';
import { Text, View,FlatList,Image,TouchableOpacity,StyleSheet} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { ScaledSheet, } from 'react-native-size-matters';
import _ from 'lodash';
import RenderListFood from './RenderListFood'
import RenderBill from './RenderBill'
import {useSelector, useDispatch} from 'react-redux'
import {
    actDeleteProductOfCart,
    actDecreaseAmountProduct,
    actIncreaseAmountProduct
} from '../../../redux/actions'
import RenderSubmitBtn from './RenderSubmitBtn'
import RenderAddress from './RenderAddress'


const AddFood = (props) => 
{   
    const {listFoods} = useSelector(state=>state.cart)
    console.log("Addfood Cart index",listFoods)

    const dispatch = useDispatch()

    const deleteProductOfCart = (id)=>{
      dispatch(actDeleteProductOfCart(id))
    }
    const increaseAmount = (productId)=>{
      dispatch(actIncreaseAmountProduct(productId))
    }
    const decreaseAmount = (productId)=>{
      dispatch(actDecreaseAmountProduct(productId))
    }
    const [totalPrice,setTotalPrice] = useState(0)
    const setTotal = ()=>{
        if(listFoods.length>0){
            const totalMoney = _.sumBy(listFoods, function(o) { return o.product.price * o.amount; })
            setTotalPrice(totalMoney)
        }
        
    }
    useEffect(()=>{
       setTotal()
    },[listFoods])


    return(
        <View style={styles.container}>
            <View  style={{flex:7}}>
                <RenderAddress/>
                <ScrollView>     
                    <RenderListFood 
                    onDeleteProduct={deleteProductOfCart} 
                    listCartFood={listFoods}
                    increaseAmount={increaseAmount}  
                    decreaseAmount={decreaseAmount}
                    />
                    <RenderBill 
                    totalPrice={totalPrice}
                    shipCost={12}
                    discount = {5/100}

                    />
                </ScrollView>
            </View>
            <View  style={{flex:1}}>
                <RenderSubmitBtn name="Order"/>
            </View>

        </View>
);}


const styles = ScaledSheet.create({
    container:{
        flex:1,
        paddingTop:10,
        // alignItems:'center'

    },
}
)
export default AddFood;
