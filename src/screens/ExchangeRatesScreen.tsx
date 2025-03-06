import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/AppNavigator';

type Props = NativeStackScreenProps<RootStackParamList, 'ExchangeRates'>;

const ExchangeRatesScreen: React.FC<Props> = () => {
  const [rates, setRates] = useState<{currency: string; rate: number}[]>([]);

  useEffect(() => {
    // Mock API call
    setTimeout(() => {
      setRates([
        {currency: 'USD', rate: 1.0},
        {currency: 'EUR', rate: 0.92},
        {currency: 'GBP', rate: 0.78},
        {currency: 'JPY', rate: 110.5},
      ]);
    }, 1000);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Exchange Rates</Text>
      <FlatList
        data={rates}
        keyExtractor={item => item.currency}
        renderItem={({item}) => (
          <View style={styles.rateItem}>
            <Text style={styles.currency}>{item.currency}</Text>
            <Text style={styles.rate}>{item.rate.toFixed(2)}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  rateItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    marginBottom: 10,
    elevation: 3,
  },
  currency: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  rate: {
    fontSize: 18,
    color: '#3498db',
  },
});

export default ExchangeRatesScreen;
