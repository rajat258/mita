import React from 'react';
import {StyleSheet, View} from 'react-native';
import {UpcomingFeature} from '../../components';
import {usePortfolio} from './hooks';

const PortfolioScreen = () => {
  const {Colors, upcomingFeatureRef, onGotPress, onClose} = usePortfolio();
  const styles = screenStyles(Colors);
  return (
    <View style={styles.container}>
      <UpcomingFeature
        ref={upcomingFeatureRef}
        onGotPress={onGotPress}
        onClose={onClose}
      />
    </View>
  );
};

export default PortfolioScreen;

const screenStyles = (Colors: any) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.background,
    },
  });
};
