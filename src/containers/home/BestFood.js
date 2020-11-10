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
import {Colors,FontSizes} from '../../theme'
import { Rating, AirbnbRating } from 'react-native-ratings';
import { Styles } from '../../styles'


const data = [
    {
        id:7,
        name:'grill salmon',
        url:"https://www.pennmedicine.org/-/media/images/miscellaneous/food%20and%20drink/colorful_plate.ashx?mw=620&mh=408",
        price:22.22,
        intro:"Futo means large. So Futo Maki are large rolls of rice wrapped around several fillings with nori on the inside and often sesame seeds on the outcies. There are normally 10 pieces in a roll. A common examples is a California roll with crab, cucmber and avocado.",
        components: "100gam meat ,20gam sugar, 20gam vegetable"

    },
    {
        id:8,
        name:'grill salmon',
        url:"https://images.blogthings.com/whatthanksgivingleftoversareyouquiz/plate-of-food.jpg",
        price:23.22,
        intro:"Futo means large. So Futo Maki are large rolls of rice wrapped around several fillings with nori on the inside and often sesame seeds on the outcies. There are normally 10 pieces in a roll. A common examples is a California roll with crab, cucmber and avocado.",
        components: "100gam meat ,20gam sugar, 20gam vegetable"

    },
    {
        id:9,
        name:'grill salmonW',
        url:"https://znews-photo.zadn.vn/w660/Uploaded/kbd_bcvi/2019_09_29/tai_xuong.jpg",
        price:22.22,
        intro:"Futo means large. So Futo Maki are large rolls of rice wrapped around several fillings with nori on the inside and often sesame seeds on the outcies. There are normally 10 pieces in a roll. A common examples is a California roll with crab, cucmber and avocado.",
        components: "100gam meat ,20gam sugar, 20gam vegetable"


    }
]



const BestFood = (props) => 
{
    const { navigation ,foodData} = props
    const renderFoodItem = (item)=>(
                <TouchableOpacity key={item.name} onPress={()=>navigation.navigate('ProductDetail',{item:item})}>
                    <Morph style={styles.itemContainer}>
                        <Image source={{uri:item.url}} style={styles.imageBackground}>
                        </Image>
                        <View style={styles.foodInfo}>
                            <View style={styles.headerItem}>
                                <FText size={FontSizes.FONT_15} weight="400">{item.name}</FText>
                            </View>
                            <View style={styles.contentItem}>
                                <View style={styles.ratingView}>
                                    <FText size={FontSizes.FONT_10}>4.5</FText>
                                    <Rating
                                    startingValue={5}

                                    type='custom'
                                    ratingColor={Colors.red_fresh}
                                    ratingBackgroundColor={Colors.opacity_gray}
                                    count={5}
                                    imageSize={12}
                                    style={{ marginLeft:6,width:50 }}
                                    isDisabled={true}
                                    />
                                </View>
                                <FText size={FontSizes.FONT_15} weight="500" >${item.price}</FText>
                            </View>
                            <MoveIcon size={20}/>
                        </View>
                        <HeartIcon size={35}/>
                    </Morph>
                </TouchableOpacity>
    )
    return(
    <View style={styles.container}>
        <FText 
        size={FontSizes.FONT_18}
        weight="500"
        style={styles.header}
        >Best Food</FText>
        <View style={styles.listItem}>
            {foodData.map(renderFoodItem)}
        </View>
    </View>
);}


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
    },
    foodInfo:{
        height:50,
        width:'100%',
        position:'absolute',
        bottom:0,
        // borderRadius:10,
        backgroundColor:'rgba(255,255,255,0.5)',
        paddingHorizontal:10,
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10
    },
    headerItem:{
        flex:1,
        justifyContent:'flex-end'
    },
    contentItem:{
        flex:1,
        ...Styles.row_between_center
    },
    ratingView:{
        ...Styles.row_start_center
    }
})
export default BestFood;
