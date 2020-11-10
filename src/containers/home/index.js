import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import SearchView from './SearchView'
import PopularFood from './PopularFood'
import BestFood from './BestFood'
import LinearGradient from 'react-native-linear-gradient';
import {Colors,FontSizes} from '../../theme'
import { ScrollView } from 'react-native-gesture-handler';
import {useSelector, useDispatch} from 'react-redux'
import AsyncStorage from '@react-native-community/async-storage';
import {actUpProductToCart,setFoods,loadListFoods} from '../../redux/actions'
// import axios from 'axios'




export const Home = (props) => 
{
    const {navigation} = props
    const listFoods = useSelector(state=>state.listFoods)
    const popularFood = listFoods.filter(item=>item.type=="popular")
    const bestFood = listFoods.filter(item=>item.type=="best")

    useEffect(()=>{
        console.log('home')
    },[])

   
  

return(
    <LinearGradient
      style={{flex: 1}}
      colors={[
        Colors.Linear_white1,
        Colors.Linear_white2,
        Colors.Linear_white3,
      ]}>
        <View style={styles.container}>
            <SearchView navigation={navigation} />
            <ScrollView>
                <PopularFood navigation={navigation} foodData={popularFood} />
                <BestFood  navigation={navigation} foodData={bestFood}/>
            </ScrollView>

        </View>

    </LinearGradient>
    
    
);}

const styles = ScaledSheet.create({
    container:{
        flex:1,
        paddingTop:50
    }
})

 
