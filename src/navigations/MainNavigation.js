import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {AuthStackScreens,MainStackScreens} from './Stacks'
import {Provider} from 'react-redux'
import {store} from '../redux/store'
const AppXX = ({
    params,
}) => {
    const isSignIn = true
    console.log('value',store.getState())
    return(
    <Provider store = {store}>
        <NavigationContainer>
               {isSignIn ?  <MainStackScreens/> : <AuthStackScreens/> }
               {/* <HomeStackScreens/> */}
        </NavigationContainer>
    </Provider>  
    
    )
};

export default AppXX;
