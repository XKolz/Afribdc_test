import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

// Import Screens
import SplashScreen from '../screens/SplashScreen';
import ExchangeRatesScreen from '../screens/ExchangeRatesScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import SignUpScreen from '../screens/SignUpScreen';
import LoginScreen from '../screens/LoginScreen';
import ResetPasswordScreen from '../screens/ResetPasswordScreen';
import OtpVerificationScreen from '../screens/OtpVerificationScreen';
import ResetPasswordFormScreen from '../screens/ResetPasswordFormScreen';
import TabNavigator from './TabNavigator'; // Import Tab Navigator

export type RootStackParamList = {
  Splash: undefined;
  ExchangeRates: undefined;
  Welcome: undefined;
  SignUp: undefined;
  Login: undefined;
  ResetPassword: undefined;
  OtpVerification: undefined;
  ResetPasswordForm: undefined;
  Home: undefined; // Home is now TabNavigator
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ResetPassword"
          component={ResetPasswordScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="OtpVerification"
          component={OtpVerificationScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ResetPasswordForm"
          component={ResetPasswordFormScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ExchangeRates"
          component={ExchangeRatesScreen}
          options={{title: 'Exchange Rates'}}
        />

        {/* Home now loads the Bottom Tabs */}
        <Stack.Screen
          name="Home"
          component={TabNavigator}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
