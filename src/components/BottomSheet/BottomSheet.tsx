import React, {useImperativeHandle, useRef} from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import {ms, s, vs} from 'react-native-size-matters';
import {useTheme} from '../../contexts';
import {getCurrentTheme} from '../../theme';
import {ICONS} from '../../assets';

const BottomSheet = React.forwardRef(
  ({children, onClose, isCloseEnabled, height = vs(450)}, ref) => {
    const {theme} = useTheme();
    const Colors = getCurrentTheme(theme || 'dark');
    const styles = screenStyles(Colors);

    return (
      <RBSheet
        customStyles={{
          container: styles.containerStyle,
        }}
        height={height}
        onClose={onClose}
        closeOnPressBack
        draggable
        ref={ref}>
        {/* <View style={styles.pointer} /> */}

        {isCloseEnabled && (
          <TouchableOpacity
            style={styles.closeBtnContainer}
            onPress={() => ref?.current?.close()}>
            <Image source={ICONS.close} style={styles.closeIcon} />
          </TouchableOpacity>
        )}
        {children}
      </RBSheet>
    );
  },
);

export default BottomSheet;

const screenStyles = (Colors: any) => {
  return StyleSheet.create({
    closeIcon: {
      height: ms(13),
      width: ms(13),
      tintColor: Colors.white,
    },
    closeBtnContainer: {
      height: ms(35),
      width: ms(35),
      alignSelf: 'flex-end',
      marginRight: s(20),
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: Colors.blackGreyShaded,
      borderRadius: ms(40),
    },
    pointer: {
      alignSelf: 'center',
      height: vs(3),
      width: s(25),
      marginTop: vs(15),
      backgroundColor: Colors.white,
      borderRadius: ms(10),
    },
    containerStyle: {
      backgroundColor: Colors.backBtnBackground,
      borderTopLeftRadius: ms(30),
      borderTopRightRadius: ms(30),
    },
  });
};
