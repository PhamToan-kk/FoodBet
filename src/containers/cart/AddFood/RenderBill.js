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


const RenderBill = (props) => 
{
    const {
        totalPrice,
        shipCost,
        discount,
        discountPercent,
        shipPrice
    }= props
    // const [method,setMethod] = useState('On Card')

    return(
    <View style={styles.container}>
        <FText h4 style={styles.headerTitle}>Your Bill</FText>
        <View style={styles.listContainer}>
            <Morph style={styles.bill}>
                <View style={styles.lineBill}>
                    <FText style={styles.keyBill}>Subtotal</FText>
                    <FText style={styles.keyBill}>$ {totalPrice}</FText>
                </View>
                <Divider /> 
                <View style={styles.lineBill}>
                    <FText style={styles.keyBill}>Ship
                        <FText style={styles.dispercent}> ({shipPrice}$/km)</FText>
                    </FText>
                    <FText style={styles.keyBill}>$ {shipCost}</FText>
                </View>
                <Divider />
                <View style={styles.lineBill}>
                    <FText style={styles.keyBill}>Discount
                        <FText style={styles.dispercent}> ({discountPercent}%)</FText>
                    </FText>
                    <FText style={styles.keyBill}>$ {discount}</FText>
                </View>
                <Divider />
                <View style={[styles.lineBill]}>
                    <FText style={[styles.keyBill,{fontWeight:'400'}]}>Total</FText>
                    <FText style={styles.keyBill}>$ {
                        (totalPrice + shipCost - discount ).toFixed(2)
                    }
                    </FText>
                </View>
                <Divider />
                <View style={styles.lineBill}>
                    <FText style={[styles.keyBill,{fontWeight:'400'}]}>Payment method</FText>
                    <FText style={[styles.keyBill,{fontWeight:'400',color:Colors.greenLight}]}>When received</FText>

                </View>
            </Morph>
        </View>

    </View>    
    
    
    
    )}

const styles = ScaledSheet.create({
        container:{
        height:'250@vs'
            
        },
        listContainer:{
            flex:1,
            width:'90%',
            alignSelf:'center',
            borderWidth:0.2,
            borderRadius:10

        },
        headerTitle:{
            fontWeight:'400',
            marginLeft:20,
            marginVertical:5
        },
       
        foodItem:{
            width:Styles.width-40,
            height:'90@vs',
            backgroundColor:Colors.white,
            marginVertical:5,
            alignSelf:'center'
    
        },
        bill:{
            width:'100%',
            // height:'120@vs',
            flex:1,
            backgroundColor:Colors.white,
            borderWidth:0.2,
            borderRadius:10,
            borderColor:Colors.gray
        
        },
        lineBill:{
            flex:1,
            paddingHorizontal:20,
            ...Styles.row_between_center
        },
        keyBill:{
            fontSize:FontSizes.FONT_14,
            fontWeight:'300'
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
        },
        dispercent:{
            color:Colors.red_fresh
        }
    })
    
    
    const pickerSelectStyles = StyleSheet.create({
        inputIOS: {
          width:150,
          height:'100%',
          fontWeight:'500', 
          fontSize: 16,
          paddingVertical: 5,
          paddingHorizontal: 5,
          borderWidth: 0.5,
          borderColor: 'gray',
          borderRadius: 4,
          color: Colors.greenLight,
          paddingRight: 5, // to ensure the text is never behind the icon
        },
    
      });
export default RenderBill;
