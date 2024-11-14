import React from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {BarChart} from 'react-native-gifted-charts';
import {ms, s, vs} from 'react-native-size-matters';
import {ICONS} from '../../../assets';
import {BottomSheet} from '../../../components';
import {FONTS} from '../../../theme';
import {useFinancials} from './hooks';

const FinancialsComponent = React.forwardRef(({}, ref) => {
  const {
    Colors,
    brandGrowthSelectedYear,
    brandGrowthData,
    brandGrowthBarChartData,
    offerSummaryChartLabels,
    handleShowsViewAllPress,
    handleSelectedYearChange,
  } = useFinancials(ref);
  const styles = screenStyles(Colors);

  return (
    <>
      <View style={styles.brandGrowthContainer}>
        <View style={styles.brandGrowthHeader}>
          <View style={styles.titleInfoContainer}>
            <Text allowFontScaling={false} style={styles.brandGrowthTitleText}>
              Brand Growth
            </Text>

            <TouchableOpacity style={styles.infoContainer}>
              <Image source={ICONS.info} style={styles.infoIcon} />
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

        <FlatList
          data={brandGrowthData}
          horizontal
          contentContainerStyle={styles.brandGrowthListContainer}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => {
            return (
              <View style={styles.brandGrowthListItemContainer}>
                <View>
                  <Image
                    source={
                      item.isLess ? ICONS.caretArrowDown : ICONS.caretArrowUp
                    }
                    style={[
                      styles.caretArrowIcon,
                      item.isLess && {tintColor: Colors.red},
                    ]}
                  />
                  <Text
                    allowFontScaling={false}
                    style={styles.amountText}>{`${item.amount}`}</Text>
                  <Text
                    allowFontScaling={false}
                    style={styles.amountForTitleText}>{`${item.title}`}</Text>
                  <Text
                    allowFontScaling={false}
                    style={styles.yearText}>{`${item.year}`}</Text>
                </View>
              </View>
            );
          }}
        />
      </View>

      <View style={styles.offerSummaryContainer}>
        <View style={styles.titleInfoContainer}>
          <Text allowFontScaling={false} style={styles.brandGrowthTitleText}>
            Offer Summary
          </Text>

          <TouchableOpacity style={styles.infoContainer}>
            <Image source={ICONS.info} style={styles.infoIcon} />
          </TouchableOpacity>
        </View>

        <View style={styles.chartDescriptionTextContainer}>
          <Text allowFontScaling={false} style={styles.chartDescriptionText}>
            The figures below represent the total % of the brand sold and its
            breakdown by revenue sources.
          </Text>
        </View>

        <View style={styles.offerSummaryChartRow}>
          <View style={styles.offerSummaryChartContainer}>
            <View style={styles.offerSummaryPercentageContainer}>
              <Text
                allowFontScaling={false}
                style={styles.offerSummaryPercentage}>
                10%
              </Text>
            </View>
          </View>

          <FlatList
            data={offerSummaryChartLabels}
            contentContainerStyle={styles.offerSummaryChartLabelContainer}
            renderItem={({item}) => {
              return (
                <View style={styles.progressRow}>
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
                  <View style={styles.progressLabelContainer}>
                    <Text
                      allowFontScaling={false}
                      style={styles.progressLabel}>{`${item.label}`}</Text>
                  </View>
                </View>
              );
            }}
          />
        </View>

        <View style={styles.tableContainer}>
          <View style={styles.rowContainer}>
            <Text allowFontScaling={false} style={styles.rowTitleText}>
              Total % Offered
            </Text>
            <Text allowFontScaling={false} style={styles.rowValueText}>
              10%
            </Text>
          </View>
          <View style={styles.tableDivider} />
          <View style={styles.rowContainer}>
            <Text allowFontScaling={false} style={styles.rowTitleText}>
              Brand Value Offered
            </Text>
            <Text allowFontScaling={false} style={styles.rowValueText}>
              $500,000
            </Text>
          </View>
          <View style={styles.tableDivider} />
          <View style={styles.rowContainer}>
            <Text allowFontScaling={false} style={styles.rowTitleText}>
              Total Brand Value
            </Text>
            <Text allowFontScaling={false} style={styles.rowValueText}>
              $5,000,000
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.stockStatsContainer}>
        <View style={styles.titleInfoContainer}>
          <Text allowFontScaling={false} style={styles.brandGrowthTitleText}>
            Stock Stats
          </Text>

          <TouchableOpacity style={styles.infoContainer}>
            <Image source={ICONS.info} style={styles.infoIcon} />
          </TouchableOpacity>
        </View>

        <View style={styles.tableContainer}>
          <View style={styles.rowContainer}>
            <Text allowFontScaling={false} style={styles.rowTitleText}>
              Market Cap.
            </Text>
            <Text allowFontScaling={false} style={styles.rowValueText}>
              $7,500,000
            </Text>
          </View>
          <View style={styles.tableDivider} />
          <View style={styles.rowContainer}>
            <Text allowFontScaling={false} style={styles.rowTitleText}>
              Number Of Shares Issued
            </Text>
            <Text allowFontScaling={false} style={styles.rowValueText}>
              500,000
            </Text>
          </View>
          <View style={styles.tableDivider} />
          <View style={styles.rowContainer}>
            <Text allowFontScaling={false} style={styles.rowTitleText}>
              Multiple
            </Text>
            <Text allowFontScaling={false} style={styles.rowValueText}>
              25X
            </Text>
          </View>
          <View style={styles.tableDivider} />
          <View style={styles.rowContainer}>
            <Text allowFontScaling={false} style={styles.rowTitleText}>
              Dividend Yield
            </Text>
            <Text allowFontScaling={false} style={styles.rowValueText}>
              -
            </Text>
          </View>
          <View style={styles.tableDivider} />
          <View style={styles.rowContainer}>
            <Text allowFontScaling={false} style={styles.rowTitleText}>
              Trading Volume
            </Text>
            <Text allowFontScaling={false} style={styles.rowValueText}>
              $85,000
            </Text>
          </View>
        </View>
      </View>

      <TouchableOpacity style={styles.legalDocumentContainer}>
        <View>
          <View style={styles.documentIconContainer}>
            <Image source={ICONS.document} style={styles.documentIcon} />
          </View>
        </View>
        <View style={styles.documentLabelContainer}>
          <Text allowFontScaling={false} style={styles.legalText}>
            Legal -
          </Text>
          <Text allowFontScaling={false} style={styles.secDocumentationText}>
            SEC Documentation
          </Text>
        </View>
        <View>
          <View style={styles.goBtnContainer}>
            <Image source={ICONS.rightArrow} style={styles.goBtnIcon} />
          </View>
        </View>
      </TouchableOpacity>
      <BottomSheet ref={ref} height={vs(600)} isCloseEnabled>
        <ScrollView
          style={styles.bottomSheetMainScrollView}
          showsVerticalScrollIndicator={false}>
          <View style={styles.brandGrowthBottomSheetContainer}>
            <View style={styles.titleInfoContainer}>
              <Text
                allowFontScaling={false}
                style={styles.brandGrowthTitleText}>
                Brand Growth
              </Text>

              <TouchableOpacity style={styles.infoContainer}>
                <Image source={ICONS.info} style={styles.infoIcon} />
              </TouchableOpacity>
            </View>

            <View style={styles.annuallyLabelContainer}>
              <Text allowFontScaling={false} style={styles.annuallyLabel}>
                Annually
              </Text>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.brandGrowthChartsContainer}>
                {brandGrowthBarChartData.map((group, index) => {
                  const isSelected = group.year === brandGrowthSelectedYear;
                  return (
                    <View style={styles.brandGrowthGraphContainer} key={index}>
                      <BarChart
                        key={index}
                        hideYAxisText
                        hideRules
                        disablePress
                        disableScroll
                        hideAxesAndRules
                        data={group.data}
                        height={vs(250)}
                        width={s(60)}
                        spacing={5}
                        barBorderRadius={ms(5)}
                        barWidth={s(15)}
                        // backgroundColor={'green'}
                        // xAxisLength={200}
                        // xAxisLabelTextStyle={{
                        //   width: '250%',
                        //   color: 'red',
                        //   textAlign: 'center',
                        //   marginLeft: '50%',
                        // }}
                      />
                      <TouchableOpacity
                        style={[
                          styles.brandGrowthGraphLabelContainer,
                          isSelected && styles.selectedYearContainer,
                        ]}
                        onPress={() => handleSelectedYearChange(group.year)}>
                        <Text
                          allowFontScaling={false}
                          style={[
                            styles.brandGrowthGraphLabel,
                            isSelected && styles.selectedYearText,
                          ]}>
                          {group.year}
                        </Text>
                      </TouchableOpacity>
                    </View>
                  );
                })}
              </View>
            </ScrollView>

            <FlatList
              scrollEnabled={false}
              data={brandGrowthData}
              renderItem={({item, index}) => {
                return (
                  <View>
                    <View style={styles.brandGrowthTableRow}>
                      <View style={styles.brandGrowthRowContainer}>
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
                              style={styles.commonTextStyleUnFocused}>
                              {`${item.title}`}
                            </Text>
                          </View>
                          <View>
                            <Text
                              allowFontScaling={false}
                              style={
                                styles.commonTextStyleFocused
                              }>{`${item.amount}`}</Text>
                            <Text
                              allowFontScaling={false}
                              style={
                                styles.growthPercentageText
                              }>{`${item.percentage}`}</Text>
                          </View>
                        </View>
                        {index !== brandGrowthData.length - 1 && (
                          <View style={styles.brandGrowthTableDivider} />
                        )}
                      </View>
                    </View>
                  </View>
                );
              }}
            />
          </View>
        </ScrollView>
      </BottomSheet>
    </>
  );
});

