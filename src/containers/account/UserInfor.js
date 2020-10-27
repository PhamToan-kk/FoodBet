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
import UserAvatar from 'react-native-user-avatar';


const UserInfor = ({
    params,
}) => (
    <View style={styles.container}>
        <FText h2  style={styles.txtTitle}>Profile</FText>
        <UserAvatar size={120} name="Toan Dep "  />
        <FText h3 style={styles.nameUser}>Toan Dep trai</FText>
        <View style={styles.addressView}>
            <VectorIcon EvilIcons name="location" size={28} color={Colors.red_fresh}/>
            <View style={styles.addressInfor}>
                <FText style={styles.txtValue}>565 Nguyen Trai street ,Ha Dong</FText>
            </View>
        </View>    
    </View>
);

const styles = ScaledSheet.create({
    container:{
        flex:1,
        paddingTop:'50@s',
        alignItems:'center'
    },
    txtTitle:{
        textAlign:'center',
        marginBottom:'20@s',
        fontWeight:'400'
    },
    nameUser:{
        marginVertical:'10@s'
    },
    addressView:{
        alignItems:'center',
        flexDirection:'row'

    },
    addressInfor:{
        justifyContent:'center',
        alignItems:'flex-start'
    },

    txtValue:{
        fontSize:FontSizes.FONT_13,
        fontWeight:'300'

    }
})

export default UserInfor;
