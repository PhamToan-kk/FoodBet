import React from 'react';
import { Text, View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import SearchView from './SearchView'
import PopularFood from './PopularFood'
import BestFood from './BestFood'
import LinearGradient from 'react-native-linear-gradient';
import { Colors} from '../../constants'
import { ScrollView } from 'react-native-gesture-handler';

export const Home = ({
    params,
}) => (
    <LinearGradient
      style={{flex: 1}}
      colors={[
        Colors.Linear_white1,
        Colors.Linear_white2,
        Colors.Linear_white3,
      ]}>
        <View style={styles.container}>
            <SearchView/>
            <ScrollView>
                <PopularFood/>
                <BestFood/>
            </ScrollView>

        </View>

    </LinearGradient>
    
    
);

const styles = ScaledSheet.create({
    container:{
        flex:1,
        paddingTop:50
    }
})

 
