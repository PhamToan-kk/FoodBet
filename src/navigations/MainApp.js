import React,{useEffect} from 'react';
import { Text, View } from 'react-native';
import {Provider} from 'react-redux'
import {store} from '../redux/store'
import AppXX from './MainNavigation'


const MainApp = ({

}) => {
    return(
    <Provider store = {store}>
        <AppXX/>
    </Provider>  
);}

export default MainApp;
