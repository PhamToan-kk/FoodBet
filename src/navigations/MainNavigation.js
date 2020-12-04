import React,{useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {AuthStackScreens,MainStackScreens} from './Stacks'
import {store} from '../redux/store'
import {useSelector, useDispatch} from 'react-redux'
import {actLoadListFoods,} from '../redux/actions'
import axios from 'axios'

const AppXX = ({
}) => {
    const role = useSelector(state=>state.userInfo.role)
    console.log('store initial',store.getState())

    return(
        <NavigationContainer>
               {role =="customer" ?  <MainStackScreens/> : <AuthStackScreens/> }
        </NavigationContainer>
    
    )
};

export default AppXX;
