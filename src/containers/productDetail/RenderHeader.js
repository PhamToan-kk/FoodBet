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

const RenderHeader = ({
    item,navigation
}) => (
    <View style={styles.header}>
        <Image style={styles.img} source={{uri:item.url}}/>
                <TouchableOpacity 
                style={styles.cartIcon}
                onPress={()=>navigation.navigate('Cart')}
                >
                    <VectorIcon Ionicons name="ios-cart" color={Colors.white} size={30}/>
                </TouchableOpacity>
        <ReturnButton event = {()=>navigation.goBack()}/>
    </View>
);


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
 
export default RenderHeader;
