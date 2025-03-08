import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// Import Screens
import HomeScreen from '../screens/Dashboard/HomeScreen';
import WalletScreen from '../screens/Dashboard/WalletScreen';
import OrdersScreen from '../screens/Dashboard/OrdersScreen';
import CardsScreen from '../screens/Dashboard/CardsScreen';

// Define and Export Tab Param List
export type RootTabParamList = {
  HomeTab: undefined;
  Wallet: undefined;
  Orders: undefined;
  Cards: undefined;
};

// Assign the type to Bottom Tabs
const Tab = createBottomTabNavigator<RootTabParamList>();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => {
          // ✅ Fix: Explicitly define a fallback for `iconName`
          let iconName: string = 'home'; // Default value

          if (route.name === 'HomeTab') iconName = 'home';
          else if (route.name === 'Wallet') iconName = 'wallet-outline';
          else if (route.name === 'Orders') iconName = 'shopping';
          else if (route.name === 'Cards') iconName = 'credit-card-outline';

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#22A37C',
        tabBarInactiveTintColor: '#777',
        tabBarStyle: {
          paddingBottom: 10,
          height: 60,
          borderTopWidth: 0,
          elevation: 0,
          shadowOpacity: 0,
          backgroundColor: '#FAFAFA',
        },
      })}>
      <Tab.Screen
        name="HomeTab"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Wallet"
        component={WalletScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Orders"
        component={OrdersScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Cards"
        component={CardsScreen}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
