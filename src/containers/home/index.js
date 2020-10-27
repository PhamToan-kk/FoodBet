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
import {actUpProductToCart} from '../../redux/actions'


export const Home = (props) => 
{
    const {navigation} = props
    const dispatch = useDispatch()
    const popularFood = useSelector(state=>state.popularFood)
    const getFoodsCart = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('FoodCart')
            // return jsonValue != null ? JSON.parse(jsonValue) : null;
            if(jsonValue != null){
                dispatch(actUpProductToCart(JSON.parse(jsonValue)))
                console.log('data asynce',JSON.parse(jsonValue))
            }

        } catch(e) {
          // error reading value
        }
      }
    useEffect(()=>{
        getFoodsCart()
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
                <BestFood  navigation={navigation}/>
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

 
