import React from 'react';
import { Text, View ,Image} from 'react-native';
import { ScaledSheet, } from 'react-native-size-matters';
import {
    FText ,
} from '../../components'
import {Colors,FontSizes} from '../../theme'

const DiscountView = ({
    discount
}) => (
    <View style={styles.container}>
        <Image style={styles.img} source={{uri:"https://images.tribuneindia.com/cms/gall_content/2019/7/2019_7$largeimg08_Monday_2019_065403385.jpg"}}>
        </Image>
        <FText style={styles.disTxt}>Discount {discount}% for all order!!</FText>

    </View>
);

const styles = ScaledSheet.create({
    container:{
        width:'100%',
        height:'100@s',
        justifyContent:'center',
        alignItems:'center'
    },
    img:{
        width:'97%',
        height:'97%',
        borderRadius:5,
        alignSelf:'center'

    },
    disTxt:{
        fontSize:FontSizes.FONT_15,
        fontWeight:'800',
        color:Colors.white,
        position:'absolute',
        bottom:2,
        left:12

    }
})
export default DiscountView;