export default FinancialsComponent;

const screenStyles = (Colors: any) => {
  return StyleSheet.create({
    brandGrowthChartsContainer: {
      flex: 1,
      flexDirection: 'row',
    },
    bottomSheetMainScrollView: {
      marginBottom: vs(20),
    },
    selectedYearText: {
      color: Colors.white,
    },
    selectedYearContainer: {
      backgroundColor: Colors.blackGreyShaded,
    },
    growthPercentageText: {
      color: Colors.profit,
      fontSize: ms(12),
      textAlign: 'right',
      fontFamily: FONTS.helveticaNowDisplayBold,
    },
    performedBullet: {
      fontSize: ms(20),
      marginRight: s(5),
    },
    brandGrowthTableRow: {
      // paddingHorizontal: s(5),
      paddingLeft: s(10),
      flex: 1,
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    brandGrowthRowContainer: {
      width: '95%',
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
    brandGrowthTableDivider: {
      width: '100%',
      height: vs(0.5),
      backgroundColor: Colors.notFocused,
    },
    annuallyLabel: {
      color: Colors.font,
      fontSize: ms(14),
      fontFamily: FONTS.helveticaNowDisplayExtraBold,
    },
    annuallyLabelContainer: {
      width: s(80),
      marginTop: vs(20),
      backgroundColor: Colors.blackGreyShaded,
      height: ms(30),
      paddingHorizontal: s(5),
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: ms(50),
    },
    brandGrowthBottomSheetContainer: {
      flex: 1,
      paddingHorizontal: s(15),
    },
    brandGrowthGraphLabel: {
      color: Colors.notFocused,
      fontSize: ms(12),
      fontFamily: FONTS.helveticaNowDisplayMedium,
    },
    brandGrowthGraphLabelContainer: {
      width: '60%',
      justifyContent: 'center',
      borderRadius: ms(10),
      paddingVertical: s(5),
      alignItems: 'center',
      alignSelf: 'center',
    },
    brandGrowthGraphContainer: {
      width: s(80),
      alignItems: 'center',
      marginLeft: s(20),
      marginBottom: vs(15),
    },
    legalDocumentContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: s(15),
      marginVertical: vs(30),
    },
    documentIconContainer: {
      backgroundColor: Colors.backBtnBackground,
      justifyContent: 'center',
      alignItems: 'center',
      height: ms(50),
      width: ms(50),
      borderRadius: ms(40),
    },
    documentIcon: {
      height: ms(20),
      width: ms(20),
    },
    documentLabelContainer: {
      flex: 1,
      flexDirection: 'row',
      marginLeft: s(10),
    },
    legalText: {
      color: Colors.celticBlue,
      fontSize: ms(12),
      fontFamily: FONTS.helveticaNowDisplayExtraBold,
    },
    secDocumentationText: {
      color: Colors.celticBlue,
      fontSize: ms(12),
      fontFamily: FONTS.helveticaNowDisplay,
    },
    goBtnContainer: {
      backgroundColor: Colors.backBtnBackground,
      justifyContent: 'center',
      alignItems: 'center',
      height: ms(30),
      width: ms(30),
      borderRadius: ms(40),
    },
    goBtnIcon: {
      height: ms(15),
      width: ms(15),
      tintColor: Colors.white,
    },
    stockStatsContainer: {
      paddingHorizontal: s(15),
      marginTop: vs(30),
    },
    offerSummaryContainer: {
      paddingHorizontal: s(15),
      marginTop: vs(30),
    },
    tableContainer: {
      marginTop: vs(20),
      paddingHorizontal: s(10),
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
      fontFamily: FONTS.helveticaNowDisplayMedium,
    },
    tableDivider: {
      marginTop: vs(15),
      width: '100%',
      height: vs(0.5),
      backgroundColor: Colors.notFocused,
    },
    chartDescriptionTextContainer: {
      marginTop: vs(20),
    },
    chartDescriptionText: {
      color: Colors.font,
      fontSize: ms(12),

      fontFamily: FONTS.helveticaNowDisplay,
      lineHeight: vs(15),
    },
    offerSummaryChartRow: {
      flexDirection: 'row',
      marginTop: vs(30),
      width: '100%',
      alignItems: 'center',
    },
    offerSummaryChartContainer: {
      width: '30%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    offerSummaryPercentageContainer: {
      backgroundColor: Colors.darkJungleGreen,
      height: ms(80),
      width: ms(80),
      borderRadius: ms(100),
      justifyContent: 'center',
      alignItems: 'center',
    },
    offerSummaryPercentage: {
      color: Colors.celticBlue,
      fontSize: ms(24),
      fontFamily: FONTS.helveticaNowDisplayBold,
    },
    offerSummaryChartLabelContainer: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    progressBarContainer: {
      width: '75%',
    },
    progressLabelContainer: {
      width: '25%',
      marginLeft: s(10),
      alignSelf: 'center',
    },
    progressLabel: {
      color: Colors.notFocused,
      fontSize: ms(14),
      fontFamily: FONTS.helveticaNowDisplayMedium,
    },
    progressRow: {
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: vs(5),
    },
    progressInnerContainer: {
      height: vs(7),
      backgroundColor: Colors.white,
      borderRadius: ms(2),
    },
    progressBar: {
      height: vs(10),
      width: s(150),
      marginLeft: s(10),
      alignSelf: 'center',
      borderRadius: ms(4),
      backgroundColor: Colors.blackGreyShaded,
    },
    brandGrowthContainer: {
      paddingHorizontal: s(15),
      marginTop: vs(30),
    },
    brandGrowthListContainer: {
      marginTop: vs(20),
    },
    yearText: {
      color: Colors.notFocused,
      fontSize: ms(12),
      fontFamily: FONTS.helveticaNowDisplayMedium,
    },
    amountForTitleText: {
      color: Colors.notFocused,
      fontSize: ms(12),
      fontFamily: FONTS.helveticaNowDisplayMedium,
    },
    amountText: {
      color: Colors.white,
      fontSize: ms(24),
      fontFamily: FONTS.helveticaNowDisplayBold,
    },
    caretArrowIcon: {
      height: vs(20),
      width: s(20),
      tintColor: Colors.profit,
    },
    brandGrowthListItemContainer: {
      height: vs(110),
      width: s(110),
      marginHorizontal: s(10),
      backgroundColor: Colors.backBtnBackground,
      borderRadius: ms(20),
      justifyContent: 'center',
      alignItems: 'center',
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
    brandGrowthHeader: {
      justifyContent: 'space-between',
      flexDirection: 'row',
      alignItems: 'center',
    },
    infoIcon: {
      height: ms(15),
      width: ms(15),
      tintColor: Colors.notFocused,
    },
    infoContainer: {
      marginLeft: s(8),
      marginTop: vs(3),
    },
    titleInfoContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    brandGrowthTitleText: {
      color: Colors.font,
      fontSize: ms(20),
      fontFamily: FONTS.helveticaNowDisplayExtraBold,
    },
    viewAllBtn: {
      backgroundColor: Colors.backBtnBackground,
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
  });
};
