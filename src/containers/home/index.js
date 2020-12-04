import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import SearchView from './SearchView'
import PopularFood from './PopularFood'
import DiscountView from './DiscountView'
import BestFood from './BestFood'
import LinearGradient from 'react-native-linear-gradient';
import {Colors,FontSizes} from '../../theme'
import { ScrollView } from 'react-native-gesture-handler';
import {useSelector, useDispatch} from 'react-redux'
import {actUpProductToCart,setFoods,loadListFoods} from '../../redux/actions'



export const Home = (props) => 
{
    const {navigation} = props
    const listFoods = useSelector(state=>state.listFoods)
    const {
        discountPercent,
    } = useSelector(state=>state.otherInfo)
    const popularFood = listFoods.filter(item=>item.type=="popular")
    const bestFood = listFoods.filter(item=>item.type=="best")
    useEffect(()=>{
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
                <DiscountView discount={discountPercent}/>
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

 
