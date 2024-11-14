import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {FONTS, getCurrentTheme} from '../../theme';
import {ms, s, vs} from 'react-native-size-matters';
import {useTheme} from '../../contexts';

interface ShowsRowProps {
  data: {
    showName: string;
    showDate: Date;
    showVenue: string;
    showType: string;
  };
  isDisabled?: boolean;
}

const ShowsRow = ({data, isDisabled, ...props}: ShowsRowProps) => {
  const {theme} = useTheme();
  const Colors = getCurrentTheme(theme || 'dark');
  const styles = screenStyles(Colors);
  const showDate = data.showDate;
  const date = showDate?.getDate();
  const month = showDate
    .toLocaleString('en-US', {month: 'short'})
    .toUpperCase();

  return (
    <View style={styles.rowContainer} {...props}>
      <View style={styles.firstColumn}>
        <Text
          allowFontScaling={false}
          style={[
            styles.commonTextStyleFocused,
            isDisabled && styles.commonTextStyleUnFocused,
          ]}>{`${date}`}</Text>
        <Text
          allowFontScaling={false}
          style={[
            styles.commonTextStyleFocused,
            isDisabled && styles.commonTextStyleUnFocused,
          ]}>{`${month}`}</Text>
      </View>

      <View style={styles.secondColumn}>
        <Text
          allowFontScaling={false}
          style={[
            styles.commonTextStyleFocused,
            isDisabled && styles.commonTextStyleUnFocused,
          ]}>{`${data.showName}`}</Text>
        <Text
          allowFontScaling={false}
          style={styles.commonTextStyleUnFocused}>{`${data.showVenue}`}</Text>
      </View>

      <View>
        <Text
          allowFontScaling={false}
          style={[
            styles.commonTextStyleFocused,
            isDisabled && styles.commonTextStyleUnFocused,
          ]}>{`${data.showType}`}</Text>
      </View>
    </View>
  );
};

export default ShowsRow;

const screenStyles = (Colors: any) => {
  return StyleSheet.create({
    secondColumn: {
      width: '50%',
    },
    firstColumn: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    rowContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: s(15),
      marginTop: vs(25),
    },
    commonTextStyleUnFocused: {
      color: Colors.notFocused,
      fontSize: ms(12),
      fontFamily: FONTS.helveticaNowDisplayBold,
    },
    commonTextStyleFocused: {
      color: Colors.font,
      fontSize: ms(12),
      fontFamily: FONTS.helveticaNowDisplayBold,
    },
  });
};
