import React, {FC} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {ms, s, vs} from 'react-native-size-matters';
import {LineChart} from 'react-native-wagmi-charts';
import {ICONS, IMAGES} from '../../assets';
import {PriceChangeComponent, UpcomingFeature} from '../../components';
import {FONTS} from '../../theme';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../utils';
import {FinancialsComponent} from './FinancialsComponent';
import {useUserProfile} from './hooks';
import {OverviewComponent} from './OverviewComponent';

const UserProfileScreen: FC = () => {
  const {
    Colors,
    viewsData,
    viewsSelectedFilter,
    selectedSectionName,
    showsListSheetRef,
    brandGrowthSheetRef,
    upcomingFeatureRef,
    handleUpcomingFeature,
    handleViewsFilterPress,
    handleSectionSelect,
    formatValue,
  } = useUserProfile();
  const styles = screenStyles(Colors);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.headContainer}>
          <View>
            <TouchableOpacity
              style={styles.backBtnContainer}
              onPress={handleUpcomingFeature}>
              <Image source={ICONS.leftArrow} style={styles.backIcon} />
            </TouchableOpacity>
          </View>

          <View style={styles.sideButtons}>
            <TouchableOpacity
              style={styles.followBtnContainer}
              onPress={handleUpcomingFeature}>
              <Text allowFontScaling={false} style={styles.followText}>
                Follow
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.starProfileContainer}
              onPress={handleUpcomingFeature}>
              <Image source={ICONS.star} style={styles.backIcon} />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.shareProfileContainer}
              onPress={handleUpcomingFeature}>
              <Image source={ICONS.export} style={styles.backIcon} />
            </TouchableOpacity>
          </View>
        </View>

        <LineChart.Provider data={viewsData}>
          <View style={styles.userDetailsContainer}>
            <View style={styles.userNamePhotoContainer}>
              <Image
                source={IMAGES.sampleUser}
                style={styles.userPhotoContainer}
              />
              <Text allowFontScaling={false} style={styles.userNameText}>
                Lil Girly
              </Text>
            </View>

            {/* <View>
              <View style={styles.revenueTextContainer}>
                <Text style={styles.revenueText}>$</Text>
                <LineChart.PriceText
                  style={styles.revenueText}
                  format={formatValue}
                  variant="formatted"
                />
              </View>
              <Text
                allowFontScaling={false}
                style={styles.profitText}>{`$2.95 (5%)`}</Text>
            </View> */}
            <PriceChangeComponent />
          </View>

          <View style={styles.sectionsContainer}>
            <TouchableOpacity
              style={[
                styles.sectionUnSelectedContainer,
                selectedSectionName === 'Overview' &&
                  styles.sectionSelectedContainer,
              ]}
              onPress={() => handleSectionSelect('Overview')}>
              <Text
                allowFontScaling={false}
                style={[
                  styles.sectionUnSelectedText,
                  selectedSectionName === 'Overview' &&
                    styles.sectionSelectedText,
                ]}>
                Overview
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.sectionUnSelectedContainer,
                selectedSectionName === 'Financials' &&
                  styles.sectionSelectedContainer,
              ]}
              onPress={() => handleSectionSelect('Financials')}>
              <Text
                allowFontScaling={false}
                style={[
                  styles.sectionUnSelectedText,
                  selectedSectionName === 'Financials' &&
                    styles.sectionSelectedText,
                ]}>
                Financials
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.sectionUnSelectedContainer,
                selectedSectionName === 'Community' &&
                  styles.sectionSelectedContainer,
              ]}
              onPress={() => {
                // handleSectionSelect('Community');
                handleUpcomingFeature();
              }}>
              <Text
                allowFontScaling={false}
                style={[
                  styles.sectionUnSelectedText,
                  selectedSectionName === 'Community' &&
                    styles.sectionSelectedText,
                ]}>
                Community
              </Text>
            </TouchableOpacity>
          </View>

          {selectedSectionName === 'Overview' && (
            <View style={styles.viewsChartContainer}>
              <View style={styles.viewsChartDateTimeContainer}>
                <LineChart.DatetimeText style={{color: Colors.notFocused}} />
              </View>
              <LineChart height={vs(260)} width={s(320)}>
                <LineChart.Path color={Colors.line}>
                  <LineChart.HorizontalLine
                    at={{index: 0}}
                    color={Colors.white}
                  />
                </LineChart.Path>
                <LineChart.CursorLine />
                <LineChart.CursorCrosshair
                  color={Colors.white}></LineChart.CursorCrosshair>
              </LineChart>

              <View style={styles.viewsChartFiltersContainer}>
                <TouchableOpacity
                  style={[
                    styles.viewsChartFilterUnSelected,
                    viewsSelectedFilter === 'All' &&
                      styles.viewsChartFilterSelected,
                  ]}
                  onPress={() => handleViewsFilterPress('All')}>
                  <Text
                    allowFontScaling={false}
                    style={[
                      styles.viewsChartBelowFilterText,
                      viewsSelectedFilter === 'All' &&
                        styles.selectedStocksFilterTextColor,
                    ]}>
                    All
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.viewsChartFilterUnSelected,
                    viewsSelectedFilter === '1Y' &&
                      styles.viewsChartFilterSelected,
                  ]}
                  onPress={() => handleViewsFilterPress('1Y')}>
                  <Text
                    allowFontScaling={false}
                    style={[
                      styles.viewsChartBelowFilterText,
                      viewsSelectedFilter === '1Y' &&
                        styles.selectedStocksFilterTextColor,
                    ]}>
                    1Y
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.viewsChartFilterUnSelected,
                    viewsSelectedFilter === '6M' &&
                      styles.viewsChartFilterSelected,
                  ]}
                  onPress={() => handleViewsFilterPress('6M')}>
                  <Text
                    allowFontScaling={false}
                    style={[
                      styles.viewsChartBelowFilterText,
                      viewsSelectedFilter === '6M' &&
                        styles.selectedStocksFilterTextColor,
                    ]}>
                    6M
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.viewsChartFilterUnSelected,
                    viewsSelectedFilter === '1M' &&
                      styles.viewsChartFilterSelected,
                  ]}
                  onPress={() => handleViewsFilterPress('1M')}>
                  <Text
                    allowFontScaling={false}
                    style={[
                      styles.viewsChartBelowFilterText,
                      viewsSelectedFilter === '1M' &&
                        styles.selectedStocksFilterTextColor,
                    ]}>
                    1M
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.viewsChartFilterUnSelected,
                    viewsSelectedFilter === '1W' &&
                      styles.viewsChartFilterSelected,
                  ]}
                  onPress={() => handleViewsFilterPress('1W')}>
                  <Text
                    allowFontScaling={false}
                    style={[
                      styles.viewsChartBelowFilterText,
                      viewsSelectedFilter === '1W' &&
                        styles.selectedStocksFilterTextColor,
                    ]}>
                    1W
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.viewsChartFilterUnSelected,
                    viewsSelectedFilter === '1D' &&
                      styles.viewsChartFilterSelected,
                  ]}
                  onPress={() => handleViewsFilterPress('1D')}>
                  <Text
                    allowFontScaling={false}
                    style={[
                      styles.viewsChartBelowFilterText,
                      viewsSelectedFilter === '1D' &&
                        styles.selectedStocksFilterTextColor,
                    ]}>
                    1D
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          )}

          {selectedSectionName === 'Overview' ? (
            <OverviewComponent ref={showsListSheetRef} />
          ) : (
            <FinancialsComponent ref={brandGrowthSheetRef} />
          )}
        </LineChart.Provider>
      </ScrollView>
      <TouchableOpacity
        style={styles.tradeFloatingBtn}
        activeOpacity={0.7}
        onPress={handleUpcomingFeature}>
        <Text style={styles.tradeBtnText}>Trade</Text>
      </TouchableOpacity>
      <UpcomingFeature ref={upcomingFeatureRef} />
    </SafeAreaView>
  );
};

