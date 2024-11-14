import React from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {ms, vs} from 'react-native-size-matters';
import {AnimatedText, LineChart} from 'react-native-wagmi-charts';
import {FONTS} from '../../theme';
import {usePriceChange} from './hooks';
import {isAndroid} from '../../utils';
import AnimatedNumbers from 'react-native-animated-numbers';
import AnimatedNumber from 'react-native-number-animate';

const PriceChangeComponent = () => {
  const {Colors, sharePrice, isNegative, difference, formatValue} =
    usePriceChange();

  // console.log('Share price change', sharePrice);

  const styles = screenStyles(Colors);

  return (
    <View>
      <View style={styles.revenueTextContainer}>
        <Text style={styles.revenueText}>$</Text>
        {/* <LineChart.PriceText
          style={styles.revenueText}
          format={formatValue}
          variant="formatted"
        /> */}
        {/* <Text
          allowFontScaling={false}
          style={styles.revenueText}>{`$${sharePrice}`}</Text> */}
        <AnimatedNumber
          number={sharePrice}
          textStyle={styles.animatedNumberFontStyle}
          textHeight={35}
          containerStyle={{
            height: 50,
            flexDirection: 'row',
            overflow: 'hidden',
          }}
        />
        {/* <AnimatedNumbers
          animateToNumber={parseFloat(sharePrice)}
          fontStyle={styles.animatedNumberFontStyle}
        /> */}
      </View>

      <View style={isAndroid && styles.percentageContainer}>
        <AnimatedText
          text={difference}
          style={[styles.profitText, isNegative && styles.lossText]}
        />
      </View>
      {/* <Text
        allowFontScaling={false}
        style={styles.profitText}>{`$2.95 (5%)`}</Text> */}
    </View>
  );
};

export default PriceChangeComponent;

const screenStyles = (Colors: any) => {
  return StyleSheet.create({
    percentageContainer: {
      marginTop: vs(-10),
    },
    lossText: {
      color: Colors.red,
    },
    animatedNumberFontStyle: {
      color: Colors.font,
      fontSize: ms(28),
      fontFamily: FONTS.helveticaNowDisplayExtraBold,
      letterSpacing: 0.2,
    },
    revenueTextContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    revenueText: {
      color: Colors.font,
      fontSize: ms(28),
      fontFamily: FONTS.helveticaNowDisplayExtraBold,
      marginTop: vs(7),
    },
    profitText: {
      color: Colors.profit,
      fontSize: ms(12),
      fontFamily: FONTS.helveticaNowDisplayExtraBold,
      textAlign: 'right',
    },
  });
};
