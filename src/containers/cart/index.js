import React ,{useState,useEffect}from 'react';
import { Text, View,Dimensions } from 'react-native';
import { Styles } from '../../styles';
import { ScaledSheet, } from 'react-native-size-matters';
import { TabView, SceneMap,TabBar } from 'react-native-tab-view';
import { Colors } from '../../constants';
import {
    FText ,
    ReturnButton
} from '../../components'
import AddFood from './AddFood'
import CheckingOrder from './CheckingOrder'
import DoneOrder from './DoneOrder'
import {useSelector, useDispatch} from 'react-redux'
import {
  actDeleteProductOfCart,
  actDecreaseAmountProduct,
  actIncreaseAmountProduct} from '../../redux/actions'




export const Cart = (props) => 
{
  const [loadingDone,setLoadingDone] = useState(1)  
  useEffect(()=>{
    navigation.addListener('focus', () => {
        setLoadingDone(loadingDone+1)
        });
  })  

  const {navigation} = props
  const {listFoods} = useSelector(state=>state.cart)
  const dispatch = useDispatch()

  const deleteProductOfCart = (id)=>{
    dispatch(actDeleteProductOfCart(id))
  }
  const increaseAmount = (productId)=>{
    dispatch(actIncreaseAmountProduct(productId))
  }
  const decreaseAmount = (productId)=>{
    dispatch(actDecreaseAmountProduct(productId))
  }

    const FirstRoute = () => (
        <AddFood listCartFood={listFoods} 
        onDeleteProduct={deleteProductOfCart} 
        increaseAmount={increaseAmount}
        decreaseAmount={decreaseAmount}
        />
    );

    const SecondRoute = () => (
        <CheckingOrder navigation={navigation}/>
    );

    const ThirdRoute = () => (
        <DoneOrder navigation={navigation} loading={loadingDone}/>
        );
    
        
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
      { key: 'first', title: 'Add Food' },
      { key: 'second', title: 'Checking Order' },
      { key: 'third', title: 'Done Order' },

    ]);

    const renderScene = SceneMap({
        first: FirstRoute,
        second: SecondRoute,
        third: ThirdRoute,
      });
    const initialLayout = { width: Dimensions.get('window').width };

    const renderTabBar = (
        props
      ) => (
        <TabBar
          {...props}
          scrollEnabled
          indicatorStyle={styles.indicator}
          style={styles.tabbar}
          labelStyle={styles.label}
          tabStyle={styles.tabStyle}
        />
      );
    return(
    <View style={styles.container}>
        <FText h3 center weight="500" color={Colors.textInputColor}>Cart Food</FText>
        <TabView
        renderTabBar={renderTabBar}
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        lazy={true}
        />
      <ReturnButton  style={styles.returnBtn} event={()=>navigation.goBack()}/>  
    </View>
);
}

const styles = ScaledSheet.create({
    container:{
        flex:1,
        paddingTop:50
    },
    scene:{
        flex:1
    },
    tabbar: {
        backgroundColor: Colors.Linear_white4,
        width:'100%',
      },
      indicator: {
        backgroundColor: Colors.red_fresh,
      },
      label: {
        fontWeight: '600',
        color:Colors.textInputColor,
        fontSize:12,
        // fontFamily:'DamascusLight'
      },
      tabStyle: {
        width: Styles.width/3,
      },
      returnBtn:{
        top:45,
        left:10
      }
})

 
