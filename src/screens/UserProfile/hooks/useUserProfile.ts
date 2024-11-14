import {useRef, useState} from 'react';
import {useTheme} from '../../../contexts';
import {getCurrentTheme} from '../../../theme';
import {
  ALL_TIME_STOCKS_DATA,
  ONE_DAY_STOCKS_DATA,
  ONE_MONTH_STOCKS_DATA,
  ONE_WEEK_STOCKS_DATA,
  ONE_YEAR_STOCKS_DATA,
  SIX_MONTH_STOCKS_DATA,
  TODAY_STOCKS_DATA,
} from '../../../constants';
import {formatPrice} from 'react-native-wagmi-charts';

const useUserProfile = () => {
  const {theme} = useTheme();
  const Colors = getCurrentTheme(theme || 'dark');
  const [selectedSectionName, setSelectedSectionName] = useState('Overview');
  const showsListSheetRef = useRef(null);
  const brandGrowthSheetRef = useRef(null);
  const upcomingFeatureRef = useRef(null);
  const [viewsData, setViewsData] = useState(ONE_DAY_STOCKS_DATA);
  const [viewsSelectedFilter, setViewsSelectedFilter] = useState('1D');

  const handleUpcomingFeature = () => {
    upcomingFeatureRef.current?.open();
  };

  const handleViewsFilterPress = (filterName: string) => {
    setViewsSelectedFilter(filterName);
    if (filterName === 'All') {
      setViewsData(ALL_TIME_STOCKS_DATA);
    } else if (filterName === '1Y') {
      setViewsData(ONE_YEAR_STOCKS_DATA);
    } else if (filterName === '6M') {
      setViewsData(SIX_MONTH_STOCKS_DATA);
    } else if (filterName === '1M') {
      setViewsData(ONE_MONTH_STOCKS_DATA);
    } else if (filterName === '1W') {
      setViewsData(ONE_WEEK_STOCKS_DATA);
    } else if (filterName === '1D') {
      setViewsData(ONE_DAY_STOCKS_DATA);
    }
  };

  const formatValue = ({value}) => {
    'worklet';
    const valToPrint = value
      ? value
      : viewsData[viewsData.length - 1].value.toFixed(2);

    return formatPrice({value: valToPrint.toString()});
  };

  const handleSectionSelect = (sectionName: string) => {
    setSelectedSectionName(sectionName);
  };

  return {
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
  };
};

export default useUserProfile;
