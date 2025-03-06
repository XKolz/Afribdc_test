import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';
import CountryPicker, {
  Country,
  CountryCode,
} from 'react-native-country-picker-modal';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/AppNavigator';

type Props = NativeStackScreenProps<RootStackParamList, 'EnterPhoneNumber'>;

const EnterPhoneNumberScreen: React.FC<Props> = ({navigation}) => {
  const [countryCode, setCountryCode] = useState<CountryCode>('CA');
  const [callingCode, setCallingCode] = useState<string>('1');
  const [phoneNumber, setPhoneNumber] = useState<string>('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter Phone number</Text>
      <Text style={styles.subtitle}>We’ll send you a verification code</Text>

      <View style={styles.phoneInputContainer}>
        <TouchableOpacity style={styles.countryPickerContainer}>
          <CountryPicker
            withFilter
            withFlag
            withCallingCode
            withAlphaFilter
            withEmoji
            countryCode={countryCode}
            onSelect={(country: Country) => {
              setCountryCode(country.cca2 as CountryCode);
              setCallingCode(country.callingCode[0]);
            }}
          />
          <Text style={styles.countryCode}>+{callingCode}</Text>
        </TouchableOpacity>

        <TextInput
          style={styles.phoneInput}
          placeholder="(XXX) XXX-XXXX"
          keyboardType="phone-pad"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          placeholderTextColor="#A0A0A0"
        />
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('OtpPhoneVerify')}
        disabled={!phoneNumber.trim()}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#1A1A1A',
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#6B7280',
    marginBottom: 30,
  },
  phoneInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#D1D5DB',
    paddingHorizontal: 10,
    width: '100%',
    height: 55,
    marginBottom: 20,
  },
  countryPickerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  countryCode: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
    marginLeft: 5,
  },
  phoneInput: {
    flex: 1,
    fontSize: 16,
    paddingLeft: 10,
    color: '#1F2937',
  },
  button: {
    backgroundColor: '#10B981',
    paddingVertical: 16,
    width: '100%',
    alignItems: 'center',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default EnterPhoneNumberScreen;
