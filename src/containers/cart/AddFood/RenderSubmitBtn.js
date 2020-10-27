import React, { useState,useMemo  } from 'react';
import { Text, View ,Image,TouchableOpacity,KeyboardAvoidingView,StyleSheet} from 'react-native';
import { ScaledSheet, } from 'react-native-size-matters';
import {
    FText ,
    TextInput,
    VectorIcon,
    Morph,
    HeartIcon,
    MoveIcon,
    ReturnButton,
    FButton
} from '../../../components'
import { FontSizes,Colors} from '../../../theme'
import { Styles } from '../../../styles'



const RenderSubmitBtn = ({
    name,onPress
}) => (
    <FButton
        style={styles.container}
        title={name}
        onPress={onPress}
    />
);


const styles = StyleSheet.create({
    container:{
        position:'absolute',
        bottom:20
    }
})
export default RenderSubmitBtn;
