import React,{useState,useEffect} from 'react';
import { Text, View ,TouchableOpacity,ImageBackground, KeyboardAvoidingView ,Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { ScaledSheet, } from 'react-native-size-matters';
import SignUpForm  from './SignUpForm'
import {Colors, FontSizes} from '../../theme'
import {
    FText ,
    VectorIcon,
    Morph,
    HeartIcon,
    MoveIcon,
    FTextInput
} from '../../components'
import { Styles } from '../../styles';

export const SignUp = (props) => 
{
    const { navigation } = props
    RenderHeader = ()=>(
        <View style={styles.header}>
            <FText h1 style={styles.headerTitle}>SignIn</FText>
            <Image source={require('../../assets/images/logo.png')}
                     style={styles.logoImg}
            />
        </View>
    )
    return(
    <View style={styles.container}>
        <ImageBackground 
        style={styles.imgBackground}
        source={require('../../assets/images/background.png')}
        >
            <LinearGradient
            colors={['rgba(99,184,255,0.5)', 'rgba(24,116,205,0.5)','rgba(44, 49, 75, 0.5)']} style={{flex:1}} 
            >
                <KeyboardAvoidingView style={{flex:1,}} behavior='padding'>
                    <RenderHeader/>
                    <SignUpForm navigation={navigation}/>
                </KeyboardAvoidingView>
            </LinearGradient>
        </ImageBackground>
    </View>
);

}


const styles = ScaledSheet.create({
    container:{
        flex:1,
    },
    imgBackground:{
        flex:1,
        width: '100%',
        height:'100%'
    },
    header:{
        flex:1,
        paddingHorizontal:'7.5%',
        // paddingTop:50
        ...Styles.row_between_start
    },
    headerTitle:{
        fontWeight:'500',
        color:Colors.Sapphire,
        marginLeft:'7.5%',
        paddingTop:50
    },
    logoImg:{
        width:100,height:100,alignSelf:'center',marginTop:30
    },
})
 
