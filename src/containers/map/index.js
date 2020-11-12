import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import Config from 'react-native-config';
import {getDistance} from 'geolib';
import {ScaledSheet} from 'react-native-size-matters';
import {Colors, FontSizes} from '../../theme';
import {FText} from '../../components';
import {Styles} from '../../styles';
export const Map = () => {
  const GOOGLE_MAPS_APIKEY = Config.GOOGLE_MAPS_API_KEY;
  console.log('aaaa',GOOGLE_MAPS_APIKEY)  


  const origin = {latitude: 21.039883, longitude: 105.805524};
  const destination = {latitude: 21.036538, longitude: 105.802784};
  const [distance, setDistance] = useState(0);
  useEffect(() => {
    // _getDistance = () => {
    //     alert(`Distance\n${dis} Meter\nor\n${dis / 1000} KM`);
    // };
    const dis = (getDistance(origin, destination) / 1000).toFixed(2);
    setDistance(dis);
  }, []);
  return (
    <View style={styles.container}>
      <MapView
        initialRegion={{
          latitude: (21.045751 + 21.046158 + 21.038397 + 21.039394) / 4,
          longitude: (105.793833 + 105.80534 + 105.806095 + 105.801198) / 4,
          latitudeDelta: 0.02,
          longitudeDelta: 0.02,
        }}
        style={styles.map}
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
      >
        <Marker
          coordinate={{
            latitude: 21.039883,
            longitude: 105.805524,
          }}
          title="Your Position"
          description="7,Dong Quan">
          <Image
            style={{width: 30, height: 30}}
            source={require('../../assets/icons/gps2.png')}
          />
        </Marker>
        <Marker
          coordinate={{
            latitude: 21.036538,
            longitude: 105.802784,
          }}
          title="FootBet"
          description="8,Nguyen Khanh Toan">
          <Image
            style={{width: 30, height: 30}}
            source={require('../../assets/icons/r2.png')}
          />
        </Marker>
      </MapView>

      <View style={styles.boxContainer}>
        <View style={styles.singleRow}>
          <FText style={styles.title}>Your position :</FText>
          <FText style={styles.value}> 7,Dong Quan</FText>
        </View>
        <View style={styles.singleRow}>
          <FText style={styles.title}>The Restaurant :</FText>
          <FText style={styles.value}> 8,Nguyen Khanh Toan</FText>
        </View>
        <View style={styles.singleRow}>
          <FText style={styles.title}>Distance</FText>
          <FText style={styles.value}> {distance} km</FText>
        </View>
        <FText style={styles.title}>
          You can go directly to FoodBet restaurant to save ship cost !!{' '}
        </FText>
      </View>
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
  },
  boxContainer: {
    position: 'absolute',
    bottom: 10,
    width: '90%',
    alignSelf: 'center',
    height: '120@vs',
    // backgroundColor:'red',
    borderRadius: 10,
    backgroundColor: Colors.special_gray_opacity,
    padding: 15,
  },
  singleRow: {
    ...Styles.row_start_center,
  },
  title: {
    fontSize: FontSizes.FONT_14,
    fontWeight: '500',
    color: Colors.Cornflower_Blue,
  },
  value: {
    fontSize: FontSizes.FONT_14,
    fontWeight: '500',
    color: Colors.genoa,
  },
});
