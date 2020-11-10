import React,{useState,useEffect} from 'react';
import { Button, Text, View } from 'react-native';
import { ScaledSheet, } from 'react-native-size-matters';
import {Picker} from '@react-native-community/picker';
import RNPickerSelect from 'react-native-picker-select';
import io from "socket.io-client";


// const Play = React.memo( props =>{
//     // console.log('play rerender ')
//     return (<View>
//         <Text>{props.name}</Text>
//     </View>)
// }
// )

const CheckingOrder = (props) => 
{
    // const x= 'aaaaa'
    // const [language,setLanguage] = useState(1)
    // const increase = ()=>setLanguage(language+1)
    useEffect(()=>{
        const socket = io("http://localhost:3003")
        socket.on("chat message", msg => {
            console.log(msg)
    });
    })
 return(
    <View>
        
        <Text>12222</Text>
        
    </View>
);}
const styles = ScaledSheet.create({
    container:{
        flex:1
    }
})
export default CheckingOrder;
