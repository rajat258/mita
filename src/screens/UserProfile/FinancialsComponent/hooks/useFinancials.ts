import {useState} from 'react';
import {useTheme} from '../../../../contexts';
import {getCurrentTheme} from '../../../../theme';

const useFinancials = ref => {
  const {theme} = useTheme();
  const Colors = getCurrentTheme(theme || 'dark');
  const [brandGrowthSelectedYear, setBrandGrowthSelectedYear] =
    useState('2023');
  const [brandGrowthData, setBrandGrowthData] = useState([
    {
      amount: '500K',
      title: 'Revenues',
      year: 2023,
      isLess: false,
      percentage: '70%',
      color: Colors.profit,
    },
    {
      amount: '200K',
      title: 'Costs',
      year: 2023,
      isLess: true,
      percentage: '100%',
      color: Colors.red,
    },
    {
      amount: '300K',
      title: 'Profit',
      year: 2023,
      isLess: false,
      percentage: '55%',
      color: Colors.celticBlue,
    },
  ]);

  const [offerSummaryChartLabels, setOfferSummaryChartLabels] = useState([
    {
      label: 'Shows',
      progress: 100,
    },
    {
      label: 'Music',
      progress: 30,
    },
    {
      label: 'Merch',
      progress: 70,
    },
  ]);

  const brandGrowthBarChartData = [
    {
      year: '2020',
      data: [
        {
          value: 108932,
          frontColor:
            brandGrowthSelectedYear === '2020' ? '#00ff00' : '#a9a9a9',
        },
        {
          value: 47619,
          frontColor:
            brandGrowthSelectedYear === '2020' ? '#ff0000' : '#808080',
        },
        {
          value: 61313,
          frontColor:
            brandGrowthSelectedYear === '2020' ? '#add8e6' : '#696969',
        },
      ],
    },
    {
      year: '2021',
      data: [
        {
          value: 196078,
          frontColor:
            brandGrowthSelectedYear === '2021' ? '#00ff00' : '#a9a9a9',
        },
        {
          value: 71429,
          frontColor:
            brandGrowthSelectedYear === '2021' ? '#ff0000' : '#808080',
        },
        {
          value: 124650,
          frontColor:
            brandGrowthSelectedYear === '2021' ? '#add8e6' : '#696969',
        },
      ],
    },
    {
      year: '2022',
      data: [
        {
          value: 294118,
          frontColor:
            brandGrowthSelectedYear === '2022' ? '#00ff00' : '#a9a9a9',
        },
        {
          value: 100000,
          frontColor:
            brandGrowthSelectedYear === '2022' ? '#ff0000' : '#808080',
        },
        {
          value: 194118,
          frontColor:
            brandGrowthSelectedYear === '2022' ? '#add8e6' : '#696969',
        },
      ],
    },
    {
      year: '2023',
      data: [
        {
          value: 500000,
          frontColor:
            brandGrowthSelectedYear === '2023' ? '#00ff00' : '#a9a9a9',
        },
        {
          value: 200000,
          frontColor:
            brandGrowthSelectedYear === '2023' ? '#ff0000' : '#808080',
        },
        {
          value: 300000,
          frontColor:
            brandGrowthSelectedYear === '2023' ? '#add8e6' : '#696969',
        },
      ],
    },
  ];

  const handleShowsViewAllPress = () => {
    ref.current?.open();
  };

  const handleSelectedYearChange = (selectedYear: string) => {
    setBrandGrowthSelectedYear(selectedYear);
    if (selectedYear === '2023') {
      setBrandGrowthData([
        {
          amount: '500K',
          title: 'Revenues',
          year: 2023,
          isLess: false,
          percentage: '70%',
          color: Colors.profit,
        },
        {
          amount: '200K',
          title: 'Costs',
          year: 2023,
          isLess: true,
          percentage: '100%',
          color: Colors.red,
        },
        {
          amount: '300K',
          title: 'Profit',
          year: 2023,
          isLess: false,
          percentage: '55%',
          color: Colors.celticBlue,
        },
      ]);
    } else if (selectedYear === '2022') {
      setBrandGrowthData([
        {
          amount: '294K',
          title: 'Revenues',
          year: 2023,
          isLess: false,
          percentage: '50%',
          color: Colors.profit,
        },
        {
          amount: '100K',
          title: 'Costs',
          year: 2023,
          isLess: true,
          percentage: '40%',
          color: Colors.red,
        },
        {
          amount: '194K',
          title: 'Profit',
          year: 2023,
          isLess: false,
          percentage: '56%',
          color: Colors.celticBlue,
        },
      ]);
    } else if (selectedYear === '2021') {
      setBrandGrowthData([
        {
          amount: '196K',
          title: 'Revenues',
          year: 2023,
          isLess: false,
          percentage: '80%',
          color: Colors.profit,
        },
        {
          amount: '71K',
          title: 'Costs',
          year: 2023,
          isLess: true,
          percentage: '50%',
          color: Colors.red,
        },
        {
          amount: '125K',
          title: 'Profit',
          year: 2023,
          isLess: false,
          percentage: '103%',
          color: Colors.celticBlue,
        },
      ]);
    } else if (selectedYear === '2020') {
      setBrandGrowthData([
        {
          amount: '109K',
          title: 'Revenues',
          year: 2023,
          isLess: false,
          percentage: '120%',
          color: Colors.profit,
        },
        {
          amount: '48K',
          title: 'Costs',
          year: 2023,
          isLess: true,
          percentage: '200%',
          color: Colors.red,
        },
        {
          amount: '61K',
          title: 'Profit',
          year: 2023,
          isLess: false,
          percentage: '107%',
          color: Colors.celticBlue,
        },
      ]);
    }
  };

  return {
    Colors,
    brandGrowthSelectedYear,
    brandGrowthData,
    brandGrowthBarChartData,
    offerSummaryChartLabels,
    handleShowsViewAllPress,
    handleSelectedYearChange,
  };
};

export default useFinancials;
