import React,{useState,useEffect} from 'react';
import { ScaledSheet, } from 'react-native-size-matters';
import {useSelector} from 'react-redux'
import {orderApi} from '../../apis/OrderApi'
import { 
    View ,
    FlatList,
    TouchableOpacity ,
    ActivityIndicator,
    Image} from 'react-native';
import {Colors,FontSizes} from '../../theme'
import { Styles } from '../../styles'
import {
    FText ,
    VectorIcon,
    Morph,
    HeartIcon,
    FTextInput,
    MoveIcon,
} from '../../components'

const CheckingOrder = (props) => 
{
    const{navigation} = props
    const {id} = useSelector(state=>state.userInfo)
    const [data,setData] = useState([])
    const getData = ()=>{
        const params = {
            customerId : id
        }
        orderApi.getOrderNotActive(params)
        .then(resj=>{
            setData(resj)
            console.log('response',resj)
        })
        .catch(err=>console.log(err))
    }
    useEffect(()=>{
        getData()
    },[])
    const renderItem = ({item})=>(
        <TouchableOpacity 
        style={[styles.orderItem,{backgroundColor:Colors.blueNoti}]}
        onPress={()=>navigation.navigate('OrderDetail',{item:item})}
        >
            <View style={styles.leftItem}>
                <View style={styles.imgView}>
                    <Image style={styles.img} source={require('../../assets/icons/orderIcon.png')}/>
                </View>
            </View>
            <View style={styles.rightItem}>
                <FText style={styles.orderName}>Order {item.name}</FText>
                <FText>Customer: {item.customername}</FText>
                <FText>Cost: {item.paymenttotal}$</FText>
                <FText>Active: {item.isactive ? "done":"no"}</FText>
                <FText>{item.time}</FText>
                <MoveIcon/>
            </View>
        </TouchableOpacity>
    )
 return(
    <View style={styles.container}>
        <FlatList
            data={data}
            keyExtractor={(item,index)=>item._id}
            renderItem={renderItem}
            ItemSeparatorComponent={()=> (<View style={{height:3,backgroundColor:'white'}}/>)}

        />
    </View>
);}
const styles = ScaledSheet.create({
    container:{
        flex:1,
        paddingTop:15
    },
    orderItem:{
        width:'100%',
        height:'100@s',
        // backgroundColor:Colors.red_fresh_opacity,
        flexDirection:'row'
    },
    leftItem:{
        flex:1,
        ...Styles.center_center
    },
    rightItem:{
        flex:2,
        paddingHorizontal:10,
        paddingTop:10
    },
    img:{
        width:'50@s',
        height:'50@s',
        borderRadius:999,
        resizeMode:'contain'
    },  
    loader:{
        marginTop:10,
        alignItems:'center'
    },
    imgView:{
        width:'90@s',
        height:'90@s',
        backgroundColor:'white',
        ...Styles.center_center,
        borderRadius:99
    },
    orderName:{
        fontSize:FontSizes.FONT_15,
        fontWeight:'300'
    }
})
export default CheckingOrder;
