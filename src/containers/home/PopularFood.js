import React from 'react';
import { Text, View,FlatList,Dimensions,Image ,TouchableOpacity} from 'react-native';
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
import { Styles } from '../../styles'
import PropTypes from 'prop-types'; // ES6




const data = [
    {
        id:1,
        name:'grill salmon',
        url:"https://asterseniorcommunities.com/wp-content/uploads/2017/03/plate-food.jpg",
        price:22,
        intro:"Futo means large. So Futo Maki are large rolls of rice wrapped around several fillings with nori on the inside and often sesame seeds on the outcies. There are normally 10 pieces in a roll. A common examples is a California roll with crab, cucmber and avocado.",
        review:[
            {customer:'John',content:'it is good food for my heal',time:'April 4,2019'},
            {customer:'JohnDoe',content:'it is good food for my heal hu',time:'April 4,2019'},
            {customer:'JanDoe',content:'it is good food for my heal hu',time:'April 4,2019'},
        ]
    },
    {
        id:2,
        name:'grill salmon',
        url:"https://images.blogthings.com/whatthanksgivingleftoversareyouquiz/plate-of-food.jpg",
        price:22,
        intro:"Futo means large. So Futo Maki are large rolls of rice wrapped around several fillings with nori on the inside and often sesame seeds on the outcies. There are normally 10 pieces in a roll. A common examples is a California roll with crab, cucmber and avocado.",
        review:[
            {customer:'John',content:'it is good food for my heal',time:'April 4,2019'},
            {customer:'JohnDoe',content:'it is good food for my heal hu',time:'April 4,2019'},
            {customer:'JanDoe',content:'it is good food for my heal hu',time:'April 4,2019'},
        ]

    },
    {
        id:3,
        name:'grill salmon',
        url:"https://znews-photo.zadn.vn/w660/Uploaded/kbd_bcvi/2019_09_29/tai_xuong.jpg",
        price:22,
        intro:"Futo means large. So Futo Maki are large rolls of rice wrapped around several fillings with nori on the inside and often sesame seeds on the outcies. There are normally 10 pieces in a roll. A common examples is a California roll with crab, cucmber and avocado.",
        review:[
            {customer:'John',content:'it is good food for my heal',time:'April 4,2019'},
            {customer:'JohnDoe',content:'it is good food for my heal hu',time:'April 4,2019'},
            {customer:'JanDoe',content:'it is good food for my heal hu',time:'April 4,2019'},
        ]

    }
]



const PopularFood = (props) => 
{
    const { navigation ,foodData} = props

    const renderFoodItem = ({item})=>(
        <TouchableOpacity onPress={()=>navigation.navigate('ProductDetail',{item:item})}>
        <Morph style={styles.foodItem}>
            <LinearGradient
                style={styles.imageView}
                colors={[
                    Colors.Linear_white1,
                    Colors.Linear_white2,
                    Colors.Linear_white3,
                ]}>
                <Image 
                style={styles.image}
                source={{uri:item.url}}>

                </Image>
                <HeartIcon/>  
            </LinearGradient>
            <View style={styles.infoView}>
                <View style={styles.headerItem}>
                    <FText size={FontSizes.FONT_15} weight="400">{item.name}</FText>
                </View>
                <View style={styles.contentItem}>
                    <View style={styles.ratingView}>
                        <FText size={FontSizes.FONT_10}>4.5</FText>
                        <Rating
                        type='custom'
                        ratingColor={Colors.red_fresh}
                        ratingBackgroundColor={Colors.opacity_gray}
                        ratingCount={5}
                        imageSize={10}
                        style={{ marginLeft:1,width:50 }}
                        isDisabled
                        defaultRating={1}
                        />
                    </View>
                    <FText size={FontSizes.FONT_11} weight="500" >${item.price}</FText>
                   
                </View>
                <MoveIcon/>
            </View>
        </Morph>
        </TouchableOpacity>
    )
    
    return(
    <View style={styles.container}>
        <FText 
        size={FontSizes.FONT_16}
        weight="500"
        style={styles.header}
        >Popular Food</FText>
        <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={foodData}
        renderItem={renderFoodItem}
        keyExtractor={(item)=>item.id.toString()}
        />

    </View>
);}


PopularFood.propTypes = {
    foodData: PropTypes.array,
}
const styles = ScaledSheet.create({
    container:{
        height:'220@vs',
        width:'100%',
        paddingHorizontal:10,
        // backgroundColor:'red'
    },
    header:{
        marginVertical:10
    },
    foodItem:{
        height:'170@vs',
        width:'150@s',
        backgroundColor:Colors.Linear_white1,
        marginRight:15

    },
    imageView:{
        flex:5,
        justifyContent:'center',
        alignItems:'center',
         borderTopRightRadius:10,
        borderTopLeftRadius:10

    },
    infoView:{
        flex:2,
        backgroundColor:Colors.white,
        borderRadius:10,
        paddingHorizontal:10
    },
    image:{
        width:'100%',
        height:'100%',
        borderTopRightRadius:10,
        borderTopLeftRadius:10
        
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

export default PopularFood;
