import React ,{useState}from 'react';
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

const data= [
    {
        id:1,
        name:'grill salmon',
        url:"https://asterseniorcommunities.com/wp-content/uploads/2017/03/plate-food.jpg",
        price:22.2,
    },
    {
        id:2,
        name:'grill salmon',
        url:"https://asterseniorcommunities.com/wp-content/uploads/2017/03/plate-food.jpg",
        price:22.2,
    },
    {
        id:3,
        name:'grill salmon',
        url:"https://asterseniorcommunities.com/wp-content/uploads/2017/03/plate-food.jpg",
        price:22.2,
    },
]



export const Cart = (props) => 
{
  const {navigation} = props
  const {listFoods} = useSelector(state=>state.cart)


    const FirstRoute = () => (
        <AddFood listCartFood={listFoods}/>
    );

    const SecondRoute = () => (
        <CheckingOrder/>
    );

    const ThirdRoute = () => (
        <DoneOrder/>
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

 
