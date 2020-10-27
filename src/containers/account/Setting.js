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

const Settings = (props) => 
{
    const RenderBtn = ({
        onPress, name , icon
    })=>(
        <TouchableOpacity style={styles.btn}>
            {icon}
            <FText h4 style={styles.nameBtn}>{name}</FText>
        </TouchableOpacity>
    )
    return(
    <View style={styles.container}>
        <FText h3  >Account Settings</FText>
        <RenderBtn 
        name={'Old Orders'}
        icon={<VectorIcon AntDesign name={'carryout'} size={20} color={Colors.red_fresh}/>}
        />
        

        <RenderBtn 
        name={'Payment Card'}
        icon={<VectorIcon AntDesign name={'creditcard'} size={20} color={Colors.red_fresh}/>}

        />
        <RenderBtn name={'Logout'}
        icon={<VectorIcon AntDesign name={'logout'} size={20} color={Colors.red_fresh}/>}
        />

    </View>
);}

const styles = ScaledSheet.create({
    container:{
        flex:1,
        // backgroundColor:'pink',6
        backgroundColor:'rgba(255,255,255,0.6)',
        paddingTop:'10@vs',
        paddingLeft:'15@s'
    },
    btn:{
        marginVertical:'10@vs',
        ...Styles.row_start_center
    },
    nameBtn:{
        marginLeft:'10@s'
    }
})

export default Settings;
