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
import {Colors,FontSizes} from '../../theme'
import { Styles } from '../../styles'
import RenderTabProduct from './RenderTabProduct'
import {useSelector, useDispatch} from 'react-redux'
import {actAddToCart} from '../../redux/actions'
import {RenderDetailItem} from './RenderDetailItem'
import RenderHeader from './RenderHeader'
  

export const ProductDetail = (props) => 
{
    const{
        navigation,
        route
    } = props

    const {item} = route.params
    
    const dispatch = useDispatch()
    const onAddToCart = (product,amount)=>{
        // console.log('index product detail',product,amount)
        dispatch(actAddToCart(product,amount))
    }


    //render Main view
    return(
    <KeyboardAvoidingView style={{flex:1}}>    
        <View style={styles.container}>
            <RenderHeader item={item} navigation={navigation}/>
            <RenderDetailItem food={item} onAddToCart={onAddToCart}/>   
        </View>
    </KeyboardAvoidingView>
);
}


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
    cartIcon:{
        width:'35@s',
        height:'35@s',
        backgroundColor:Colors.red_fresh,
        borderRadius:'17.5@s',justifyContent:'center',
        alignItems:'center',
        position:'absolute',
        top:10,
        right:10
    },
})
 
