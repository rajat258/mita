import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import DottedMap from 'dotted-map';
import {vs} from 'react-native-size-matters';
import {SvgXml} from 'react-native-svg';
import {useTheme} from '../../../contexts';
import {getCurrentTheme} from '../../../theme';
import {useIsFocused} from '@react-navigation/native';

const WorldMapComponent = () => {
  const {theme} = useTheme();
  const Colors = getCurrentTheme(theme || 'dark');
  const [worldMapSvg, setWorldMapSvg] = useState();
  const [isWorldMapLoaded, setIsWorldMapLoaded] = useState(false);
  let svgMap;
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      setTimeout(() => {
        const map = new DottedMap({height: 60, grid: 'diagonal'});

        map.addPin({
          lat: 40.7128, // New York
          lng: -74.006,
          svgOptions: {color: Colors.profit, radius: 0.4},
        });

        map.addPin({
          lat: 42.3601, // Boston
          lng: -71.0589,
          svgOptions: {color: Colors.white, radius: 0.4},
        });

        map.addPin({
          lat: 25.7617, // Miami
          lng: -80.1918,
          svgOptions: {color: Colors.white, radius: 0.4},
        });

        map.addPin({
          lat: 49.2827, // Vancouver
          lng: -123.1207,
          svgOptions: {color: Colors.profit, radius: 0.4},
        });

        map.addPin({
          lat: 34.0522, // Los Angeles
          lng: -118.2437,
          svgOptions: {color: Colors.white, radius: 0.4},
        });

        map.addPin({
          lat: 39.1911, // Aspen
          lng: -106.8175,
          svgOptions: {color: Colors.profit, radius: 0.4},
        });

        map.addPin({
          lat: 37.7749, // San Francisco
          lng: -122.4194,
          svgOptions: {color: Colors.profit, radius: 0.4},
        });

        map.addPin({
          lat: 43.651, // Toronto
          lng: -79.347,
          svgOptions: {color: Colors.profit, radius: 0.4},
        });

        map.addPin({
          lat: 18.4655, // San Juan
          lng: -66.1057,
          svgOptions: {color: Colors.white, radius: 0.4},
        });

        map.addPin({
          lat: 19.4326, // Mexico City
          lng: -99.1332,
          svgOptions: {color: Colors.white, radius: 0.4},
        });

        map.addPin({
          lat: -23.5505, // São Paulo
          lng: -46.6333,
          svgOptions: {color: Colors.white, radius: 0.4},
        });

        map.addPin({
          lat: -34.6037, // Buenos Aires
          lng: -58.3816,
          svgOptions: {color: Colors.white, radius: 0.4},
        });

        map.addPin({
          lat: -33.4489, // Santiago
          lng: -70.6693,
          svgOptions: {color: Colors.white, radius: 0.4},
        });

        map.addPin({
          lat: 41.3851, // Barcelona
          lng: 2.1734,
          svgOptions: {color: Colors.profit, radius: 0.4},
        });

        map.addPin({
          lat: 38.9067, // Ibiza
          lng: 1.4204,
          svgOptions: {color: Colors.white, radius: 0.4},
        });

        map.addPin({
          lat: 48.8566, // Paris
          lng: 2.3522,
          svgOptions: {color: Colors.white, radius: 0.4},
        });

        map.addPin({
          lat: 51.5074, // London
          lng: -0.1278,
          svgOptions: {color: Colors.white, radius: 0.4},
        });

        map.addPin({
          lat: 52.52, // Berlin
          lng: 13.405,
          svgOptions: {color: Colors.profit, radius: 0.4},
        });

        map.addPin({
          lat: 55.6761, // Copenhagen
          lng: 12.5683,
          svgOptions: {color: Colors.white, radius: 0.4},
        });

        map.addPin({
          lat: 52.3676, // Amsterdam
          lng: 4.9041,
          svgOptions: {color: Colors.white, radius: 0.4},
        });

        map.addPin({
          lat: 37.4467, // Mykonos
          lng: 25.3289,
          svgOptions: {color: Colors.white, radius: 0.4},
        });

        map.addPin({
          lat: -33.9249, // Cape Town
          lng: 18.4241,
          svgOptions: {color: Colors.white, radius: 0.4},
        });

        map.addPin({
          lat: 30.0444, // Cairo
          lng: 31.2357,
          svgOptions: {color: Colors.profit, radius: 0.4},
        });

        map.addPin({
          lat: 25.2764, // Dubai
          lng: 55.2963,
          svgOptions: {color: Colors.white, radius: 0.4},
        });

        map.addPin({
          lat: 35.6895, // Tokyo
          lng: 139.6917,
          svgOptions: {color: Colors.white, radius: 0.4},
        });

        map.addPin({
          lat: 1.3521, // Singapore
          lng: 103.8198,
          svgOptions: {color: Colors.white, radius: 0.4},
        });

        map.addPin({
          lat: -33.8688, // Sydney
          lng: 151.2093,
          svgOptions: {color: Colors.red, radius: 0.4},
        });

        map.addPin({
          lat: -37.8136, // Melbourne
          lng: 144.9631,
          svgOptions: {color: Colors.red, radius: 0.4},
        });

        svgMap = map.getSVG({
          radius: 0.22,
          color: '#423B38',
          shape: 'circle',
          backgroundColor: Colors.background,
        });
        setWorldMapSvg(svgMap);
        setIsWorldMapLoaded(true);
      }, 2000);
    }
  }, []);

  console.log(isFocused, 'isFocused');

  return (
    <View>
      {isWorldMapLoaded ? (
        <View style={styles.worldMapContainer}>
          <SvgXml height={'100%'} width={'100%'} xml={worldMapSvg} />
        </View>
      ) : (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size={30} color={Colors.celticBlue} />
        </View>
      )}
    </View>
  );
};

export default WorldMapComponent;

const styles = StyleSheet.create({
  worldMapContainer: {
    height: vs(300),
  },
  loaderContainer: {
    flex: 1,
    height: vs(300),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