export default UserProfileScreen;

const screenStyles = (Colors: any) => {
  return StyleSheet.create({
    revenueTextContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    tradeBtnText: {
      color: Colors.background,
      fontSize: ms(14),
      fontFamily: FONTS.helveticaNowDisplayBold,
    },
    tradeFloatingBtn: {
      top: SCREEN_HEIGHT / 1.25,
      left: SCREEN_WIDTH / 1.6,
      position: 'absolute',
      backgroundColor: Colors.celticBlue,
      height: vs(50),
      width: s(110),
      borderRadius: ms(30),
      justifyContent: 'center',
      alignItems: 'center',
    },
    container: {
      flex: 1,
      backgroundColor: Colors.background,
    },
    headContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingLeft: s(12),
      paddingRight: s(8),
      marginTop: vs(10),
    },
    backBtnContainer: {
      backgroundColor: Colors.blackGreyShaded,
      paddingRight: s(2),
      justifyContent: 'center',
      alignItems: 'center',
      height: ms(40),
      width: ms(40),
      borderRadius: ms(40),
    },
    backIcon: {
      height: ms(20),
      width: ms(20),
      tintColor: Colors.white,
    },
    sideButtons: {
      flexDirection: 'row',
    },
    followBtnContainer: {
      backgroundColor: Colors.backBtnBackground,
      height: ms(40),
      paddingHorizontal: s(20),
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: ms(50),
    },
    followText: {
      color: Colors.font,
      fontSize: ms(14),
      fontFamily: FONTS.helveticaNowDisplayExtraBold,
    },
    starProfileContainer: {
      backgroundColor: Colors.backBtnBackground,
      height: ms(40),
      width: ms(40),
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: ms(40),
      marginLeft: s(10),
    },
    shareProfileContainer: {
      backgroundColor: Colors.backBtnBackground,
      height: ms(40),
      width: ms(40),
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: s(10),
      borderRadius: ms(40),
    },
    userDetailsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: vs(20),
      paddingHorizontal: s(5),
    },
    userNamePhotoContainer: {
      justifyContent: 'center',
      marginLeft: s(8),
    },
    userPhotoContainer: {
      backgroundColor: Colors.red,
      height: ms(40),
      width: ms(40),
      borderRadius: ms(40),
    },
    userNameText: {
      color: Colors.font,
      fontSize: ms(18),
      fontFamily: FONTS.helveticaNowDisplayExtraBold,
      marginTop: vs(5),
    },
    revenueText: {
      color: Colors.font,
      fontSize: ms(28),
      fontFamily: FONTS.helveticaNowDisplayExtraBold,
      marginTop: vs(5),
    },
    profitText: {
      color: Colors.profit,
      fontSize: ms(12),
      fontFamily: FONTS.helveticaNowDisplayExtraBold,
      textAlign: 'right',
    },
    sectionsContainer: {
      flexDirection: 'row',
      marginTop: vs(20),
    },
    sectionSelectedContainer: {
      backgroundColor: Colors.backBtnBackground,
      height: ms(40),
      paddingHorizontal: s(20),
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: ms(50),
    },
    sectionSelectedText: {
      color: Colors.font,
      fontSize: ms(14),
      fontFamily: FONTS.helveticaNowDisplayExtraBold,
    },
    sectionUnSelectedContainer: {
      height: ms(40),
      paddingHorizontal: s(20),
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: ms(50),
    },
    sectionUnSelectedText: {
      color: Colors.notFocused,
      fontSize: ms(14),
      fontFamily: FONTS.helveticaNowDisplayBold,
    },
    viewsChartFilterSelected: {
      backgroundColor: Colors.blackGreyShaded,
    },
    viewsChartFilterUnSelected: {
      paddingHorizontal: s(18),
      paddingVertical: vs(7),
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: ms(20),
    },
    viewsChartBelowFilterText: {
      color: Colors.notFocused,
      fontSize: ms(14),
      fontFamily: FONTS.helveticaNowDisplayMedium,
    },
    viewsChartFiltersContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
    viewsChartContainer: {
      justifyContent: 'center',
      paddingHorizontal: s(15),
      marginTop: vs(10),
    },
    viewsChartDateTimeContainer: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    selectedStocksFilterTextColor: {
      color: Colors.white,
      fontFamily: FONTS.helveticaNowDisplayBold,
    },
  });
};
