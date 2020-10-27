import React from 'react';
import { Text, View ,StyleSheet} from 'react-native';
import { Styles } from '../../styles';
import Settings from './Setting'
import UserInfor from './UserInfor'


export const Account = (props) => (
    <View
    style={styles.container}
    >
        <View style={styles.infor}>
            <UserInfor/>
        </View>
        <View style={styles.settings}>
            <Settings /> 
        </View>     
    </View>
);

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
