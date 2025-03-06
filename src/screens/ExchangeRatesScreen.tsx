import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Platform,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/AppNavigator';
import CustomButton from '../components/CustomButton';

type Props = NativeStackScreenProps<RootStackParamList, 'ExchangeRates'>;

const ExchangeRatesScreen: React.FC<Props> = ({navigation}) => {
  // Sample Exchange Rates Data
  const exchangeRates = [
    {id: '1', user: 'Username', rate: '1 USD = 1.43 CAD', status: 'Selling'},
    {id: '2', user: 'User 2', rate: '1 CAD = 90.50 KSH', status: 'Buying'},
    {id: '3', user: 'User 3', rate: '1 USD = 780 NGN', status: 'Selling'},
    {id: '4', user: 'User 4', rate: '1 CAD = 90.50 KSH', status: 'Buying'},
    {id: '5', user: 'User 5', rate: '1 USD = 780 NGN', status: 'Selling'},
    {id: '6', user: 'User 4', rate: '1 CAD = 90.50 KSH', status: 'Buying'},
    {id: '7', user: 'User 4', rate: '1 CAD = 90.50 KSH', status: 'Buying'},
    {id: '8', user: 'User 4', rate: '1 CAD = 90.50 KSH', status: 'Buying'},
  ];

  return (
    // <View style={styles.container}>
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="arrow-left" size={24} color="#000" />
          </TouchableOpacity>
          <Text style={styles.title}>Exchange Rates</Text>
        </View>

        {/* Subtitle */}
        <Text style={styles.subtitle}>Live exchange rates</Text>

        {/* Exchange Rates List */}
        <View style={styles.listContainer}>
          <FlatList
            data={exchangeRates}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <View style={styles.exchangeItem}>
                <View style={styles.userInfo}>
                  <View style={styles.userIcon}>
                    <Text style={styles.userInitials}>UN</Text>
                  </View>
                  <View>
                    <Text style={styles.userName}>{item.user}</Text>
                    <Text style={styles.exchangeRate}>Rate {item.rate}</Text>
                  </View>
                </View>
                <Text
                  style={[
                    styles.status,
                    item.status === 'Selling' ? styles.selling : styles.buying,
                  ]}>
                  {item.status}
                </Text>
              </View>
            )}
          />
        </View>

        {/* CTA Section */}
        <CustomButton
          title="Get started"
          onPress={() => navigation.navigate('EnterPhoneNumber')}
          type="primary"
        />
        <Text style={styles.loginText}>
          Already have an account?{' '}
          <Text
            style={styles.loginLink}
            onPress={() => navigation.navigate('Login')}>
            Login
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

// Styles
const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '400',
    marginLeft: 10,
    textAlign: 'center',
    flex: 1,
  },
  subtitle: {
    fontSize: 16,
    color: '#1A1A1A',
    marginTop: 20,
    fontWeight: '400',
  },
  listContainer: {
    backgroundColor: '#F9F9F9',
    borderRadius: 10,
    padding: 10,
    marginVertical: 15,
  },
  exchangeItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    // borderBottomWidth: 1,
    // borderColor: '#E0E0E0',
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#E0F2F1',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  userInitials: {
    fontWeight: 'bold',
    color: '#1CA17E',
  },
  userName: {
    fontWeight: '400',
  },
  exchangeRate: {
    color: '#777',
  },
  status: {
    fontWeight: 'bold',
  },
  selling: {
    color: '#22A37C',
  },
  buying: {
    color: '#22A37C',
  },
  loginText: {
    fontSize: 14,
    color: '#000',
    fontWeight: '500',
    textAlign: 'center',
    marginTop: 15,
  },
  loginLink: {
    color: '#007AFF',
    fontWeight: 'bold',
  },
});

export default ExchangeRatesScreen;
