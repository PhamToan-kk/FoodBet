import React,{useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {AuthStackScreens,MainStackScreens} from './Stacks'
import {store} from '../../../redux/store'
import {useSelector, useDispatch} from 'react-redux'
import {loadListFoods,setFoods} from '../../../redux/actions'
import axios from 'axios'
const AppXX = ({
}) => {
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(loadListFoods())
    })
    const isSignIn = true
    return(
        <NavigationContainer>
               {isSignIn ?  <MainStackScreens/> : <AuthStackScreens/> }
               {/* <HomeStackScreens/> */}
        </NavigationContainer>
    
    )
};

export default AppXX;
