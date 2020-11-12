import React,{useState,useEffect} from 'react';
import { 
    View ,
    TouchableOpacity,
    ImageBackground,
     Image, 
     KeyboardAvoidingView
} from 'react-native';
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
import{useDispatch} from 'react-redux'
import { actRegister} from '../../redux/actions'
import {Colors, FontSizes} from '../../theme'

const SignUpForm = ({
    navigation,
}) => 
{
    const dispatch = useDispatch()
    
    return(
    <Formik 
    initialValues={{ username: '',password:'',mobile:''}}
    validationSchema={SignUnschema}
    onSubmit={(values,actions) => {
    // actions.resetForm()
    // alert(values.username +"__"+ values.password +" " + values.mobile)
    dispatch(actRegister(values.username,values.password,values.mobile))
                }}
    >
        {({ handleChange, handleBlur, handleSubmit, values ,errors,touched})=>(
        <View style={styles.container}>
            <FTextInput
             autoCapitalize={'none'}
             onChangeText={handleChange('username')}
             onBlur={handleBlur('username')}
             value={values.username}
             style={styles.input}
             placeholder="username"
             leftComponent = {
                 <VectorIcon AntDesign name="user" size={25} color={Colors.red_fresh}/>
             }
             />
            <FText style={styles.txtErr}>{touched.username && errors.username}</FText>
            <FTextInput
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            value={values.password}
            autoCapitalize={'none'}
            style={styles.input}
            placeholder="password"
            password
            leftComponent = {
                <VectorIcon AntDesign name="lock" size={25} color={Colors.red_fresh}/>
            }
            />
            <FText style={styles.txtErr}>{touched.password && errors.password}</FText>

            <FTextInput
            onChangeText={handleChange('mobile')}
            onBlur={handleBlur('mobile')}
            value={values.mobile}
            autoCapitalize={'none'}
            style={styles.input}
            placeholder="phone"
            leftComponent = {
                <VectorIcon AntDesign name="phone" size={25} color={Colors.red_fresh}/>
            }
            />
            <FText style={styles.txtErr}>{touched.mobile && errors.mobile}</FText>

            <TouchableOpacity
                style={styles.btn}
                onPress={handleSubmit}
                    >
                        <FText 
                        h2 semibold color={Colors.white}
                        >Sign Up</FText>
            </TouchableOpacity>

            <FText h4 weight="400" style={styles.bottomTxt}>If you had account , Please
                    <FText h4 weight="500" color={Colors.red_fresh}
                        onPress={()=>navigation.navigate('SignIn')}
                     > Sign In</FText>
            </FText>
        </View>
        )}
    </Formik>
);
}

const SignUnschema = Yup.object({
    username:Yup.string()
    .required('Username is required')
    ,
    password:Yup.string()
    .required('Password is required')
    ,
    mobile:Yup.number()
    .required('Phone is required')
    .min(10)
    
  
  })



 const styles = ScaledSheet.create({
     container:{
         flex:4,
         paddingTop:'50@s'
         
     },
     input:{
        backgroundColor:'rgba(255,255,255,0.1)',
        alignSelf:'center'
     },
     txtErr:{
        fontSize:FontSizes.FONT_13,
        color:Colors.red,
        fontWeight:'500',
        marginLeft:'50@s'
    },
    btn:{
        width:'85%',
        height:'50@s',
        backgroundColor:Colors.red_fresh,
        borderRadius:10,
        ...Styles.center_center,
        alignSelf:'center',
        marginTop:'100@s'
    },
    bottomTxt:{
        marginTop:'100@s',
        alignSelf:'center',
        color:Colors.Sapphire
    }

 }) 

export default SignUpForm;
