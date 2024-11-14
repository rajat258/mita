import React, {FC, useEffect, useRef} from 'react';
import {
  Animated,
  Easing,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {ms, s, vs} from 'react-native-size-matters';
import {LineChart} from 'react-native-wagmi-charts';
import {ICONS} from '../../../assets';
import {
  BottomSheet,
  ReleasesRow,
  ShowsRow,
  UpcomingFeature,
} from '../../../components';
import {FONTS} from '../../../theme';
import {SCREEN_HEIGHT} from '../../../utils';
import {useOverview} from './hooks';
import WorldMapComponent from './WorldMapComponent';

const OverviewComponent: FC = React.forwardRef(({}, ref) => {
  const {
    Colors,
    fansData,
    fansSelectedFilter,
    fansGrowthPercentage,
    showFullAboutText,
    isShows,
    setIsShows,
    showsData,
    releasesData,
    followersData,
    topSongsOnSpotify,
    showsLabelsStatuses,
    upcomingFeatureRef,
    handleReadMore,
    handleFansChartFilterPress,
    handleShowsViewAllPress,
    handleShowsBottomSheetClosePress,
    handleUpcomingFeature,
  } = useOverview(ref);
  const styles = screenStyles(Colors);

  const animatedHeight = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animatedHeight, {
      toValue: showFullAboutText ? vs(70) : vs(30), // Adjust the value based on the content size
      duration: 300,
      easing: Easing.ease,
      useNativeDriver: false,
    }).start();
  }, [showFullAboutText]);

  return (
    <>
      <View style={styles.aboutContainer}>
        <View style={styles.titleInfoContainer}>
          <Text allowFontScaling={false} style={styles.aboutTitleText}>
            About
          </Text>

          <TouchableOpacity style={styles.infoContainer}>
            <Image source={ICONS.info} style={styles.infoIcon} />
          </TouchableOpacity>
        </View>

        <View style={styles.aboutDescriptionContainer}>
          <Animated.View
            style={[styles.aboutDescriptionWrapper, {height: animatedHeight}]}>
            <Text
              allowFontScaling={false}
              ellipsizeMode="tail"
              // numberOfLines={showFullAboutText ? undefined : 3}
              style={styles.aboutDescriptionText}>
              {`Lil Girly is revolutionizing the electronic music landscape with her pulsating beats and mesmerizing synth patterns, carving a niche among dance music enthusiasts.`}
            </Text>
          </Animated.View>
          <TouchableOpacity onPress={handleReadMore} style={styles.readMoreBtn}>
            <Text allowFontScaling={false} style={styles.readMore}>
              {showFullAboutText ? 'Read less' : 'Read more'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.tableContainer}>
        <View style={styles.rowContainer}>
          <Text allowFontScaling={false} style={styles.rowTitleText}>
            Debut Year
          </Text>
          <Text allowFontScaling={false} style={styles.rowValueText}>
            2018
          </Text>
        </View>
        <View style={styles.tableDivider} />
        <View style={styles.rowContainer}>
          <Text allowFontScaling={false} style={styles.rowTitleText}>
            Genre
          </Text>
          <Text allowFontScaling={false} style={styles.rowValueText}>
            Electronic
          </Text>
        </View>
        <View style={styles.tableDivider} />
        <View style={styles.rowContainer}>
          <Text allowFontScaling={false} style={styles.rowTitleText}>
            Career Stage
          </Text>
          <Text allowFontScaling={false} style={styles.rowValueText}>
            Emerging Artist
          </Text>
        </View>
        <View style={styles.tableDivider} />
        <View style={styles.rowContainer}>
          <Text allowFontScaling={false} style={styles.rowTitleText}>
            Management
          </Text>
          <Text allowFontScaling={false} style={styles.rowValueText}>
            EA Management
          </Text>
        </View>
      </View>

      <View style={styles.fansContainer}>
        <View style={styles.titleInfoContainer}>
          <Text allowFontScaling={false} style={styles.fansTitleText}>
            Fan
          </Text>

          <TouchableOpacity style={styles.infoContainer}>
            <Image source={ICONS.info} style={styles.infoIcon} />
          </TouchableOpacity>
        </View>
        <ScrollView horizontal>
          <View style={styles.fansChartContainer}>
            <View style={styles.fansChartHeaderContainer}>
              <Text allowFontScaling={false} style={styles.fansChartTitleText}>
                Fans Growth
              </Text>
              <Text
                allowFontScaling={false}
                style={
                  styles.fansIncreasedPercentage
                }>{`${fansGrowthPercentage}`}</Text>
            </View>
            {/* <Chart
                style={{height: 180, width: '100%'}}
                data={[
                  {x: -2, y: 15},
                  {x: -1, y: 10},
                  {x: 0, y: 12},
                  {x: 1, y: 7},
                  {x: 2, y: 6},
                  {x: 3, y: 8},
                  {x: 4, y: 10},
                  {x: 5, y: 8},
                  {x: 6, y: 12},
                  {x: 7, y: 14},
                  {x: 8, y: 12},
                  {x: 9, y: 13.5},
                  {x: 10, y: 18},
                  {x: 11, y: 5},
                  {x: 12, y: 6.5},
                  {x: 13, y: 8},
                  {x: 14, y: 6.5},
                  {x: 15, y: 7},
                  {x: 16, y: 12},
                  {x: 17, y: 15},
                ]}
                padding={{left: 40, bottom: 20, right: 20, top: 20}}
                xDomain={{min: -2, max: 20}}
                yDomain={{min: 0, max: 20}}>
                <Line
                  theme={{
                    stroke: {color: Colors.celticBlue, width: 5},
                  }}
                />
              </Chart> */}
            <LineChart.Provider data={fansData}>
              <LineChart height={vs(150)} width={s(250)}>
                <LineChart.Path color={Colors.celticBlue}>
                  <LineChart.HorizontalLine
                    at={{index: 0}}
                    color={Colors.white}
                  />
                </LineChart.Path>
              </LineChart>
            </LineChart.Provider>
            <View style={styles.fansChartFiltersContainer}>
              <TouchableOpacity
                style={[
                  styles.fansChartFilterUnselected,
                  fansSelectedFilter === 'All' &&
                    styles.fansChartFilterSelected,
                ]}
                onPress={() => handleFansChartFilterPress('All')}>
                <Text
                  allowFontScaling={false}
                  style={[
                    styles.fansChartBelowFilterText,
                    fansSelectedFilter === 'All' &&
                      styles.selectedFansFilterTextColor,
                  ]}>
                  All
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.fansChartFilterUnselected,
                  fansSelectedFilter === '3Y' && styles.fansChartFilterSelected,
                ]}
                onPress={() => handleFansChartFilterPress('3Y')}>
                <Text
                  allowFontScaling={false}
                  style={[
                    styles.fansChartBelowFilterText,
                    fansSelectedFilter === '3Y' &&
                      styles.selectedFansFilterTextColor,
                  ]}>
                  3Y
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.fansChartFilterUnselected,
                  fansSelectedFilter === '2Y' && styles.fansChartFilterSelected,
                ]}
                onPress={() => handleFansChartFilterPress('2Y')}>
                <Text
                  allowFontScaling={false}
                  style={[
                    styles.fansChartBelowFilterText,
                    fansSelectedFilter === '2Y' &&
                      styles.selectedFansFilterTextColor,
                  ]}>
                  2Y
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.fansChartFilterUnselected,
                  fansSelectedFilter === 'LTM' &&
                    styles.fansChartFilterSelected,
                ]}
                onPress={() => handleFansChartFilterPress('LTM')}>
                <Text
                  allowFontScaling={false}
                  style={[
                    styles.fansChartBelowFilterText,
                    fansSelectedFilter === 'LTM' &&
                      styles.selectedFansFilterTextColor,
                  ]}>
                  LTM
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.followersContainer}>
            <View>
              <Text allowFontScaling={false} style={styles.followersTitleText}>
                Followers
              </Text>
            </View>

            <View style={styles.followersTable}>
              <FlatList
                scrollEnabled={false}
                data={followersData}
                renderItem={({item, index}) => {
                  return (
                    <>
                      <View style={styles.followersTableRow}>
                        <View style={styles.followersPlatformLabelContainer}>
                          <Text
                            allowFontScaling={false}
                            style={styles.followersPlatformLabel}>
                            {item.platform}
                          </Text>
                        </View>
                        <View style={styles.progressBarContainer}>
                          <View style={styles.progressBar}>
                            <View
                              style={[
                                styles.progressInnerContainer,
                                {width: s(item.progress)},
                              ]}
                            />
                          </View>
                        </View>
                        <View style={styles.followersCountContainer}>
                          <Text
                            allowFontScaling={false}
                            style={styles.followersCount}>
                            {item.followers}
                          </Text>
                        </View>
                      </View>
                      <View style={styles.tableDivider} />
                    </>
                  );
                }}
              />
              <View style={styles.rowContainer}>
                <Text
                  allowFontScaling={false}
                  style={styles.totalFollowersTitleText}>
                  Total
                </Text>
                <Text allowFontScaling={false} style={styles.rowValueText}>
                  1M
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>

      <View style={styles.musicContainer}>
        <View style={styles.titleInfoContainer}>
          <Text allowFontScaling={false} style={styles.musicTitle}>
            Music
          </Text>
          <TouchableOpacity style={styles.infoContainer}>
            <Image source={ICONS.info} style={styles.infoIcon} />
          </TouchableOpacity>
        </View>

        <ScrollView horizontal>
          <View style={styles.statsContainer}>
            <View>
              <Text allowFontScaling={false} style={styles.statsTableTitleText}>
                Stats
              </Text>
            </View>

            <View style={styles.statsTableRow}>
              <Text
                allowFontScaling={false}
                style={styles.statsTableLabel}>{`Streams (LTM)`}</Text>
              <Text
                allowFontScaling={false}
                style={styles.statsTableValue}>{`50M`}</Text>
            </View>
            <View style={styles.statsTableDivider} />

            <View style={styles.statsTableRow}>
              <Text
                allowFontScaling={false}
                style={styles.statsTableLabel}>{`Streaming Growth (YoY)`}</Text>
              <Text
                allowFontScaling={false}
                style={styles.statsTableValue}>{`300%`}</Text>
            </View>
            <View style={styles.statsTableDivider} />
            <View style={styles.statsTableRow}>
              <Text
                allowFontScaling={false}
                style={
                  styles.statsTableLabel
                }>{`Spotify Monthly Listeners`}</Text>
              <Text
                allowFontScaling={false}
                style={styles.statsTableValue}>{`2M`}</Text>
            </View>
            <View style={styles.statsTableDivider} />
            <View style={styles.statsTableRow}>
              <Text
                allowFontScaling={false}
                style={styles.statsTableLabel}>{`Most Streams In A Song`}</Text>
              <Text
                allowFontScaling={false}
                style={styles.statsTableValue}>{`350M`}</Text>
            </View>
          </View>

          <View style={styles.topSongsContainer}>
            <View style={styles.topSpotifySongsTitleContainer}>
              <Text
                allowFontScaling={false}
                style={styles.topSpotifySongsTitleText}>
                Top Songs On Spotify
              </Text>
            </View>
            <FlatList
              scrollEnabled={false}
              data={topSongsOnSpotify}
              renderItem={({item}) => {
                return (
                  <View style={styles.songContainer}>
                    <View style={styles.playContainer}>
                      <TouchableOpacity
                        style={styles.playIconContainer}
                        onPress={handleUpcomingFeature}>
                        <Image source={ICONS.play} style={styles.playIcon} />
                      </TouchableOpacity>
                    </View>

                    <View style={styles.songSingerNamesContainer}>
                      <Text
                        allowFontScaling={false}
                        style={styles.commonTextStyleFocused}>
                        {item.songName}
                      </Text>
                      <Text
                        allowFontScaling={false}
                        style={styles.commonTextStyleUnFocused}>
                        {item.singer}
                      </Text>
                    </View>

                    <View style={styles.streamCountsContainer}>
                      <Text
                        allowFontScaling={false}
                        style={styles.commonTextStyleFocused}>
                        {item.streamCount}
                      </Text>
                      <Text
                        allowFontScaling={false}
                        style={styles.commonTextStyleFocused}>
                        {item.type}
                      </Text>
                    </View>
                  </View>
                );
              }}
            />
          </View>
        </ScrollView>
      </View>

      {/* <View style={styles.showsContainer}>
        <View style={styles.showsHeaderContainer}>
          <View style={styles.titleInfoContainer}>
            <Text allowFontScaling={false} style={styles.showsTitleText}>
              Shows 2024
            </Text>

            <TouchableOpacity style={styles.infoContainer}>
              <Image source={ICONS.info} style={styles.infoIcon} />
            </TouchableOpacity>
          </View>
          <View style={styles.onTourContainer}>
            <Text
              allowFontScaling={false}
              style={styles.onTourBullet}>{`\u2022`}</Text>
            <Text
              allowFontScaling={false}
              style={styles.onTourLabel}>{`On Tour`}</Text>
          </View>
        </View>

        <WorldMapComponent />

        <FlatList
          scrollEnabled={false}
          data={showsLabelsStatuses}
          renderItem={({item, index}) => {
            return (
              <View>
                <View style={styles.showsTableRow}>
                  <View style={styles.halfRowContainer}>
                    <View style={styles.lineRow}>
                      <View style={styles.labelContainer}>
                        <Text
                          allowFontScaling={false}
                          style={[
                            styles.performedBullet,
                            {
                              color: item.color,
                            },
                          ]}>{`\u2022`}</Text>
                        <Text
                          allowFontScaling={false}
                          style={styles.showsTableLabelText}>
                          {`${item.label1}`}
                        </Text>
                      </View>
                      <View>
                        <Text
                          allowFontScaling={false}
                          style={
                            styles.commonTextStyleFocused
                          }>{`${item.label1Count}`}</Text>
                      </View>
                    </View>
                    {index !== showsLabelsStatuses.length - 1 && (
                      <View style={styles.showsTableDivider} />
                    )}
                  </View>

                  <View style={styles.halfRowContainer}>
                    <View style={styles.lineRow}>
                      <View style={styles.labelContainer}>
                        <Text
                          allowFontScaling={false}
                          style={styles.showsTableLabelText}>
                          {`${item.label2}`}
                        </Text>
                      </View>
                      <View>
                        <Text
                          allowFontScaling={false}
                          style={
                            styles.commonTextStyleFocused
                          }>{`${item.label2Count}`}</Text>
                      </View>
                    </View>
                    {index !== showsLabelsStatuses.length - 1 && (
                      <View style={styles.showsTableDivider} />
                    )}
                  </View>
                </View>
              </View>
            );
          }}
        />
      </View> */}

      <View style={styles.datesContainer}>
        <View style={styles.titleInfoContainer}>
          <Text allowFontScaling={false} style={styles.datesTitleText}>
            Dates
          </Text>

          <TouchableOpacity style={styles.infoContainer}>
            <Image source={ICONS.info} style={styles.infoIcon} />
          </TouchableOpacity>
        </View>

        <View style={styles.datesHeaderBtns}>
          <View style={styles.sectionsContainer}>
            <TouchableOpacity
              style={[
                styles.datesUnSelectedSection,
                isShows && styles.dateSelectedSection,
              ]}
              onPress={() => setIsShows(true)}>
              <Text
                allowFontScaling={false}
                style={[
                  styles.datesUnSelectedSectionText,
                  isShows && styles.datesSelectedSectionText,
                ]}>
                Shows
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.datesUnSelectedSection,
                !isShows && styles.dateSelectedSection,
              ]}
              onPress={() => setIsShows(false)}>
              <Text
                allowFontScaling={false}
                style={[
                  styles.datesUnSelectedSectionText,
                  !isShows && styles.datesSelectedSectionText,
                ]}>
                Releases
              </Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={styles.viewAllBtn}
            onPress={handleShowsViewAllPress}>
            <Text
              allowFontScaling={false}
              style={styles.commonTextStyleFocused}>
              View All
            </Text>
            <Image source={ICONS.rightArrow} style={styles.rightArrowIcon} />
          </TouchableOpacity>
        </View>

        <View style={styles.showsListContainer}>
          {isShows ? (
            <FlatList
              data={showsData.slice(0, 3)}
              renderItem={({item}) => {
                return <ShowsRow data={item} />;
              }}
            />
          ) : (
            <View style={styles.upcomingReleaseTextContainer}>
              <Text
                allowFontScaling={false}
                style={styles.upcomingReleasesText}>
                {`Upcoming Releases \nTBA`}
              </Text>
            </View>
          )}
        </View>
      </View>

      <BottomSheet
        ref={ref}
        // onClose={handleShowsBottomSheetClosePress}
        isCloseEnabled={true}
        height={SCREEN_HEIGHT / 1.1}>
        <View style={styles.datesShowsBottomSheetMainContainer}>
          <View style={styles.titleInfoContainer}>
            <Text allowFontScaling={false} style={styles.datesTitleText}>
              Dates
            </Text>

            <TouchableOpacity style={styles.infoContainer}>
              <Image source={ICONS.info} style={styles.infoIcon} />
            </TouchableOpacity>
          </View>

          <View style={styles.datesHeaderBtns}>
            <View style={styles.sectionsContainer}>
              <TouchableOpacity
                style={[
                  styles.datesUnSelectedSection,
                  isShows && styles.dateSelectedSection,
                ]}
                onPress={() => setIsShows(true)}>
                <Text
                  allowFontScaling={false}
                  style={[
                    styles.datesUnSelectedSectionText,
                    isShows && styles.datesSelectedSectionText,
                  ]}>
                  Shows
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.datesUnSelectedSection,
                  !isShows && styles.dateSelectedSection,
                ]}
                onPress={() => setIsShows(false)}>
                <Text
                  allowFontScaling={false}
                  style={[
                    styles.datesUnSelectedSectionText,
                    !isShows && styles.datesSelectedSectionText,
                  ]}>
                  Releases
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.showsReleasesListContainer}>
            {isShows ? (
              <FlatList
                data={showsData}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.showsListFlatlist}
                renderItem={({item, index}) => {
                  return (
                    <>
                      {index < 3 ? (
                        <ShowsRow data={item} />
                      ) : (
                        <ShowsRow data={item} isDisabled={true} />
                      )}

                      {index === 2 && (
                        <View style={styles.dividerWithTextContainer}>
                          <View style={styles.showsListDivider} />
                          <View style={styles.showsListDividerTextContainer}>
                            <Text
                              allowFontScaling={false}
                              style={styles.showsListDividerText}>
                              2024
                            </Text>
                          </View>
                          <View style={styles.showsListDivider} />
                        </View>
                      )}
                    </>
                  );
                }}
              />
            ) : (
              <View style={styles.releasesListContainer}>
                <FlatList
                  data={releasesData}
                  showsVerticalScrollIndicator={false}
                  contentContainerStyle={styles.releasesListFlatlist}
                  ListHeaderComponent={
                    <Text
                      allowFontScaling={false}
                      style={styles.upcomingReleasesText}>
                      {`Upcoming Releases \nTBA`}
                    </Text>
                  }
                  renderItem={({item, index}) => {
                    return <ReleasesRow data={item} key={index} />;
                  }}
                />
              </View>
            )}
          </View>
        </View>
      </BottomSheet>

      <UpcomingFeature ref={upcomingFeatureRef} />
    </>
  );
});

