import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ms, s, vs} from 'react-native-size-matters';
import {useTheme} from '../../contexts';
import {getCurrentTheme} from '../../theme';

const BoxContainer = ({children}) => {
  const {theme} = useTheme();
  const Colors = getCurrentTheme(theme || 'dark');
  const styles = screenStyles(Colors);
  return <View style={styles.container}>{children}</View>;
};

export default BoxContainer;

const screenStyles = (Colors: any) => {
  return StyleSheet.create({
    container: {
      height: ms(280),
      justifyContent: 'center',
      width: ms(300),
      borderRadius: ms(20),
      paddingHorizontal: s(20),
      backgroundColor: Colors?.backBtnBackground,
      marginTop: vs(20),
    },
  });
};
