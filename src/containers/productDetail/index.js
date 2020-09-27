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
import {RenderDetailItem} from './RenderDetailItem'

  

export const ProductDetail = (props) => 
{
    const{
        navigation,
        route
    } = props

    const {item} = route.params
    const dispatch = useDispatch()
    const onAddToCart = (product,amount)=>{
        dispatch(actAddToCart(product,amount))
    }


    //render Main view
    return(
    <KeyboardAvoidingView style={{flex:1}}>    
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.img} source={{uri:item.url}}/>
                <HeartIcon size={40}/>
                <ReturnButton event = {()=>navigation.goBack()}/>
            </View>
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
})
 
