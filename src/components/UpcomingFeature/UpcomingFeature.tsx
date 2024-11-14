import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ms, s, vs} from 'react-native-size-matters';
import {ICONS} from '../../assets';
import {useTheme} from '../../contexts';
import {FONTS, getCurrentTheme} from '../../theme';
import {SCREEN_HEIGHT} from '../../utils';
import {BottomSheet} from '../BottomSheet';

const UpcomingFeature = React.forwardRef(({onGotPress, onClose}, ref) => {
  const {theme} = useTheme();
  const Colors = getCurrentTheme(theme || 'dark');
  const styles = screenStyles(Colors);

  return (
    <BottomSheet ref={ref} height={SCREEN_HEIGHT / 2} onClose={onClose}>
      <View style={styles.container}>
        <Image source={ICONS.mitaLogo} style={styles.mitaLogo} />
        <View style={styles.upcomingFeatureTitleDescContainer}>
          <Text allowFontScaling={false} style={styles.upcomingFeatureTitle}>
            HANG ON TIGHT!
          </Text>
          <Text
            allowFontScaling={false}
            style={styles.upcomingFeatureDescription}>
            {`This feature will be the part of the Beta Version. \nStay tuned! :)`}
          </Text>
        </View>

        <TouchableOpacity
          style={styles.gotItBtnContainer}
          activeOpacity={0.7}
          onPress={onGotPress ? onGotPress : () => ref.current.close()}>
          <Text allowFontScaling={false} style={styles.gotItBtnText}>
            Got It!
          </Text>
        </TouchableOpacity>
      </View>
    </BottomSheet>
  );
});

export default UpcomingFeature;

const screenStyles = (Colors: any) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    mitaLogo: {
      height: vs(150),
      width: s(150),
      tintColor: Colors.white,
    },
    upcomingFeatureTitleDescContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      height: vs(40),
    },
    upcomingFeatureDescription: {
      lineHeight: vs(15),
      marginTop: vs(10),
      color: Colors.font,
      fontSize: ms(12),
      textAlign: 'center',
      fontFamily: FONTS.helveticaNowDisplayMedium,
    },
    gotItBtnContainer: {
      height: vs(50),
      width: '80%',
      borderRadius: ms(30),
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: Colors.celticBlue,
      marginTop: vs(30),
      marginBottom: vs(20),
    },
    gotItBtnText: {
      color: Colors.blackGreyShaded,
      fontSize: ms(13),
      fontFamily: FONTS.helveticaNowDisplayExtraBold,
    },
    upcomingFeatureTitle: {
      marginTop: vs(-30),
      color: Colors.font,
      fontSize: ms(20),
      fontFamily: FONTS.helveticaNowDisplayExtraBold,
    },
  });
};
