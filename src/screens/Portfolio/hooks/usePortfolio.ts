import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {useRef} from 'react';
import {useTheme} from '../../../contexts';
import {getCurrentTheme} from '../../../theme';

const usePortfolio = () => {
  const {theme} = useTheme();
  const Colors = getCurrentTheme(theme || 'dark');

  const navigation = useNavigation();
  const upcomingFeatureRef = useRef(null);

  const onGotPress = () => {
    upcomingFeatureRef.current.close();
  };

  const onClose = () => {
    navigation.goBack();
  };

  useFocusEffect(() => {
    upcomingFeatureRef.current.open();
  });

  return {
    Colors,
    upcomingFeatureRef,
    onGotPress,
    onClose,
  };
};

export default usePortfolio;
