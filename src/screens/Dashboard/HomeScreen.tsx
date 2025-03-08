import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {RootTabParamList} from '../../navigation/TabNavigator';
import LinearGradient from 'react-native-linear-gradient';

type Props = BottomTabScreenProps<RootTabParamList, 'HomeTab'>;

const HomeScreen: React.FC<Props> = () => {
  const [balanceVisible, setBalanceVisible] = useState(true);

  // Sample Sell Offers Data
  const sellOffers = [
    {id: '1', user: 'User 1', rate: '1 USD = 1.43 CAD', status: 'Selling'},
    {id: '2', user: 'User 2', rate: '1 CAD = 90.50 KSH', status: 'Buying'},
    {id: '3', user: 'User 3', rate: '1 USD = 780 NGN', status: 'Selling'},
    {id: '4', user: 'User 4', rate: '1 CAD = 90.50 KSH', status: 'Buying'},
    {id: '5', user: 'User 5', rate: '1 USD = 780 NGN', status: 'Selling'},
  ];

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Image
          source={require('../../assets/avatar.png')}
          style={styles.avatar}
        />
        <Text style={styles.welcomeText}>Welcome back, Walter</Text>
        <TouchableOpacity>
          <Icon name="bell-outline" size={24} color="#000" />
          <View style={styles.notificationDot} />
        </TouchableOpacity>
      </View>

      {/* ID Verification */}
      <TouchableOpacity style={styles.idCheckButton}>
        <Text style={styles.idCheckText}>Complete ID Check</Text>
      </TouchableOpacity>
      <Text style={styles.verifyText}>
        Verify your identity to access full features
      </Text>

      {/* Wallet Balance */}
      <LinearGradient
        colors={['#0D3D2E', '#22A37C']} // Gradient colors
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={styles.balanceCard}>
        {/* <Icon name="wallet-outline" size={28} color="#fff" /> */}
        <Image
          source={require('../../assets/empty-wallet.png')}
          style={styles.emptyWallet}
        />
        <View>
          <Text style={styles.balanceTitle}>Current balance</Text>
          <View style={styles.balanceRow}>
            <Text style={styles.balanceAmount}>
              {balanceVisible ? 'CAD. 0.00' : '•••••'}
            </Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => setBalanceVisible(!balanceVisible)}>
          <Icon
            name={balanceVisible ? 'eye-off-outline' : 'eye-outline'}
            size={20}
            color="#fff"
          />
        </TouchableOpacity>
      </LinearGradient>

      {/* Action Buttons */}
      <View style={styles.actionRow}>
        <ActionButton icon="plus" label="Fund wallet" />
        <ActionButton icon="swap-horizontal" label="Swap" />
        <ActionButton icon="currency-usd" label="Buy/Sell" />
        <ActionButton icon="bank-transfer-out" label="Withdraw" />
      </View>

      {/* Sell Offers */}
      <View style={styles.sellOffersHeader}>
        <Text style={styles.sellOffersTitle}>Sell Offers</Text>
        <TouchableOpacity>
          <Text style={styles.seeAllText}>see all</Text>
        </TouchableOpacity>
      </View>

      {/* <View> */}
      <View style={styles.listContainer}>
        <FlatList
          data={sellOffers}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <View style={styles.offerItem}>
              <View style={styles.offerUser}>
                <View style={styles.userIcon}>
                  <Text style={styles.userInitials}>WK</Text>
                </View>
                <View>
                  <Text style={styles.userName}>{item.user}</Text>
                  <Text style={styles.exchangeRate}>{item.rate}</Text>
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
    </View>
  );
};

// Action Button Component
const ActionButton = ({icon, label}: {icon: string; label: string}) => (
  <TouchableOpacity style={styles.actionButton}>
    <View style={styles.actionIcon}>
      <Icon name={icon} size={26} color="#22A37C" />
    </View>
    <Text style={styles.actionLabel}>{label}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  emptyWallet: {
    width: 46,
    height: 46,
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: '600',
    flex: 1,
    textAlign: 'center',
  },
  notificationDot: {
    position: 'absolute',
    top: 2,
    right: 2,
    width: 8,
    height: 8,
    backgroundColor: 'red',
    borderRadius: 4,
  },
  idCheckButton: {
    backgroundColor: '#E99B36',
    paddingVertical: 10,
    borderRadius: 8,
    marginTop: 20,
    width: '45%',
    alignItems: 'center',
  },
  idCheckText: {
    fontWeight: 'bold',
    color: '#fff',
  },
  verifyText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#6B777F',
    marginTop: 10,
  },
  balanceCard: {
    backgroundColor: '#1CA17E',
    padding: 20,
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center',
    flexDirection: 'row',
    // gap: 50,
    justifyContent: 'space-between',
  },
  balanceTitle: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 10,
  },
  balanceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  balanceAmount: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    marginRight: 10,
  },
  actionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  actionButton: {
    alignItems: 'center',
  },
  actionIcon: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
  },
  actionLabel: {
    marginTop: 5,
    fontSize: 12,
    color: '#000',
  },
  sellOffersHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  sellOffersTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#0C263A',
  },
  seeAllText: {
    color: '#004BEC',
  },
  listContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    marginVertical: 15,
  },
  offerItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 14,
  },
  offerUser: {
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
    fontWeight: 'bold',
    color: '#22A37C',
  },
  userName: {
    fontWeight: '500',
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
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 15,
    borderTopWidth: 1,
    borderColor: '#E0E0E0',
    marginTop: 10,
  },
});

export default HomeScreen;
