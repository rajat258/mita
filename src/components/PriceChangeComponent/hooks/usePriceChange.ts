import {useState} from 'react';
import {runOnJS, useDerivedValue} from 'react-native-reanimated';
import {formatPrice, LineChart} from 'react-native-wagmi-charts';
import {useTheme} from '../../../contexts';
import {getCurrentTheme} from '../../../theme';

const usePriceChange = () => {
  const {theme} = useTheme();
  const Colors = getCurrentTheme(theme || 'dark');
  const [sharePrice, setSharePrice] = useState();

  const {currentIndex, data} = LineChart.useChart();
  //   console.log('DATA', data);
  const [isNegative, setIsNegative] = useState(false);

  const formatValue = ({value}) => {
    'worklet';
    const valToPrint = value ? value : data[data.length - 1].value.toFixed(2);
    return formatPrice({value: valToPrint.toString()});
  };

  //   const price1 = LineChart.usePrice({format: formatValue});

  const difference = useDerivedValue(() => {
    let price = 0;
    let price2 = 0;
    let percentage = 0;
    const oneStepLess = currentIndex.value - 1;

    if (currentIndex.value < data?.length && currentIndex.value !== -1) {
      // console.log('Current index', currentIndex.value, data.length - 1);

      if (oneStepLess < 0 && data?.length !== 2) {
        return '0.00 (0%)';
      }
      price = data[Math.min(currentIndex.value, data.length - 1)]?.value;
      price2 = data[Math.min(currentIndex.value - 1, data.length - 2)]?.value;
      percentage = (((price - price2) / price2) * 100).toFixed(2);
      //   console.log('Inner Difference', (price - price2).toFixed(2).toString());
      runOnJS(setSharePrice)(price.toFixed(2).toString());
      if (percentage < 0) {
        runOnJS(setIsNegative)(true);
      } else if (percentage > 0) {
        runOnJS(setIsNegative)(false);
      }
      if (data?.length === 2 && currentIndex.value === 0) {
        return '0.00 (0%)';
      } else {
        return (
          '$ ' +
          (price - price2).toFixed(2).toString() +
          ' (' +
          percentage.toString() +
          '%)'
        );
      }
    } else {
      price = data[Math.min(data.length - 1)]?.value;
      price2 = data[Math.min(data.length - 2)]?.value;
      percentage = (((price - price2) / price2) * 100).toFixed(2);
      runOnJS(setSharePrice)(price.toFixed(2).toString());
      if (percentage < 0) {
        runOnJS(setIsNegative)(true);
      } else if (percentage > 0) {
        runOnJS(setIsNegative)(false);
      }
      return (
        '$ ' +
        (price - price2).toFixed(2).toString() +
        ' (' +
        percentage.toString() +
        '%)'
      );
    }
  }, [currentIndex, data]);

  return {
    sharePrice,
    Colors,
    isNegative,
    difference,
    formatValue,
  };
};

export default usePriceChange;