export default OverviewComponent;

const screenStyles = (Colors: any) => {
  return StyleSheet.create({
    releasesListFlatlist: {
      paddingBottom: vs(20),
    },
    showsListFlatlist: {
      paddingBottom: vs(20),
    },
    selectedStocksFilterTextColor: {
      color: Colors.white,
      fontFamily: FONTS.helveticaNowDisplayBold,
    },
    selectedFansFilterTextColor: {
      color: Colors.white,
      fontFamily: FONTS.helveticaNowDisplayBold,
    },
    showsTableLabelText: {
      color: Colors.notFocused,
      fontSize: ms(14),
      fontFamily: FONTS.helveticaNowDisplayMedium,
    },
    aboutDescriptionWrapper: {
      overflow: 'hidden',
    },
    fansChartFilterSelected: {
      backgroundColor: Colors.blackGreyShaded,
    },
    fansChartFilterUnselected: {
      paddingHorizontal: s(10),
      paddingVertical: vs(5),
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: ms(20),
    },
    loaderContainer: {
      flex: 1,
      height: vs(300),
      justifyContent: 'center',
      alignItems: 'center',
    },
    releasesListContainer: {
      marginTop: vs(20),
      justifyContent: 'center',
      alignItems: 'center',
    },
    datesShowsBottomSheetMainContainer: {
      flex: 1,
      paddingHorizontal: s(15),
    },
    showsReleasesListContainer: {
      flex: 1,
      paddingTop: vs(10),
    },
    showsListDividerText: {
      color: Colors.notFocused,
      fontSize: ms(10),
      fontFamily: FONTS.helveticaNowDisplayMedium,
    },
    showsListDividerTextContainer: {
      paddingHorizontal: s(5),
    },
    showsListDivider: {
      height: vs(1),
      width: '40%',
      backgroundColor: Colors.notFocused,
    },
    dividerWithTextContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: vs(20),
    },
    showsListContainer: {
      height: vs(250),
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
    showsHeaderContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    onTourContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    onTourBullet: {
      color: Colors.celticBlue,
      fontSize: ms(30),
      marginRight: s(5),
    },
    onTourLabel: {
      color: Colors.celticBlue,
      fontSize: ms(14),
      fontFamily: FONTS.helveticaNowDisplayBold,
      textAlign: 'center',
    },
    showsTableDivider: {
      width: '100%',
      height: vs(0.5),
      backgroundColor: Colors.notFocused,
    },
    worldMapContainer: {
      height: vs(300),
    },
    showsContainer: {
      paddingHorizontal: s(15),
      marginTop: vs(30),
    },
    showsTitleText: {
      color: Colors.font,
      fontSize: ms(22),
      fontFamily: FONTS.helveticaNowDisplayExtraBold,
    },
    performedBullet: {
      fontSize: ms(20),
      marginRight: s(5),
    },
    showsTableRow: {
      flex: 1,
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    halfRowContainer: {
      width: '45%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    lineRow: {
      flex: 1,
      paddingVertical: vs(10),
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    labelContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    datesHeaderBtns: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    datesUnSelectedSection: {
      height: ms(30),
      paddingHorizontal: s(15),
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: ms(50),
    },
    datesUnSelectedSectionText: {
      color: Colors.notFocused,
      fontSize: ms(16),
      fontFamily: FONTS.helveticaNowDisplayBold,
    },
    dateSelectedSection: {
      backgroundColor: Colors.blackGreyShaded,
      height: ms(30),
      paddingHorizontal: s(15),
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: ms(50),
    },
    datesSelectedSectionText: {
      color: Colors.font,
      fontSize: ms(16),
      fontFamily: FONTS.helveticaNowDisplayExtraBold,
    },
    viewAllBtn: {
      backgroundColor: Colors.backBtnBackground,
      marginTop: vs(20),
      height: ms(30),
      paddingHorizontal: s(15),
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: ms(50),
    },
    rightArrowIcon: {
      height: ms(10),
      width: ms(10),
      marginLeft: s(7),
      tintColor: Colors.celticBlue,
    },
    upcomingReleaseTextContainer: {
      justifyContent: 'center',
      height: vs(250),
      alignItems: 'center',
    },
    upcomingReleasesText: {
      color: Colors.font,
      fontSize: ms(16),
      lineHeight: vs(22),
      fontFamily: FONTS.helveticaNowDisplayBold,
      textAlign: 'center',
    },
    datesTitleText: {
      color: Colors.font,
      fontSize: ms(22),
      fontFamily: FONTS.helveticaNowDisplayExtraBold,
    },
    datesContainer: {
      paddingHorizontal: s(15),
      marginTop: vs(30),
    },
    infoIcon: {
      height: ms(15),
      width: ms(15),
      tintColor: Colors.notFocused,
    },
    infoContainer: {
      marginLeft: s(8),
    },
    titleInfoContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    topSongsContainer: {
      height: ms(280),
      justifyContent: 'center',
      marginLeft: s(20),
      width: ms(300),
      borderRadius: ms(20),
      paddingHorizontal: s(20),
      backgroundColor: Colors?.backBtnBackground,
      marginTop: vs(20),
    },
    topSpotifySongsTitleContainer: {
      marginTop: vs(20),
    },
    topSpotifySongsTitleText: {
      color: Colors.font,
      fontSize: ms(18),
      fontFamily: FONTS.helveticaNowDisplayExtraBold,
    },
    songContainer: {
      flexDirection: 'row',
      width: '100%',
      marginTop: vs(15),
    },
    playContainer: {
      width: '20%',
    },
    playIconContainer: {
      height: ms(50),
      width: ms(50),
      borderRadius: ms(40),
      backgroundColor: Colors.blackGreyShaded,
      justifyContent: 'center',
      alignItems: 'center',
    },
    playIcon: {
      height: ms(15),
      width: ms(15),
      tintColor: Colors.white,
    },
    songSingerNamesContainer: {
      width: '50%',
      marginLeft: s(10),
      justifyContent: 'center',
    },
    streamCountsContainer: {
      marginLeft: s(5),
      justifyContent: 'center',
      alignItems: 'flex-end',
    },
    commonTextStyleUnFocused: {
      color: Colors.notFocused,
      fontSize: ms(14),
      fontFamily: FONTS.helveticaNowDisplayBold,
    },
    commonTextStyleFocused: {
      color: Colors.font,
      fontSize: ms(14),
      fontFamily: FONTS.helveticaNowDisplayBold,
    },
    statsTableValue: {
      color: Colors.font,
      fontSize: ms(14),
      fontFamily: FONTS.helveticaNowDisplayBold,
    },
    statsTableLabel: {
      color: Colors.notFocused,
      fontSize: ms(14),
      fontFamily: FONTS.helveticaNowDisplayMedium,
    },
    statsTableRow: {
      marginTop: vs(10),
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    statsTableTitleText: {
      color: Colors.font,
      fontSize: ms(18),
      fontFamily: FONTS.helveticaNowDisplayExtraBold,
    },
    statsContainer: {
      height: ms(280),
      justifyContent: 'center',
      width: ms(300),
      borderRadius: ms(20),
      paddingHorizontal: s(20),
      backgroundColor: Colors?.backBtnBackground,
      marginTop: vs(20),
    },
    statsTableDivider: {
      marginTop: vs(15),
      width: '100%',
      height: vs(0.5),
      backgroundColor: Colors.notFocused,
    },
    musicTitle: {
      color: Colors.font,
      fontSize: ms(22),
      fontFamily: FONTS.helveticaNowDisplayExtraBold,
    },
    musicContainer: {
      paddingHorizontal: s(15),
      marginTop: vs(30),
    },
    totalFollowersTitleText: {
      color: Colors.font,
      fontSize: ms(14),
      fontFamily: FONTS.helveticaNowDisplayBold,
    },
    followersCountContainer: {
      flex: 1,
      justifyContent: 'flex-end',
    },
    progressBarContainer: {
      width: '60%',
    },
    followersPlatformLabelContainer: {
      width: '25%',
      alignSelf: 'center',
    },
    followersCount: {
      color: Colors.notFocused,
      textAlign: 'right',
      fontSize: ms(14),
      fontFamily: FONTS.helveticaNowDisplayMedium,
    },
    followersPlatformLabel: {
      color: Colors.notFocused,
      fontSize: ms(14),
      fontFamily: FONTS.helveticaNowDisplayMedium,
    },
    followersContainer: {
      height: ms(280),
      justifyContent: 'center',
      marginLeft: s(20),
      width: ms(300),
      borderRadius: ms(20),
      paddingHorizontal: s(20),
      backgroundColor: Colors?.backBtnBackground,
      marginTop: vs(20),
    },
    followersTitleText: {
      color: Colors.font,
      fontSize: ms(18),
      fontFamily: FONTS.helveticaNowDisplayExtraBold,
    },
    followersTable: {
      marginTop: vs(10),
    },
    followersTableRow: {
      width: '100%',
      marginTop: vs(10),
      flexDirection: 'row',
      alignItems: 'center',
    },
    progressInnerContainer: {
      height: vs(10),
      backgroundColor: Colors.celticBlue,
      borderRadius: ms(4),
    },
    progressBar: {
      height: vs(10),
      width: s(110),
      marginLeft: s(10),
      alignSelf: 'center',
      borderRadius: ms(4),
      backgroundColor: Colors.blackGreyShaded,
    },
    fansChartContainer: {
      height: ms(280),
      justifyContent: 'center',
      width: ms(300),
      borderRadius: ms(20),
      paddingHorizontal: s(20),
      backgroundColor: Colors?.backBtnBackground,
      marginTop: vs(20),
    },
    fansChartHeaderContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    fansChartTitleText: {
      color: Colors.font,
      fontSize: ms(18),
      fontFamily: FONTS.helveticaNowDisplayExtraBold,
    },
    fansIncreasedPercentage: {
      color: Colors.celticBlue,
      fontSize: ms(16),
      fontFamily: FONTS.helveticaNowDisplayBold,
    },
    fansChartFiltersContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
    fansChartBelowFilterText: {
      color: Colors.notFocused,
      fontSize: ms(14),
      fontFamily: FONTS.helveticaNowDisplayMedium,
    },
    fansTitleText: {
      color: Colors.font,
      fontSize: ms(22),
      fontFamily: FONTS.helveticaNowDisplayExtraBold,
    },
    fansContainer: {
      paddingHorizontal: s(15),
      marginTop: vs(30),
    },
    tableContainer: {
      marginTop: vs(10),
      paddingHorizontal: s(20),
    },
    rowContainer: {
      marginTop: vs(10),
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    rowTitleText: {
      color: Colors.notFocused,
      fontSize: ms(14),
      fontFamily: FONTS.helveticaNowDisplayMedium,
    },
    rowValueText: {
      color: Colors.font,
      fontSize: ms(14),
      fontFamily: FONTS.helveticaNowDisplayBold,
    },
    tableDivider: {
      marginTop: vs(15),
      width: '100%',
      height: vs(0.5),
      backgroundColor: Colors.notFocused,
    },
    aboutDescriptionContainer: {
      marginTop: vs(20),
    },
    aboutContainer: {
      paddingHorizontal: s(15),
      marginTop: vs(20),
    },
    aboutTitleText: {
      color: Colors.font,
      fontSize: ms(22),
      fontFamily: FONTS.helveticaNowDisplayExtraBold,
    },
    aboutDescriptionText: {
      color: Colors.font,
      fontSize: ms(13),
      textAlign: 'justify',
      lineHeight: vs(15),
      fontFamily: FONTS.helveticaNowDisplayMedium,
    },
    readMore: {
      color: Colors.celticBlue,
      fontSize: ms(16),
      fontWeight: '600',
    },
    readMoreBtn: {
      marginTop: vs(5),
      alignSelf: 'flex-start',
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
  });
};
