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

const RenderResult = (props) => {
        const { navigation,foods} = props
        const renderFoodItem = ({item})=>
        { 
            // console.log('item',item)
        return(
                <TouchableOpacity key={item.id} 
                onPress={()=>navigation.navigate('ProductDetail',{item:item})}
                >
                    <Morph style={styles.itemContainer}>
                        <View style={styles.foodContainer}>
                            <Image style={styles.foodImg} source={{uri:item.url}}/>
                            <View style={styles.foodInfor}>
                                <FText 
                                size={FontSizes.FONT_15}
                                weight="400"
                                >{item.name}</FText>
                                <FText 
                                weight="300"
                                size={FontSizes.FONT_12}
                                color={Colors.buttonColorDark}
                                >{item.price}$</FText>
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
                                <FText 
                                weight="300"
                                size={FontSizes.FONT_12}
                                numberOfLines={2}
                                >{item.intro}</FText>     
                            </View>
                        </View>
                           
                        <MoveIcon size={20}/>
                        <HeartIcon size={25} style={styles.heart}/>
                    </Morph>
                </TouchableOpacity>
        )
    }
  return (
    <FlatList
      data={foods}
      keyExtractor={(item) => item._id}
      renderItem={renderFoodItem}
    />
  );
};


const styles = ScaledSheet.create({
  
    itemContainer:{
        width:'100%',
        height:'110@vs',
        marginVertical:5,
        borderRadius:10,
    },
    foodContainer:{
        flex:1,
        flexDirection:'row'
    },
    foodImg:{
        flex:3,
        width:'110@vs',
        height:'110@vs',
        borderRadius:10,

    },
    foodInfor:{
        flex:4,
        paddingHorizontal:'10@s',
        paddingVertical:"5@vs",
        justifyContent:'space-between'

    },
    heart:{
        position:'absolute',
        top:5,
        left:5
    }
    
})

export default React.memo(RenderResult);
