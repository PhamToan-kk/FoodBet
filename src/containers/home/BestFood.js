import React from 'react';
import { Text, View,FlatList,Dimensions ,TouchableOpacity,Image,TouchableWithoutFeedback, ImageBackground} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { ScaledSheet, } from 'react-native-size-matters';
import {
    FText ,
    TextInput,
    VectorIcon,
    Morph,
    HeartIcon,
    MoveIcon
} from '../../components'
import {Colors,FontSizes} from '../../constants'
import { Rating, AirbnbRating } from 'react-native-ratings';


const data = [
    {
        id:1,
        name:'grill salmon',
        url:"https://www.pennmedicine.org/-/media/images/miscellaneous/food%20and%20drink/colorful_plate.ashx?mw=620&mh=408",
        price:22,

    },
    {
        id:2,
        name:'grill salmon',
        url:"https://images.blogthings.com/whatthanksgivingleftoversareyouquiz/plate-of-food.jpg",
        price:22,

    },
    {
        id:3,
        name:'grill salmon',
        url:"https://znews-photo.zadn.vn/w660/Uploaded/kbd_bcvi/2019_09_29/tai_xuong.jpg",
        price:22,


    }
]



const BestFood = ({
    params,
}) => (
    <View style={styles.container}>
        <FText 
        size={FontSizes.FONT_16}
        weight="500"
        style={styles.header}
        >Best Food</FText>
        <View style={styles.listItem}>
            {data.map((item)=>(
                <TouchableOpacity key={item.id} onPress={()=>alert('aaaa')}>
                    <Morph style={styles.itemContainer}>
                        <Image source={{uri:item.url}} style={styles.imageBackground}>
                        </Image>
                        <View style={{position:'absolute',borderRadius:10,bottom:0,width:'100%',height:50,backgroundColor:'rgba(255,255,255,0.5)'}}>

                        </View>
                    </Morph>
                </TouchableOpacity>
            ))}
        </View>
    </View>
);


const styles = ScaledSheet.create({
    container:{
        paddingHorizontal:10,
    },
    header:{
        marginTop:0
    },
    itemContainer:{
        width:'100%',
        height:'170@vs',
        marginVertical:5,
        borderRadius:10,
        backgroundColor:'pink'
    },
    imageBackground:{
        flex:1,
        width:'100%',
        height:'100%',
        borderRadius:10,
        justifyContent:'flex-end'
    }
})
export default BestFood;
