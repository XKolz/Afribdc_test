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
  ScrollView,
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
    <SafeAreaView style={styles.safeContainer}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          {/* Header */}
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Icon name="chevron-left" size={30} color="#000" />
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
                      item.status === 'Selling'
                        ? styles.selling
                        : styles.buying,
                    ]}>
                    {item.status}
                  </Text>
                </View>
              )}
              scrollEnabled={false}
              nestedScrollEnabled={false}
            />
          </View>

          <View style={{flex: 0.2}} />

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
      </ScrollView>
    </SafeAreaView>
  );
};

// Styles
const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: '#F9F9F9',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  scrollContainer: {
    flexGrow: 1,
    // paddingBottom: 20,
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    // marginTop: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: '400',
    textAlign: 'center',
    flex: 1,
  },
  subtitle: {
    fontSize: 16,
    color: '#1A1A1A',
    marginTop: 30,
    fontWeight: '400',
  },
  listContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    marginVertical: 15,
  },
  exchangeItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 14,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#61CE701A',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  userInitials: {
    fontWeight: '500',
    color: '#1CA17E',
  },
  userName: {
    fontWeight: '400',
  },
  exchangeRate: {
    color: '#6B777F',
    fontWeight: '300',
  },
  status: {
    fontWeight: '400',
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
    // marginBottom: 20,
  },
  loginLink: {
    color: '#007AFF',
    fontWeight: '500',
  },
});

export default ExchangeRatesScreen;
