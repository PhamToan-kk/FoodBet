import React, {useState,useEffect} from 'react';
import {
    Home,
    Cart,
    Search,
    Account,
    Map,
    SignIn,
    SignUp,
    ProductDetail,
    OrderDetail
    
  } from '../containers';
  import {createStackNavigator} from '@react-navigation/stack';
  import {store} from '../redux/store'
  import { useDispatch} from 'react-redux'
  import {actLoadListFoods,actLoadOtherInfoAccount} from '../redux/actions'
  
  import {TabsNavigator} from './Tabs'
  const AuthStack = createStackNavigator();
  const MainStack = createStackNavigator()

  export const AuthStackScreens = ({navigation}) => {
    return (
      <AuthStack.Navigator
      headerMode={'none'}
      >
        <AuthStack.Screen name="SignIn" component={SignIn} />
        <AuthStack.Screen name="SignUp" component={SignUp} />
  
      </AuthStack.Navigator>
    );
  };


  export const MainStackScreens = ()=>{
      const dispatch = useDispatch()

      useEffect(()=>{
          dispatch(actLoadListFoods())
          dispatch(actLoadOtherInfoAccount())

          console.log('store start',store.getState())
      })
    
    return(
        <MainStack.Navigator
        initialRouteName="Main"
        screenOptions={{
            headerShown:false
        }}
        >
            <MainStack.Screen component={TabsNavigator} name={'Tabs'}/>
            <MainStack.Screen component={Search} name={'Search'} />
            <MainStack.Screen component={ProductDetail} name={'ProductDetail'} />
            <MainStack.Screen component={Cart} name={'Cart'} />
            <MainStack.Screen component={OrderDetail} name={'OrderDetail'} />

            
        </MainStack.Navigator>
    )
}
  