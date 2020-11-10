import React from 'react';
import { Text, View,ScrollView,Image ,TouchableOpacity} from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import {
    FText ,
    TextInput,
    VectorIcon,
    Morph,
} from '../../components'
import {Colors,FontSizes} from '../../theme'
import color from 'color'
import { Styles } from '../../styles'


const SearchView = (props) => 
{
    const {navigation} = props

    //Render Header 
    const RenderHeader = ()=>(
        <View style = {styles.header}>
            <FText size={FontSizes.FONT_15}  medium weight={'300'} color={'rgb(110,109,110)'}  >What would you like to eat Today?</FText>
            <TouchableOpacity 
            style={styles.cartIcon}
            onPress={()=>navigation.navigate('Cart')}

            >
                <VectorIcon Ionicons name="ios-cart" color={Colors.white} size={30}/>
            </TouchableOpacity>
        </View>
    )

    // item of suggestions
    const  FoodItem = ({type,source})=>(
        <TouchableOpacity 
            style={styles.itemContainer} 
            onPress={()=>navigation.navigate('Search',{
                keyWord:type
            })}
        >
            <Morph style={styles.iconContainer}>
                <Image source={source}  style={styles.icon}/>
            </Morph>
            <FText h3 size={FontSizes.FONT_14} weight={'500'} style={styles.nameType}>{type}</FText>
        </TouchableOpacity>
    )
    
    //render input view        
    const RenderSearchView = ()=>(
        <TouchableOpacity 
        onPress={()=>navigation.navigate('Search',{})}
        style={styles.input}
        >
            <VectorIcon EvilIcons name={'search'} size={35} color ={Colors.red_fresh} />
            <FText h4 color={Colors.gray}> Find a food .....</FText>
        </TouchableOpacity>
    )
    
    // Render suggests
    const RenderListSuggestion = ()=>(
        <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                >
            <FoodItem      
                type="sushi"  
                source={require('../../assets/icons/sushi.png')}/>
            <FoodItem      
                type="fruit" 
                source={require('../../assets/icons/fruit.png')}/>
            <FoodItem      
                type="icecream" 
                source={require('../../assets/icons/icecream.png')}/>
            <FoodItem      
                type="fastfood" 
                source={require('../../assets/icons/fastfood.png')}/>
            <FoodItem      
                type="protein" 
                source={require('../../assets/icons/meat.png')}/>

        </ScrollView>
    )

    // Render MainView
    return(
    <View style={styles.container}>
        <RenderHeader/>
        <RenderSearchView/>
        <RenderListSuggestion/>
    </View>
);}


const styles = ScaledSheet.create({
    container:{
        width:'100%',
        height:'185@vs',
        backgroundColor:Colors.white,
        padding:15,
        borderBottomWidth:0.2,
        borderBottomColor:Colors.gray,
        //color(Colors.opacity_gray).darken(0.5).alpha(0.5)
    },
    header:{
       ...Styles.row_between_center,
       marginBottom:2
    },
    cartIcon:{
        width:'40@s',
        height:'40@s',
        backgroundColor:Colors.red_fresh,
        borderRadius:'20@s',justifyContent:'center',
        alignItems:'center'
    },

    input:{
        width:'100%',
        height:50,
        borderRadius:10,
        borderWidth:1,
        borderColor:Colors.opacity_gray,
        ...Styles.row_start_center,
        marginBottom:10,

    },
    itemContainer:{
        width:'80@s',
        height:'80@vs',
        ...Styles.center_center
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
