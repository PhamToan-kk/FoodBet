import React,{useEffect, useState} from 'react';
import { Text, View,TouchableOpacity } from 'react-native';
import { ScaledSheet, } from 'react-native-size-matters';
import {Colors,FontSizes} from '../../theme'
import { Styles } from '../../styles'
import {
    FText ,
    TextInput,
    VectorIcon,
    Morph,
    HeartIcon,

    MoveIcon,
} from '../../components'
import Color from 'color';

export const Search = (props) => 
{   
    const {navigation,route} = props
    const {keyWord} = route.params
    const [value,setValue] = useState()
    //render input view
    useEffect(()=>{
        if(keyWord) setValue(keyWord)
    },[])
    

    return(
    <View style={styles.container}>
        <View style={styles.searchInput}>
            <TextInput 
            style={styles.input}
            placeholder="Find a food..."
            value={value}
            onChangeText={(txt)=>setValue(txt)}
            leftComponent={<VectorIcon EvilIcons name={'search'} size={35} color ={Colors.red_fresh} />}
            />
            <TouchableOpacity onPress={()=>navigation.goBack()}>
                <FText size={FontSizes.FONT_13} weight="400" color={Colors.red_fresh} >Cancel</FText>
            </TouchableOpacity>
        </View>
    </View>
);
}

const styles = ScaledSheet.create({
    container:{
        flex:1,
        paddingHorizontal:10,
        paddingTop:50,
        backgroundColor:Colors.Linear_white5
    },
    searchInput:{
        width:'100%',
        height:'50@vs',
        ...Styles.row_between_center
    },
    input:{
        width:'85%',
        borderRadius:10,
        backgroundColor:Colors.white
    }
}
)
