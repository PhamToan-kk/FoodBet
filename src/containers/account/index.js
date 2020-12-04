import React from 'react';
import { Text, View ,StyleSheet} from 'react-native';
import { Styles } from '../../styles';
import Settings from './Setting'
import UserInfor from './UserInfor'
import {useSelector} from 'react-redux'

export const Account = (props) => 

{
    const {
        username
    } = useSelector(state=>state.userInfo)
    const {
        address
    } = useSelector(state=>state.otherInfo)    
    return(
    <View
    style={styles.container}
    >
        <View style={styles.infor}>
            <UserInfor username={username} address={address}/>
        </View>
        <View style={styles.settings}>
            <Settings /> 
        </View>     
    </View>
);
}
const styles = StyleSheet.create({
    container:{
        flex:1
    },
    infor:{
        flex:4
    },
    settings:{
        flex:5
    }
})
 ;
