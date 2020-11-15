import React,{useState,useEffect,useRef} from 'react';
import { Text, View,FlatList,Image,TouchableOpacity,StyleSheet} from 'react-native';
import { ScaledSheet, } from 'react-native-size-matters';
import {
    FText ,
    TextInput,
    VectorIcon,
    Morph,
    HeartIcon,
    MoveIcon,
    Divider,
    FButton,
    FTextInput
} from '../../../components'
import {Styles } from '../../../styles'
import { FontSizes,Colors} from '../../../theme'
import { useSelector,useDispatch} from 'react-redux'
import {actSetTextNote} from '../../../redux/actions'


const RenderAddress = ({
}) => 
{
    const {note} = useSelector(state=>state.otherInfo)
    const [txtNote,setTextNote] = useState(note)
    const typingTimeoutRef = useRef(null)
    const dispatch = useDispatch()
    useEffect(()=>{

    },[])
    const hanldeNote=(txt)=>{
        setTextNote(txt)
        if(typingTimeoutRef.current){
            clearTimeout(typingTimeoutRef.current)
        }

        typingTimeoutRef.current = setTimeout(
            ()=>{
                // filterFood(text)
                dispatch(actSetTextNote(txtNote))
                // alert(txtNote)
            }
            ,
            500
        )
    }
    return(
    <View style={styles.container}>
        <View style={styles.addressView}>
            <VectorIcon EvilIcons name="location" size={28} color={Colors.red_fresh}/>
            <View style={styles.addressInfor}>
                <FText style={styles.txtTitle}>Place of delivery</FText>
                <FText style={styles.txtValue}>7 Dong Quan,Quan Hoa,Cau Giay</FText>
            </View>
        </View>
        <FTextInput
            value={txtNote}
            onChangeText={txt=>hanldeNote(txt)}    

            style={styles.noteView}
            leftComponent = {
                <VectorIcon 
                MaterialIcons 
                name="event-note" 
                color={Colors.gray} 
                size={18}
                />
            }
            placeholder="Note anything"
        />
    </View>
)};
const styles = ScaledSheet.create({
    container:{
        width:'100%',
        height:'90@vs',
        paddingHorizontal:20,

    },
    addressView:{
        flex:3,
         ...Styles.row_start_center

    },
    noteView:{
        flex:2,
        width:'100%',
        height:'140@vs',
        backgroundColor:Colors.special_gray_opacity2
    },
    addressInfor:{
        justifyContent:'center',
        alignItems:'flex-start'
    },
    txtTitle:{
        fontSize:FontSizes.FONT_11,
        fontWeight:'300'

    },
    txtValue:{
        fontSize:FontSizes.FONT_13,
        fontWeight:'400'

    }
})

export default RenderAddress;
