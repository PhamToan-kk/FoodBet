import React,{useEffect, useRef, useState} from 'react';
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
import {useSelector, useDispatch} from 'react-redux'
import RenderResult from './RenderResult';
export const Search = (props) => 
{   
    const {navigation,route} = props
    const {keyWord} = route.params
    const [searchTerm,setSearchTerm] = useState(keyWord)
    const [filterFoods,setFilterFoods] = useState([])
    const typingTimeoutRef = useRef(null)

    useEffect(()=>{
        filterFood(searchTerm)
    },[])

    const listFoods = useSelector(state=>state.listFoods)
    
    const filterFood = (key)=>{
        if(!key) return
        const re = RegExp(`.*${key.toLowerCase().split('').join('.*')}.*`)

        const matches = listFoods.filter(v => v.name.toLowerCase().match(re))
        setFilterFoods(matches)
        // console.log('key',key)
    }
    const handleSearchTermChange = (text)=>{
        setSearchTerm(text)
        if(typingTimeoutRef.current){
            clearTimeout(typingTimeoutRef.current)
        }

        typingTimeoutRef.current = setTimeout(
            ()=>{
                filterFood(text)

            }
            ,
            1000
        )
    }



    return(
    <View style={styles.container}>
        <View style={styles.searchInput}>
            <TextInput 
            style={styles.input}
            placeholder="Find a food..."
            value={searchTerm}
            onChangeText={handleSearchTermChange}
            leftComponent={<VectorIcon EvilIcons name={'search'} size={35} color ={Colors.red_fresh} />}
            />
            <TouchableOpacity onPress={()=>navigation.goBack()}>
                <FText size={FontSizes.FONT_13} weight="400" color={Colors.red_fresh} >Cancel</FText>
            </TouchableOpacity>
        </View>
        
        <RenderResult navigation={navigation} foods ={filterFoods}/>

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
        backgroundColor:Colors.white,
        color:'black'
    }
}
)
