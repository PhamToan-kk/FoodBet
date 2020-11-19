import React,{useState,useEffect} from 'react';
import { Text, View,Alert} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { ScaledSheet, } from 'react-native-size-matters';
import _ from 'lodash';
import RenderListFood from './RenderListFood'
import RenderBill from './RenderBill'
import {useSelector, useDispatch} from 'react-redux'
import {
    actDeleteProductOfCart,
    actDecreaseAmountProduct,
    actIncreaseAmountProduct,
    actClearCart
} from '../../../redux/actions'
import RenderSubmitBtn from './RenderSubmitBtn'
import RenderAddress from './RenderAddress'
import {orderApi} from '../../../apis/OrderApi'


const AddFood = (props) => 
{   
    const [totalPrice,setTotalPrice] = useState(0)
    const dispatch = useDispatch()
    const {listFoods} = useSelector(state=>state.cart)
    const {
        username,
        phone,
        id
    } = useSelector(state=>state.userInfo)
    const {
        address,
        discountPercent,
        distance,
        shipPrice,
        note
    } = useSelector(state=>state.otherInfo)

    const foodOrderSubmit = listFoods.map(
        (i)=>{
            return{
                namefood:i.product.name,
                price:i.product.price,
                amount:i.amount
            }
        }
    )
    const OrderSubmit = {
        customername:username,
        customerid:id,
        order:foodOrderSubmit,
        shipcost:(distance*shipPrice).toFixed(2),
        paymenttotal:(totalPrice*(1-(discountPercent/100)) + distance*shipPrice).toFixed(2),
        address:address,
        phone:phone,
        note:note,
    }    

    const sendOrder =()=>{
        if(foodOrderSubmit.length == 0) {
            alert('Please add food to your cart')
            return
        }
        // socket.emit("customer_send_order", "noti")

        orderApi.addOrder(OrderSubmit)
        .then((res)=> {
            Alert.alert(
                "Notification",
                "Order Successful!",
                [
                
                { text: "OK", }
                ],
                { cancelable: false }
            );           
            dispatch(actClearCart())

        } )
        .catch(err=>console.log('err order',err))

       

    }


    const deleteProductOfCart = (id)=>{
      dispatch(actDeleteProductOfCart(id))
    }
    const increaseAmount = (productId)=>{
      dispatch(actIncreaseAmountProduct(productId))
    }
    const decreaseAmount = (productId)=>{
      dispatch(actDecreaseAmountProduct(productId))
    }

    const setTotal = ()=>{
        if(listFoods.length>0){
            const totalMoney = _.sumBy(listFoods, function(o) { return o.product.price * o.amount; })
            setTotalPrice(totalMoney)
        }
        
    }

    useEffect(()=>{
       setTotal()
       
    //    setSocket(io(BASE_URL)) 
    },[listFoods])



    return(
        <View style={styles.container}>
            <View  style={{flex:7}}>
                <RenderAddress />
                <ScrollView>     
                    <RenderListFood 
                    onDeleteProduct={deleteProductOfCart} 
                    listCartFood={listFoods}
                    increaseAmount={increaseAmount}  
                    decreaseAmount={decreaseAmount}
                    />
                    <RenderBill 
                    totalPrice={totalPrice}
                    shipCost={(shipPrice * distance)}
                    discount = {(discountPercent/100)*totalPrice}

                    />
                </ScrollView>
            </View>
            <View  style={{flex:1}}>
                <RenderSubmitBtn name="Order" onPress={sendOrder}/>
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
