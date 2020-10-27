import React,{useState} from 'react';
import { Button, Text, View } from 'react-native';
import { ScaledSheet, } from 'react-native-size-matters';
import {Picker} from '@react-native-community/picker';
import RNPickerSelect from 'react-native-picker-select';


const Play = React.memo( props =>{
    // console.log('play rerender ')
    return (<View>
        <Text>{props.name}</Text>
    </View>)
}
)

const CheckingOrder = (props) => 
{
    const x= 'aaaaa'
    const [language,setLanguage] = useState(1)
    const increase = ()=>setLanguage(language+1)
 return(
    <View>
        <Play name={x}/>
        <Button
        title="CLICKKK"
        onPress={increase}
        >
        

        </Button>

        <Text>{language}</Text>
        
    </View>
);}
const styles = ScaledSheet.create({
    container:{
        flex:1
    }
})
export default CheckingOrder;
