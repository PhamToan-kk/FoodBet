import React, {useState} from 'react';
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
            
        </MainStack.Navigator>
    )
}
  