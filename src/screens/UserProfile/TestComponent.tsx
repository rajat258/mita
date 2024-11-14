import React, {useEffect, useRef, useState} from 'react';
import {View, Text, Animated, StyleSheet} from 'react-native';

const AnimatedNumber = ({value, duration}) => {
  const animatedValue = useRef(new Animated.Value(0)).current;
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    animatedValue.setValue(displayValue);

    Animated.timing(animatedValue, {
      toValue: value,
      duration: duration,
      useNativeDriver: false,
    }).start();

    animatedValue.addListener(({value}) => {
      setDisplayValue(value.toFixed(2)); // Adjust the decimal places as needed
    });

    return () => {
      animatedValue.removeAllListeners();
    };
  }, [value, duration]);

  return <Text style={styles.numberText}>{displayValue}</Text>;
};

const TestComponent = () => {
  return (
    <View style={styles.container}>
      <AnimatedNumber value={123.45} duration={1000} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  numberText: {
    color: 'red',
    fontSize: 40,
  },
});

export default TestComponent;
