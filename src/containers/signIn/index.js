import React,{useState,useEffect} from 'react';
import { Text, View ,TouchableOpacity,ImageBackground, Button,Image, KeyboardAvoidingView
    
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { ScaledSheet, } from 'react-native-size-matters';
import { withFormik,Formik } from 'formik'
import * as Yup from 'yup'
import { Styles } from '../../styles'

import {
    FText ,
    VectorIcon,
    Morph,
    HeartIcon,
    MoveIcon,
    FTextInput
} from '../../components'

import {Colors, FontSizes} from '../../theme'

import SignInForm from './SignInform'


export const SignIn = (props) => 
{
    const [username,setUsername] = useState()
    const [password,setUserPassword] = useState()
    const {
        navigation
    } = props


    return(
    <View style={styles.container}>
        <ImageBackground 
        style={styles.imgBackground}
        source={require('../../assets/images/background.png')}
        >
            <LinearGradient
            colors={['rgba(99,184,255,0.5)', 'rgba(24,116,205,0.3)','rgba(44, 49, 75, 0.5)']} style={styles.linearView} 
            >
            <KeyboardAvoidingView 
            style={{flex:1,paddingTop:50}}
            // behavior="position"
            >
                <FText h1 style={styles.headerTitle}>SignIn</FText>
                <Image source={require('../../assets/images/logo.png')}
                     style={styles.logoImg}
                />
                <SignInForm username={username} password={password}/>
                <FText h4 weight="400" style={styles.bottomTxt}>If you don't have account , Please
                    <FText h4 weight="500" color={Colors.red_fresh}
                        onPress={()=>navigation.navigate('SignUp')}
                    > Sign Up</FText>
                </FText>
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
    headerTitle:{
        fontWeight:'500',
        color:Colors.Sapphire,
        marginLeft:'7.5%'
    },
    imgBackground:{
        flex:1,
        width: '100%',
        height:'100%'
    },
    logoImg:{
        width:200,height:200,alignSelf:'center',marginTop:30
    },
    linearView:{
        flex:1
    },
    bottomTxt:{
        position:'absolute',
        bottom:100,
        alignSelf:'center',
        color:Colors.Sapphire
    }
})