import React from 'react';
import { Text, View ,Button} from 'react-native';
import { ScaledSheet, } from 'react-native-size-matters';
import AsyncStorage from '@react-native-community/async-storage';

const DoneOrder = ({
    params,
}) => 
{

    const getFoods = async () => {
        try {
          const jsonValue = await AsyncStorage.getItem('FoodCart')
          console.log('jsonValue',JSON.parse(jsonValue))

          return jsonValue != null ? JSON.parse(jsonValue) : null;
        } catch(e) {
          // error reading value
        }
    }


    

    
 return(
    <View>
        <Text>00</Text>
        <Button
            title="jjaja"
            onPress={()=>getFoods()}
        />
    </View>
);}
const styles = ScaledSheet.create({
    container:{
        flex:1
    }
})
export default DoneOrder;
