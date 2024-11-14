import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {FONTS, getCurrentTheme} from '../../theme';
import {ms, s, vs} from 'react-native-size-matters';
import {useTheme} from '../../contexts';

interface ReleasesRowProps {
  data: {
    songName: string;
    releaseDate: Date;
    artistName: string;
    songType: string;
    role: string;
  };
}

const ReleasesRow = ({data, ...props}: ReleasesRowProps) => {
  const {theme} = useTheme();
  const Colors = getCurrentTheme(theme || 'dark');
  const styles = screenStyles(Colors);
  const releaseDate = data.releaseDate;
  const date = releaseDate?.getDate();
  const month = releaseDate
    .toLocaleString('en-US', {month: 'short'})
    .toUpperCase();

  return (
    <View style={styles.rowContainer} {...props}>
      <View style={styles.firstColumn}>
        <Text
          allowFontScaling={false}
          style={styles.dateText}>{`${date}`}</Text>
        <Text
          allowFontScaling={false}
          style={styles.monthNameText}>{`${month}`}</Text>
      </View>

      <View style={styles.secondColumn}>
        <Text
          allowFontScaling={false}
          style={styles.songNameText}>{`${data.songName}`}</Text>
        <Text
          allowFontScaling={false}
          style={styles.artistNameText}>{`${data.artistName}`}</Text>
      </View>

      <View style={styles.thirdColumn}>
        <Text
          allowFontScaling={false}
          style={styles.songType}>{`${data.songType}`}</Text>
        <Text
          allowFontScaling={false}
          style={styles.roleText}>{`${data.role}`}</Text>
      </View>
    </View>
  );
};

export default ReleasesRow;

const screenStyles = (Colors: any) => {
  return StyleSheet.create({
    dateText: {
      color: Colors.notFocused,
      fontSize: ms(12),
      fontFamily: FONTS.helveticaNowDisplayBold,
    },
    monthNameText: {
      color: Colors.notFocused,
      fontSize: ms(10),
      fontFamily: FONTS.helveticaNowDisplayBold,
    },
    songNameText: {
      color: Colors.notFocused,
      fontSize: ms(12),
      fontFamily: FONTS.helveticaNowDisplayExtraBold,
    },
    artistNameText: {
      color: Colors.notFocused,
      fontSize: ms(12),
      fontFamily: FONTS.helveticaNowDisplayMedium,
    },
    songType: {
      color: Colors.notFocused,
      fontSize: ms(12),
      fontFamily: FONTS.helveticaNowDisplayBold,
    },
    roleText: {
      color: Colors.notFocused,
      fontSize: ms(12),
      fontFamily: FONTS.helveticaNowDisplayMedium,
    },
    thirdColumn: {
      width: '35%',
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
    },
    secondColumn: {
      flex: 1,
      width: '50%',
    },
    firstColumn: {
      width: '10%',
      marginRight: s(15),
      justifyContent: 'center',
      alignItems: 'center',
    },
    rowContainer: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: s(15),
      marginTop: vs(25),
    },
  });
};
