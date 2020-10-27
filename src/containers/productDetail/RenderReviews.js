import React from 'react';
import { 
    Text, 
    View , 
    ScrollView ,
    FlatList,
    KeyboardAvoidingView

} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ScaledSheet, } from 'react-native-size-matters';
import {
    FText ,
    TextInput,
    VectorIcon,
    Morph,
    HeartIcon,
    MoveIcon,

} from '../../components'
import {Colors,FontSizes} from '../../theme'
import { Styles } from '../../styles'
import UserAvatar from 'react-native-user-avatar';


const RenderReviews = (props) => 

{
    const {item} = props
    
    //render Post review 
    const RenderPostReview = ()=>(
        <View style={styles.postView}>
            <View style={styles.headerPost}>
                <View style={{alignItems:'center',marginHorizontal:5}}>
                    <UserAvatar name="Cu Toan"  size={44}/>
                </View>
                <View style ={styles.userName}>
                    <FText size={FontSizes.FONT_13} weight="400">Cu Toan</FText>
                    <FText size={FontSizes.FONT_11}>Give your review</FText>
                </View>

            </View>
            <View style={styles.inputView}>
                <TextInput 
                style={styles.input} 
                multiline={true}
                placeholder="Write your review !!"
                leftComponent={<VectorIcon EvilIcons name="pencil" size={35} color={Colors.red_fresh}/>}
                />
                <TouchableOpacity style={styles.btnPost}>
                    <FText h4 weight="500" color={Colors.white}>Post</FText>
                </TouchableOpacity>
            </View>            
        </View>
    )

     // Render List review   
const RenderListReviews = ()=>{
        return item.review.map(
            (review,i)=>(
            <View style={styles.review} key={i}>
                <View style={styles.headerReview}>
                    <View style={{alignItems:'center',marginHorizontal:5}}>
                        <UserAvatar name={review.customer}  size={44}/>
                    </View>
                    <View style ={styles.userName}>
                        <FText size={FontSizes.FONT_13} weight="400">{review.customer}</FText>
                        <FText size={FontSizes.FONT_11}>{review.time}</FText>
                    </View>
                </View> 
                <FText style={styles.contentReview} h4>{review.content}</FText>               
            </View>
            )
        )
    }
    return(
    <ScrollView 
    style={styles.container}
    showsVerticalScrollIndicator={false}
    overScrollMode="always"
    >
        <RenderPostReview/>
        <RenderListReviews/>
    </ScrollView>
);}


const styles = ScaledSheet.create({
    container:{
        flex:1,
        paddingTop:5,
    },
    postView:{
       width:'100%',
       height:'125@vs',
    },
    headerPost:{
        flex:2,
        ...Styles.row_start_center
    },
    inputView:{
        flex:4,
        alignItems:'flex-end'
    },
    input:{
        width:'85%',
        borderRadius:10,
        height:'50%',
        backgroundColor:Colors.Linear_white3
    },
    btnPost:{
        width:100,
        height:30,
        backgroundColor:Colors.red_fresh,
        ...Styles.center_center,
        borderRadius:10
    },
    listReviews:{
        // paddingHorizontal:10
    },
    review:{
        width:'100%',
       height:'70@vs',
    },
    headerReview:{
        flex:2,
        ...Styles.row_start_center
    },
    contentReview:{
        marginLeft:'15%',
        flex:1,
    }

})
export default RenderReviews;


