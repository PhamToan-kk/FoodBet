import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {useState} from 'react';

import{
  Home,
  Map,
  Cart,
  Account,

} from '../containers'
import AnimatedTabBar from '@gorhom/animated-tabbar';
import {VectorIcon} from '../components';
import {Colors} from '../constants'
const Tab = createBottomTabNavigator();

const tabs = {
  Home: {
    // < Screen name
    labelStyle: {
      color: Colors.Cornflower_Blue,
    },
    icon: {
      component: () => (
        <VectorIcon
          MaterialCommunityIcons
          name="home"
          size={25}
          color={Colors.Cornflower_Blue}
        />
      ),
      activeColor: Colors.Cornflower_Blue,
      // inactiveColor: 'red',
    },
    background: {
      activeColor: Colors.Lavender
      // inactiveColor: 'rgba(207,235,239,0)',
    },
  },
  Map: {
    // < Screen name
    labelStyle: {
      color: Colors.Cornflower_Blue,
    },
    icon: {
      component: () => (
        <VectorIcon MaterialCommunityIcons name="layers-search-outline" color={Colors.Cornflower_Blue} size={23} />
      ),
      activeColor: Colors.Cornflower_Blue,
      inactiveColor: 'blue',
    },
    background: {
      activeColor: Colors.Lavender,
      inactiveColor: 'rgba(207,235,239,0)',
    },
  },
  Cart: {
    // < Screen name
    labelStyle: {
      color: Colors.Cornflower_Blue,
    },
    icon: {
      component: () => (
        <VectorIcon FontAwesome5 name="hornbill" color={Colors.Cornflower_Blue} size={23} />

      ),
      activeColor: Colors.Cornflower_Blue,
      inactiveColor: 'blue',
    },
    background: {
      activeColor: Colors.Lavender,
      inactiveColor: 'rgba(207,235,239,0)',
    },
  },
  Account: {
    // < Screen name
    labelStyle: {
      color: Colors.Cornflower_Blue,
    },
    icon: {
      component: () => (
        <VectorIcon FontAwesome5 name="hornbill" color={Colors.Cornflower_Blue} size={23} />

      ),
      activeColor: Colors.Cornflower_Blue,
      inactiveColor: 'blue',
    },
    background: {
      activeColor: Colors.Lavender,
      inactiveColor: 'rgba(207,235,239,0)',
    },
  },
};

export const TabsNavigator = () => {
  return (
    <Tab.Navigator
      tabBar={(props) => (
        <AnimatedTabBar
          tabs={tabs}
          {...props}
          // style={{borderRadius:15,marginBottom:10,marginHorizontal:10,alignItems:'center'}}
          iconSize={24}
          // itemOuterSpace	={15}
        />
      )}>
      <Tab.Screen component={Home} name={'Home'} />
      <Tab.Screen component={Map} name={'Map'} />
      <Tab.Screen component={Cart} name={'Cart'} />
      <Tab.Screen component={Account} name={'Account'} />

    </Tab.Navigator>
  );
};
