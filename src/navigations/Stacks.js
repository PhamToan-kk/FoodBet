import React, {useState,useEffect} from 'react';
import {
    Home,
    Cart,
    Search,
    Account,
    Map,
    SignIn,
    SignUp,
    ProductDetail
    
  } from '../containers';
  import {createStackNavigator} from '@react-navigation/stack';
  import {store} from '../redux/store'
  import {useSelector, useDispatch} from 'react-redux'
  import {actLoadListFoods,} from '../redux/actions'

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
          console.log(store.getState())
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

            
        </MainStack.Navigator>
    )
}
  