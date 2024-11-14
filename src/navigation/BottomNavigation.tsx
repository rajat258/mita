import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {useEffect} from 'react';
import {Image, LogBox, StyleSheet, Text} from 'react-native';
import {ms, vs} from 'react-native-size-matters';
import {ICONS} from '../assets';
import {ROUTES} from '../constants';
import {useTheme} from '../contexts';
import {PortfolioScreen, UserProfileScreen} from '../screens';
import {FONTS, getCurrentTheme} from '../theme';

const BottomTab = createBottomTabNavigator();

const BottomNavigation = () => {
  const {theme} = useTheme();
  const Colors = getCurrentTheme(theme || 'dark');
  const styles = screenStyles(Colors);

  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, []);

  return (
    <BottomTab.Navigator
      initialRouteName={ROUTES.UserProfileScreen}
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBarCommonStyle,
      }}>
      <BottomTab.Screen
        name={ROUTES.UserProfileScreen}
        component={UserProfileScreen}
        options={{
          tabBarLabel: ({focused}) => (
            <Text
              style={[
                styles.tabBarLabelCommonStyle,
                {
                  color: focused ? Colors.celticBlue : Colors.notFocused,
                },
              ]}>
              Market
            </Text>
          ),

          tabBarIcon: ({focused}) => (
            <Image
              source={ICONS.magnifyingGlass}
              style={[
                styles.tabBarIconCommonStyle,
                {
                  tintColor: focused ? Colors.celticBlue : Colors.notFocused,
                },
              ]}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name={ROUTES.PortfolioScreen}
        component={PortfolioScreen}
        options={{
          tabBarLabel: ({focused}) => (
            <Text
              style={[
                styles.tabBarLabelCommonStyle,
                {
                  color: focused ? Colors.celticBlue : Colors.notFocused,
                },
              ]}>
              Portfolio
            </Text>
          ),

          tabBarIcon: ({focused}) => (
            <Image
              source={ICONS.portfolio}
              style={[
                styles.tabBarIconCommonStyle,
                {
                  tintColor: focused ? Colors.celticBlue : Colors.notFocused,
                },
              ]}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomNavigation;

const screenStyles = (Colors: any) => {
  return StyleSheet.create({
    tabBarCommonStyle: {
      backgroundColor: Colors.background,
      borderTopWidth: 0,
      borderColor: Colors.background,
    },
    tabBarIconCommonStyle: {
      paddingTop: vs(10),
      height: ms(30),
      width: ms(30),
    },
    tabBarLabelCommonStyle: {
      fontSize: ms(12),
      fontFamily: FONTS.helveticaNowDisplayExtraBold,
    },
  });
};
