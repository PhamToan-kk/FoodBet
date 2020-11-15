import React,{useState,useEffect} from 'react';
import { Text, View,FlatList,Image,TouchableOpacity,StyleSheet} from 'react-native';
import { ScaledSheet, } from 'react-native-size-matters';
import {
    FText ,
    TextInput,
    VectorIcon,
    Morph,
    HeartIcon,
    MoveIcon,
    Divider,
    FButton
} from '../../../components'
import {Styles } from '../../../styles'
import { FontSizes,Colors} from '../../../theme'
import _ from 'lodash';



const RenderListFood = (props) => 

{
    const {
        listCartFood,
        onDeleteProduct,
        decreaseAmount,
        increaseAmount
    }= props

    return (
        <View>
            <FText h4 style={styles.header}>Your Order</FText>
            { listCartFood.length !== 0 ? listCartFood.map((item)=>(
            <Morph style={styles.foodItem} key={item.product._id}>
            <View style={{flex:1,flexDirection:'row'}}>
                <Image style={styles.image} source={{uri:item.product.url}}/>
                <View style = {styles.foodInfor}>
                    <View style={styles.headerItem}>
                        <View>
                            <FText h4 semibold>{item.product.name}</FText>
                            <FText h4 >${item.product.price}</FText>
                        </View>
                        <TouchableOpacity onPress={()=>onDeleteProduct(item.product._id)}>
                            <VectorIcon FontAwesome name ="trash-o" size={25} color={Colors.gray}/>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.changeAmount}>
                        <Morph style={styles.fixCount}>
                            <TouchableOpacity onPress={()=>decreaseAmount(item.product._id)}>
                                <VectorIcon Entypo name="minus" size={17} color={Colors.red_fresh}/>
                            </TouchableOpacity>
                            <FText size={FontSizes.FONT_13} color={Colors.green}>{item.amount}</FText>
                            <TouchableOpacity onPress={()=>increaseAmount(item.product._id)}>
                                <VectorIcon Entypo name="plus" size={17} color={Colors.red_fresh}/>
                            </TouchableOpacity>
                        </Morph>
                    </View>
                </View>
            </View>
            </Morph>
    ))
    :
            <Morph style={[styles.foodItem,{backgroundColor:'blue'}]}>
                <FText h4 style={{marginLeft:20}}>You order is empty, let order now!</FText>
            </Morph> 

    
    }
        </View>
    )
}


const styles = ScaledSheet.create({
    foodItem:{
        width:Styles.width-40,
        height:'90@vs',
        backgroundColor:Colors.white,
        marginVertical:5,
        alignSelf:'center'

    },
    header:{
        fontWeight:'400',
        marginLeft:20
    },      
    image:{
        flex:1,
        width:'100%',
        height:'100%',
        borderRadius:10
    },
    foodInfor:{
        flex:2
    },
    headerItem:{
        ...Styles.row_between_center,
        paddingHorizontal:10,
        paddingTop:20
    },
    changeAmount:{
        justifyContent:'center',
        alignItems:'flex-end',
        paddingRight:15
    },
    fixCount:{
        width:'100@s',
        height:'30@s',
        backgroundColor:Colors. Linear_white6,
        ...Styles.row_around_center
    }
})

export default RenderListFood;
