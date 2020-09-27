import React, { useState,useMemo } from 'react';
import { Text, View ,Image,TouchableOpacity,KeyboardAvoidingView} from 'react-native';
import { ScaledSheet, } from 'react-native-size-matters';
import {
    FText ,
    TextInput,
    VectorIcon,
    Morph,
    HeartIcon,
    MoveIcon,
    ReturnButton
} from '../../components'
import {Colors,FontSizes} from '../../constants'
import { Styles } from '../../styles'
import RenderTabProduct from './RenderTabProduct'
import {useSelector, useDispatch} from 'react-redux'
import {actAddToCart} from '../../redux/actions'



const RenderEditAmount = (props)=>
{  
  const{onAddToCart,item} = props  

  console.log('add to cart',onAddToCart)
  const [amount,setAmount]= useState(1)
  const increaseAmount= ()=> setAmount(amount+1)
  const decreaseAmount= ()=> {
      if(amount >= 1) setAmount(amount-1)

  }
  const addFoodToCart = (product)=>{
        onAddToCart(product,amount)
        setAmount(1)
  }
  return(
      <View style={styles.changeAmount}>
          <Morph style={styles.fixCount}>
              <TouchableOpacity onPress={decreaseAmount}>
                  <VectorIcon Entypo name="minus" size={17} color={Colors.red_fresh}/>
              </TouchableOpacity>
              <FText size={FontSizes.FONT_13} color={Colors.green}>{amount}</FText>
              <TouchableOpacity onPress={increaseAmount}>
                  <VectorIcon Entypo name="plus" size={17} color={Colors.red_fresh}/>
              </TouchableOpacity>
          </Morph>
          <TouchableOpacity 
          onPress = {()=>addFoodToCart(item)}
           >
              <Morph style={styles.btnAddToCart}>
                  <FText h4 weight="400" color={Colors.white} numberOfLines={3}>Add To Cart</FText>
              </Morph>
          </TouchableOpacity>
      </View>
  )}


export  const RenderDetailItem = (props)=>
{   
    const{food,onAddToCart}= props
      return(
          <View style={styles.detailItem}>
              <View style={styles.decoration}>
                  <View style={styles.dot}/>
                  <View style={styles.dot}/>
                  <View style={styles.dot}/>
              </View>
              <MoveIcon size={35}/>
              <View style={styles.headerItem}>
                  <FText h1 weight="400">{food.name}</FText>
                  <FText h1 weight="300">${food.price}</FText>
              </View>
              <FText h4>by FoodBet Restaurant</FText>
              <RenderEditAmount item ={food} onAddToCart={onAddToCart} />
              <RenderTabProduct item={food} />
  
          </View>
    )}



const styles = ScaledSheet.create({
        container:{
            flex:1,
            backgroundColor:Colors.Linear_white2,
            paddingTop:50
        },
        header:{
            width:'100%',
            flex:1
        },
        img:{
            width: '100%',
            height:'100%'
        },
        detailItem:{
            flex:2,
            marginHorizontal:15,
            backgroundColor:Colors.white,
            borderRadius:15,
            paddingHorizontal:10,
            paddingTop:20
        },
        headerItem:{
            ...Styles.row_between_center,
            marginTop:10
        },
        decoration:{
            ...Styles.row_center_center
        },
        dot:{
            width:10,
            height:10,
            borderRadius:5,
            backgroundColor:'gray',
            marginHorizontal:8
        },
        changeAmount:{
            ...Styles.row_between_center,
            paddingTop:15,
    
        },
        fixCount:{
            width:'150@s',
            height:'40@s',
            backgroundColor:Colors. Linear_white6,
            ...Styles.row_around_center
        },
        btnAddToCart:{
            width:'100@s',
            height:'40@s',
            backgroundColor:Colors.red_fresh,
            borderRadius:10,
            ...Styles.center_center,
        }
    })
     
       