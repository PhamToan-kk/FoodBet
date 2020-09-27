import React,{useState,useEffect} from 'react';
import { Text, View,FlatList,Image,TouchableOpacity,StyleSheet} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { ScaledSheet, } from 'react-native-size-matters';
import {
    FText ,
    TextInput,
    VectorIcon,
    Morph,
    HeartIcon,
    MoveIcon,
    Divider,
    FButton
} from '../../components'
import {Styles } from '../../styles'
import { FontSizes,Colors} from '../../constants'
import RNPickerSelect from 'react-native-picker-select';

const data = [
    {
        id:1,
        name:'grill salmon',
        url:"https://www.pennmedicine.org/-/media/images/miscellaneous/food%20and%20drink/colorful_plate.ashx?mw=620&mh=408",
        price:22.22,

    },
    {
        id:2,
        name:'grill salmon',
        url:"https://images.blogthings.com/whatthanksgivingleftoversareyouquiz/plate-of-food.jpg",
        price:23.22,

    },
    {
        id:3,
        name:'grill salmon',
        url:"https://znews-photo.zadn.vn/w660/Uploaded/kbd_bcvi/2019_09_29/tai_xuong.jpg",
        price:22.22,


    },

]


const AddFood = (props) => 
{   
    const {listCartFood} = props
    const [method,setMethod] = useState('On Card')
    const [totalPrice,setTotalPrice] = useState(0)
    const setTotal = ()=>{
        let total = 0
        if(listCartFood.length>0){
            for(let i = 0;i<=listCartFood;i++){
                const priceForEachType = listCartFood[i].amount * listCartFood[i].product.price
                totalPrice+= priceForEachType
            }
        }
        setTotalPrice(total)
        
    }
    useEffect(()=>{
       setTotal()
    },[listCartFood])



    //render List food
    const RenderListFood = ()=>{
       return listCartFood.map((item)=>(
            <Morph style={styles.foodItem} key={item.product.id}>
               <View style={{flex:1,flexDirection:'row'}}>
                <Image style={styles.image} source={{uri:item.product.url}}/>
                <View style = {styles.foodInfor}>
                    <View style={styles.headerItem}>
                        <View>
                            <FText h4 semibold>{item.product.name}</FText>
                            <FText h4 >${item.product.price}</FText>
                        </View>
                        <TouchableOpacity>
                            <VectorIcon FontAwesome name ="trash-o" size={25} color={Colors.gray}/>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.changeAmount}>
                        <Morph style={styles.fixCount}>
                            <TouchableOpacity>
                                <VectorIcon Entypo name="minus" size={17} color={Colors.red_fresh}/>
                            </TouchableOpacity>
                            <FText size={FontSizes.FONT_13} color={Colors.green}>{item.amount}</FText>
                            <TouchableOpacity>
                                <VectorIcon Entypo name="plus" size={17} color={Colors.red_fresh}/>
                            </TouchableOpacity>
                        </Morph>
                    </View>
                </View>
               </View>
            </Morph>
       ))
    }
     //render Bill
     
    const RenderBill = ()=>(
            <Morph style={styles.bill}>
                <View style={styles.lineBill}>
                    <FText style={styles.keyBill}>Subtotal</FText>
                    <FText style={styles.keyBill}>$ {totalPrice}</FText>
                </View>
                <Divider /> 
                <View style={styles.lineBill}>
                    <FText style={styles.keyBill}>Ship</FText>
                    <FText style={styles.keyBill}>$ 20</FText>
                </View>
                <Divider />
                <View style={styles.lineBill}>
                    <FText style={styles.keyBill}>Discount</FText>
                    <FText style={styles.keyBill}>$ 5</FText>
                </View>
                <Divider />
                <View style={styles.lineBill}>
                    <FText style={styles.keyBill}>Total</FText>
                    <FText style={styles.keyBill}>$ 195</FText>
                </View>
                <Divider />
                <View style={styles.lineBill}>
                    <FText style={styles.keyBill}>Payment method</FText>
                    <RNPickerSelect
                        placeholder={{}}
                        onValueChange={(value) => setMethod(value)}
                        items={[
                            { label: 'On Card', value: 'football' },
                            { label: 'When reveiving', value: 'baseball' },
                        ]}
                        value={method}

                        style={{
                        ...pickerSelectStyles,
                        iconContainer: {
                            top: 20,
                            right: 10,
                        },
                        placeholder: {
                            color: 'purple',
                            fontSize: 12,
                            fontWeight: 'bold',
                        },
                        }}

                        Icon={() => {
                        return (
                            <View
                            style={{
                                backgroundColor: 'transparent',
                                borderTopWidth: 10,
                                borderTopColor: 'gray',
                                borderRightWidth: 10,
                                borderRightColor: 'transparent',
                                borderLeftWidth: 10,
                                borderLeftColor: 'transparent',
                                width: 0,
                                height: 0,
                            }}
                            />
                        );
                        }}
                    />
                </View>
            </Morph>
    )
    

    return(
        <View style={styles.container}>
            <View  style={{flex:5}}>
                <ScrollView>
                    <RenderListFood/>

                </ScrollView>
            </View>
            <View style={{flex:3}}>
                 <RenderBill/>
            </View>
            <View style={{flex:1}}>
                <FButton title="ORDER" style={{marginVertical:10}}/>
            </View>

        </View>
);}


const styles = ScaledSheet.create({
    container:{
        flex:1,
        paddingTop:10,
        // alignItems:'center'

    },
    foodItem:{
        width:Styles.width-40,
        height:'90@vs',
        backgroundColor:Colors.white,
        marginVertical:5,
        alignSelf:'center'

    },
    bill:{
        width:'100%',
        // height:'120@vs',
        flex:1,
        backgroundColor:Colors.white,
        borderRadius:0
    },
    lineBill:{
        flex:1,
        paddingHorizontal:20,
        ...Styles.row_between_center
    },
    keyBill:{
        fontSize:FontSizes.FONT_14,
        fontWeight:'500'
    },
    image:{
        flex:1,
        width:'100%',
        height:'100%',
        borderRadius:10
    },
    foodInfor:{
        flex:2
    },
    headerItem:{
        ...Styles.row_between_center,
        paddingHorizontal:10,
        paddingTop:20
    },
    changeAmount:{
        justifyContent:'center',
        alignItems:'flex-end',
        paddingRight:15
    },
    fixCount:{
        width:'100@s',
        height:'30@s',
        backgroundColor:Colors. Linear_white6,
        ...Styles.row_around_center
    }
})


const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
      width:150,
      height:'100%',
      fontWeight:'500', 
      fontSize: 16,
      paddingVertical: 5,
      paddingHorizontal: 5,
      borderWidth: 0.5,
      borderColor: 'gray',
      borderRadius: 4,
      color: Colors.greenLight,
      paddingRight: 5, // to ensure the text is never behind the icon
    },

  });
export default AddFood;
