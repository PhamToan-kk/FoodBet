import React from 'react';
import { 
    Text, 
    View ,
    Dimensions,
    StyleSheet
} from 'react-native';
import { 
    TabView, 
    SceneMap,
    TabBar 
} from 'react-native-tab-view';
import { ScaledSheet, } from 'react-native-size-matters';
import {Colors,FontSizes} from '../../theme'

import { Styles } from '../../styles'
import { FText } from '../../components';
import RenderReviews from './RenderReviews'


const RenderTabProduct = React.memo((props) => 
{
    const {item} = props
    const FirstRoute = () => (
        <View style={{flex:1,paddingTop:30}}>
            <FText size={FontSizes.FONT_13}>{item.intro}</FText>
        </View>
    );

    const SecondRoute = () => (
       <RenderReviews item={item}/>
    );


    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
      { key: 'first', title: 'Detail' },
      { key: 'second', title: 'Review' },

    ]);

    const renderScene = SceneMap({
        first: FirstRoute,
        second: SecondRoute,
      });
    const initialLayout = { width: Dimensions.get('window').width };
    //render tabbar
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
    //render main tabs    
    return(
    <View style={{flex:1,marginTop:20,}}>
        <TabView
        renderTabBar={renderTabBar}
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        />
    </View>
);
}
)



const styles = ScaledSheet.create({
    container:{
        flex:1,
        paddingTop:50,
    
    },
    scene:{
        flex:1
    },
    tabbar: {
        backgroundColor: Colors.white,
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-between'

      },
      indicator: {
        backgroundColor: Colors.red_fresh,
      },
      label: {
        fontWeight: '600',
        color:Colors.textInputColor,
        fontSize:FontSizes.FONT_15,
        // fontFamily:'DamascusLight'
        textTransform:'capitalize'
      },
      tabStyle: {
        width: (Styles.width-50)/2,
        backgroundColor:Colors.white,
        borderRadius:10,
        marginBottom:5

      },
})


export default RenderTabProduct;



