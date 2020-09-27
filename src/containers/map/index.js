import React from 'react';
import { Text, View ,StyleSheet,TouchableOpacity} from 'react-native';
import MapView, { PROVIDER_GOOGLE ,Marker,Callout} from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import Config from "react-native-config";
import MapViewDirections from 'react-native-maps-directions';
import { getDistance, getPreciseDistance } from 'geolib';

export const Map = () => 

{
    const GOOGLE_MAPS_APIKEY = Config.GOOGLE_MAPS_APIKEY
    // console.log(GOOGLE_MAPS_APIKEY)

    console.log('aa',Config.GOOGLE_MAPS_API_KEY); 

    const origin = {latitude:20.978537, longitude: 105.786249};
    const destination = {latitude: 20.982524, longitude: 105.787751};


    _getDistance = () => {
        var dis = getDistance(
          origin,
          destination
        );
        alert(`Distance\n${dis} Meter\nor\n${dis / 1000} KM`);
      };



    return(
    <View style={styles.container}>
        <MapView
        initialRegion={{
        latitude: (20.982843 + 20.988954 + 20.987576 )/3,
        longitude: (105.792014 + 105.796788 + 105.798124)/3,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05
        }}
        style={styles.map}
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps

    >
    
    </MapView>
        <TouchableOpacity style={{position:'absolute',top:100,left:50}} onPress={_getDistance}>
                <Text>jajajajajajajaja</Text>
        </TouchableOpacity>
    </View>
);}


const styles = StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
      width: '100%',
      justifyContent: 'flex-end',
      alignItems: 'center',
      flex:1,
    },
    map: {
      ...StyleSheet.absoluteFillObject,
      flex:1
    },
   })
   

 
