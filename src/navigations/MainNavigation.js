import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {AuthStackScreens,MainStackScreens} from './Stacks'

const AppXX = ({
    params,
}) => {
    const isSignIn = true
    return(
        <NavigationContainer>
               {isSignIn ?  <MainStackScreens/> : <AuthStackScreens/> }
               {/* <HomeStackScreens/> */}
        </NavigationContainer>
    )
};

export default AppXX;
