import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/AppNavigator';
import CustomButton from '../components/CustomButton';

type Props = NativeStackScreenProps<RootStackParamList, 'Welcome'>;

const WelcomeScreen: React.FC<Props> = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* Globe Image */}
      <Image
        source={require('../assets/globe.png')}
        style={styles.image}
        resizeMode="contain"
      />

      {/* Description */}
      <Text style={styles.description}>
        Exchange currencies with ease and confidence, anytime, anywhere.
      </Text>

      {/* Reusable Buttons */}
      <CustomButton
        title="View Best Rate Now"
        onPress={() => navigation.navigate('ExchangeRates')}
        // onPress={() => console.log('View Rates')}
        type="outline"
      />
      <CustomButton
        title="Get started"
        onPress={() => navigation.navigate('SignUp')}
        type="primary"
      />

      {/* Login Option */}
      <Text style={styles.loginText}>
        Already have an account? <Text style={styles.loginLink}>Login</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  image: {
    width: 250,
    height: 250,
    marginBottom: 30,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#1A1A1A',
    marginBottom: 40,
    fontWeight: '400',
    width: '80%',
  },
  loginText: {
    fontSize: 14,
    color: '#000',
    fontWeight: '500',
  },
  loginLink: {
    color: '#007AFF',
    fontWeight: 'bold',
  },
});

export default WelcomeScreen;
