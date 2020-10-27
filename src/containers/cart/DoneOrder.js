import React,{useEffect, useState} from 'react';
import { Text, View ,Button,FlatList,Image} from 'react-native';
import { ScaledSheet, } from 'react-native-size-matters';
import AsyncStorage from '@react-native-community/async-storage';


const data = [
    {id:1,name:'toan',age:'1',url:"https://www.pennmedicine.org/-/media/images/miscellaneous/food%20and%20drink/colorful_plate.ashx?mw=620&mh=408",},
    {id:2,name:'toan',age:'1',url:"https://www.pennmedicine.org/-/media/images/miscellaneous/food%20and%20drink/colorful_plate.ashx?mw=620&mh=408",},
    {id:3,name:'toan',age:'1',url:"https://www.pennmedicine.org/-/media/images/miscellaneous/food%20and%20drink/colorful_plate.ashx?mw=620&mh=408",},
    {id:4,name:'toan',age:'1',url:"https://www.pennmedicine.org/-/media/images/miscellaneous/food%20and%20drink/colorful_plate.ashx?mw=620&mh=408",},
    {id:5,name:'toan',age:'1',url:"https://www.pennmedicine.org/-/media/images/miscellaneous/food%20and%20drink/colorful_plate.ashx?mw=620&mh=408",},
    {id:6,name:'toan',age:'1',url:"https://www.pennmedicine.org/-/media/images/miscellaneous/food%20and%20drink/colorful_plate.ashx?mw=620&mh=408",},
    {id:7,name:'toan',age:'1',url:"https://www.pennmedicine.org/-/media/images/miscellaneous/food%20and%20drink/colorful_plate.ashx?mw=620&mh=408",},
    {id:8,name:'toan',age:'1',url:"https://www.pennmedicine.org/-/media/images/miscellaneous/food%20and%20drink/colorful_plate.ashx?mw=620&mh=408",},

]
const DoneOrder = ({
    params,
}) => 
{
    useEffect(()=>{
     console.log('rerender vip')   
    })
    const [datas,setDatas] = useState(data)
    const deleteItem= (index)=>{
         datas.splice(index,1)
         setDatas([...datas])
    }
    const renderItem=({item,index})=>(
        <View style={{width:200,height:150,marginBottom:20}}>
            <Text>{item.id}</Text>
            <Text>{item.name}</Text>
            <Image
                source={{uri:item.url}}
                style={{width:100,height:100}}
            />
            <Text>indeex:{index}</Text>
            <Button
            title={'delete'}
            onPress={()=>deleteItem(index)}
            ></Button>
        </View>
    )
    
 return(
    <View>
        <Text>00</Text>
        <FlatList
            data={datas}
            keyExtractor={(item)=>item.id.toString()}
            renderItem={renderItem}
        />
    </View>
);}
const styles = ScaledSheet.create({
    container:{
        flex:1
    }
})
export default DoneOrder;
