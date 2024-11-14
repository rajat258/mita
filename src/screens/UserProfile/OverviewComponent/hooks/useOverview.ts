import {useEffect, useRef, useState} from 'react';
import {
  ALL_TIME_STOCKS_DATA,
  ONE_DAY_STOCKS_DATA,
  ONE_MONTH_STOCKS_DATA,
  ONE_WEEK_STOCKS_DATA,
  ONE_YEAR_STOCKS_DATA,
  SIX_MONTH_STOCKS_DATA,
} from '../../../../constants';
import {useTheme} from '../../../../contexts';
import {getCurrentTheme} from '../../../../theme';

const useOverview = ref => {
  const {theme} = useTheme();
  const Colors = getCurrentTheme(theme || 'dark');

  const [showFullAboutText, setShowFullAboutText] = useState(false);
  const [isShows, setIsShows] = useState(true);
  const [fansSelectedFilter, setFansSelectedFilter] = useState('LTM');
  const upcomingFeatureRef = useRef(null);
  const [topSongsOnSpotify, setTopSongsOnSpotify] = useState([
    {
      songName: 'Just A Name',
      singer: 'Lil Girly',
      streamCount: '350M',
      type: 'Streams',
    },
    {
      songName: 'Love Me',
      singer: 'Lil Girly ft. Lil Jay',
      streamCount: '12M',
      type: 'Streams',
    },
    {
      songName: 'Oh Boy',
      singer: 'Lil Girly',
      streamCount: '4M',
      type: 'Streams',
    },
  ]);
  const [followersData, setFollowersData] = useState([
    {
      platform: 'Tiktok',
      progress: 70,
      followers: '800K',
    },
    {
      platform: 'Instagram',
      progress: 30,
      followers: '150K',
    },
    {
      platform: 'Other',
      progress: 15,
      followers: '50K',
    },
  ]);

  const [fansGrowthPercentage, setFansGrowthPercentage] = useState('30%');
  const [fansData, setFansData] = useState([
    {year: new Date('2023'), value: 812250},
    {year: new Date('2023'), value: 855000},
    {year: new Date('2023'), value: 950000},
    {year: new Date('2023'), value: 1000000},
  ]);

  const [showsData, setShowsData] = useState([
    {
      showName: "New Year's Eve",
      showDate: new Date('2024-03-07T00:00:00.000Z'),
      showVenue: 'Dubai, UAE',
      showType: 'Supporting Act',
    },
    {
      showName: 'Tomorrowland Winter',
      showDate: new Date('2024-03-02T00:00:00.000Z'),
      showVenue: 'Courchevel, France',
      showType: 'Supporting Act',
    },
    {
      showName: 'The Brooklyn Mirage',
      showDate: new Date('2024-02-28T00:00:00.000Z'),
      showVenue: 'New York, USA',
      showType: 'Headlining Act',
    },
    {
      showName: 'Razzmatazz Opening Party',
      showDate: new Date('2024-02-20T00:00:00.000Z'),
      showVenue: 'Barcelona, Spain',
      showType: 'Supporting Act',
    },
    {
      showName: 'Exchange LA',
      showDate: new Date('2024-02-15T00:00:00.000Z'),
      showVenue: 'Los Angeles, USA',
      showType: 'Headlining Act',
    },
    {
      showName: 'Brunch In The Park',
      showDate: new Date('2024-02-14T00:00:00.000Z'),
      showVenue: 'San Francisco, USA',
      showType: 'Headlining Act',
    },
    {
      showName: 'White Party',
      showDate: new Date('2024-02-07T00:00:00.000Z'),
      showVenue: 'Boston, USA',
      showType: 'Headlining Act',
    },
    {
      showName: 'Belly Up',
      showDate: new Date('2024-01-22T00:00:00.000Z'),
      showVenue: 'Aspen, USA',
      showType: 'Supporting Act',
    },
    {
      showName: 'Club Space',
      showDate: new Date('2024-01-17T00:00:00.000Z'),
      showVenue: 'Miami, USA',
      showType: 'Headlining Act',
    },
  ]);

  const [releasesData, setReleasesData] = useState([
    {
      songName: 'In The Morning',
      releaseDate: new Date('2024-12-15T00:00:00.000Z'),
      artistName: 'Jay-X ft. Lil Girly',
      songType: 'Single',
      role: 'Featured Artist',
    },
    {
      songName: 'Nights',
      releaseDate: new Date('2024-11-02T00:00:00.000Z'),
      artistName: 'Lil Girly',
      songType: 'Album',
      role: 'Main Artist',
    },
    {
      songName: 'Love It',
      releaseDate: new Date('2024-10-10T00:00:00.000Z'),
      artistName: 'Lil Rapper ft. Lil Girly',
      songType: 'Single',
      role: 'Featured Artist',
    },
    {
      songName: 'Nights',
      releaseDate: new Date('2024-09-20T00:00:00.000Z'),
      artistName: 'Lil Girly',
      songType: 'Single',
      role: 'Main Artist',
    },
    {
      songName: "I Don't Care",
      releaseDate: new Date('2024-08-30T00:00:00.000Z'),
      artistName: 'Lil Girly',
      songType: 'Single',
      role: 'Main Artist',
    },
    {
      songName: 'Yesterday',
      releaseDate: new Date('2024-08-07T00:00:00.000Z'),
      artistName: 'Lil Girly',
      songType: 'Single',
      role: 'Main Artist',
    },
    {
      songName: 'Sunshine',
      releaseDate: new Date('2024-07-15T00:00:00.000Z'),
      artistName: 'Gavs x Nats ft. Lil Girly',
      songType: 'Single',
      role: 'Featured Artist',
    },
    {
      songName: 'Days In The Sun',
      releaseDate: new Date('2024-06-01T00:00:00.000Z'),
      artistName: 'Lil Girly',
      songType: 'Single',
      role: 'Main Artist',
    },
  ]);

  const [showsLabelsStatuses, setShowsLabelsStatuses] = useState([
    {
      label1: 'Performed',
      label2: 'Total Shows',
      color: Colors.profit,
      label1Count: 8,
      label2Count: 28,
    },
    {
      label1: 'Upcoming',
      label2: 'Shows Last Year',
      color: Colors.white,
      label1Count: 18,
      label2Count: 10,
    },
    {
      label1: 'Cancelled',
      label2: 'Growth (YoY)',
      color: Colors.red,
      label1Count: 2,
      label2Count: '180%',
    },
  ]);

  // const {data} = LineChart.useChart();
  // console.log('Before', data);
  // const precision = 2;

  // Use the usePrice hook
  // const {value, formatted} = LineChart.usePrice({format, precision});
  // console.log('After', );

  const handleReadMore = () => {
    setShowFullAboutText(!showFullAboutText);
  };

  const handleFansChartFilterPress = (filterName: string) => {
    setFansSelectedFilter(filterName);
    if (filterName === 'All') {
      setFansGrowthPercentage('842%');
      setFansData([
        {year: new Date('2020'), value: 106172.800303104},
        {year: new Date('2020'), value: 117969.77811456},
        {year: new Date('2020'), value: 131077.5312384},
        {year: new Date('2020'), value: 145641.701376},
        {year: new Date('2021'), value: 161824.11264},
        {year: new Date('2021'), value: 202280.1408},
        {year: new Date('2021'), value: 252850.176},
        {year: new Date('2021'), value: 316062.72},
        {year: new Date('2022'), value: 395078.4},
        {year: new Date('2022'), value: 493848},
        {year: new Date('2022'), value: 617310},
        {year: new Date('2022'), value: 771637.5},
        {year: new Date('2023'), value: 812250},
        {year: new Date('2023'), value: 855000},
        {year: new Date('2023'), value: 950000},
        {year: new Date('2023'), value: 1000000},
      ]);
    } else if (filterName === '3Y') {
      setFansGrowthPercentage('587%');
      setFansData([
        {year: new Date('2021'), value: 161824.11264},
        {year: new Date('2021'), value: 202280.1408},
        {year: new Date('2021'), value: 252850.176},
        {year: new Date('2021'), value: 316062.72},
        {year: new Date('2022'), value: 395078.4},
        {year: new Date('2022'), value: 493848},
        {year: new Date('2022'), value: 617310},
        {year: new Date('2022'), value: 771637.5},
        {year: new Date('2023'), value: 812250},
        {year: new Date('2023'), value: 855000},
        {year: new Date('2023'), value: 950000},
        {year: new Date('2023'), value: 1000000},
      ]);
    } else if (filterName === '2Y') {
      setFansGrowthPercentage('216%');
      setFansData([
        {year: new Date('2022'), value: 395078.4},
        {year: new Date('2022'), value: 493848},
        {year: new Date('2022'), value: 617310},
        {year: new Date('2022'), value: 771637.5},
        {year: new Date('2023'), value: 812250},
        {year: new Date('2023'), value: 855000},
        {year: new Date('2023'), value: 950000},
        {year: new Date('2023'), value: 1000000},
      ]);
    } else if (filterName === 'LTM') {
      setFansGrowthPercentage('30%');
      setFansData([
        {year: new Date('2023'), value: 812250},
        {year: new Date('2023'), value: 855000},
        {year: new Date('2023'), value: 950000},
        {year: new Date('2023'), value: 1000000},
      ]);
    }
  };

  const handleShowsViewAllPress = () => {
    ref.current?.open();
  };

  const handleShowsBottomSheetClosePress = () => {
    ref.current?.close();
  };

  const handleUpcomingFeature = () => {
    upcomingFeatureRef.current?.open();
  };

  return {
    Colors,
    fansData,
    fansGrowthPercentage,
    fansSelectedFilter,
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
  };
};

export default useOverview;
