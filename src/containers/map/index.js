import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import Config from 'react-native-config';
import {getDistance} from 'geolib';
import {ScaledSheet} from 'react-native-size-matters';
import {Colors, FontSizes} from '../../theme';
import {FText} from '../../components';
import {Styles} from '../../styles';
import {useDispatch} from 'react-redux';
import {actSetDistance} from '../../redux/actions';
import Geolocation from '@react-native-community/geolocation';

export const Map = () => {
  const GOOGLE_MAPS_APIKEY = Config.GOOGLE_MAPS_API_KEY;
  const dispatch = useDispatch();
  const [currentLongitude, setCurrentLong] = useState(0);
  const [currentLatitude, setCurrentLat] = useState(0);

  // const matchDistance = (x)=> dispatch(setDistance(x))
  const origin = {latitude: currentLatitude, longitude: currentLongitude};
  const destination = {latitude: 21.030698, longitude: 105.788362};
  const [distance, setDis] = useState(0);
  useEffect(() => {
    Geolocation.getCurrentPosition((info) => {
      console.log(info.coords);
      setCurrentLat(info.coords.latitude);
      setCurrentLong(info.coords.longitude);
    });
    const dis = (getDistance(origin, destination) / 1000).toFixed(2);
    // matchDistance(dis)
    dispatch(actSetDistance(dis));
    setDis(dis);
  });
  return (
    <View style={styles.container}>
      <MapView
        initialRegion={{
          latitude: (21.022169 + 21.033176 + 21.030976 + 21.024183) / 4,
          longitude: (105.779200 + 105.780295 + 105.792350 + 105.789643) / 4,
          latitudeDelta: 0.02,
          longitudeDelta: 0.02,
        }}
        style={styles.map}
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
      >
        <Marker
          coordinate={{
            latitude: currentLatitude,
            longitude: currentLongitude,
          }}
          title="Your Position"
          description="8 ,Ton That Thuyet Street">
          <Image
            style={{width: 30, height: 30}}
            source={require('../../assets/icons/gps2.png')}
          />
        </Marker>
        <Marker
          coordinate={{
            latitude: destination.latitude,
            longitude: destination.longitude,
          }}
          title="FootBet"
          description="12 Tran Thai Tong Street">
          <Image
            style={{width: 30, height: 30}}
            source={require('../../assets/icons/r2.png')}
          />
        </Marker>
      </MapView>

      <View style={styles.boxContainer}>
        <View style={styles.singleRow}>
          <FText style={styles.title}>Your position :</FText>
          <FText style={styles.value}> 8 ,Ton That Thuyet Street</FText>
        </View>
        <View style={styles.singleRow}>
          <FText style={styles.title}>The Restaurant :</FText>
          <FText style={styles.value}> 12 Tran Thai Tong Street</FText>
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
