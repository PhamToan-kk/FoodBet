import React from 'react';
import { Text, View,ScrollView,Image ,TouchableOpacity} from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import {
    FText ,
    TextInput,
    VectorIcon,
    Morph,
} from '../../components'
import {Colors,FontSizes} from '../../constants'
import color from 'color'

const SearchView = (props) => 
{
    const  FoodItem = ({type,source})=>(
        <TouchableOpacity style={styles.itemContainer}>
            <Morph style={styles.iconContainer}>
                <Image source={source}  style={styles.icon}/>
            </Morph>
            <FText h3 size={FontSizes.FONT_14} weight={'500'} style={styles.nameType}>{type}</FText>
        </TouchableOpacity>
    )
    return(
    <View style={styles.container}>
        <FText h3  medium weight={'400'} color={'rgb(110,109,110)'} >What would you like to eat Today?</FText>
        <TextInput 
        style={styles.input}
        leftComponent={<VectorIcon EvilIcons name={'search'} size={35} color ={Colors.red_fresh} />}
        placeholder={'find a food ......'} 
        />
        <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        >
            <FoodItem type="sushi"  source={require('../../assets/icons/sushi.png')}/>
            <FoodItem type="fruit" source={require('../../assets/icons/fruit.png')}/>
            <FoodItem type="icecream" source={require('../../assets/icons/icecream.png')}/>
            <FoodItem type="fastfood" source={require('../../assets/icons/fastfood.png')}/>
            <FoodItem type="protein" source={require('../../assets/icons/meat.png')}/>

        </ScrollView>
    </View>
);}


const styles = ScaledSheet.create({
    container:{
        width:'100%',
        height:'180@vs',
        backgroundColor:'white',
        padding:10,
        borderBottomWidth:0.2,
        borderBottomColor:Colors.gray,
        //color(Colors.opacity_gray).darken(0.5).alpha(0.5)
    },
    input:{
        width:'100%',
        borderRadius:10,
        borderColor:Colors.opacity_gray
    },
    itemContainer:{
        width:'80@s',
        height:'80@vs',
        justifyContent:'center',
        alignItems:'center',
    },
    iconContainer:{
        width:'50@vs',
        height:'50@vs',
        backgroundColor:Colors.white
    },
    nameType:{
        marginTop:5,
        color:Colors.gray
    },
    icon:{
        width:'60%',
        height:'60%',
        alignSelf:'center'
    }

})


export default SearchView;
