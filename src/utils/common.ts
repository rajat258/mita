import {Dimensions, Platform} from 'react-native';

export const SCREEN_HEIGHT = Dimensions.get('window').height;
export const SCREEN_WIDTH = Dimensions.get('window').width;

export const isIos = Platform.OS === 'ios';
export const isAndroid = Platform.OS === 'android';
