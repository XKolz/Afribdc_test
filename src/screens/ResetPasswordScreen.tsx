import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/AppNavigator';
import Icon from 'react-native-vector-icons/FontAwesome';
import CustomInput from '../components/CustomInput'; // Import reusable input
import CustomButton from '../components/CustomButton'; // Import reusable button

type Props = NativeStackScreenProps<RootStackParamList, 'ResetPassword'>;

const ResetPasswordScreen: React.FC<Props> = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backButton}>
        <Icon name="chevron-left" size={18} color="#000" />
      </TouchableOpacity>

      {/* Title */}
      <Text style={styles.title}>Reset password</Text>

      {/* Instruction */}
      <Text style={styles.instruction}>
        Enter your email address and we’ll
        {'\n'}send you an OTP verification code.
      </Text>

      {/* Input Field */}
      <CustomInput
        label="Email"
        placeholder="Enter your email"
        icon="envelope"
      />

      <View style={{flex: 0.03}} />

      {/* Next Button */}
      <CustomButton
        title="Next"
        onPress={() => navigation.navigate('OtpVerification')}
        type="primary"
      />

      {/* Return to Login */}
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.returnToLogin}>Return to login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  instruction: {
    fontSize: 14,
    textAlign: 'center',
    color: '#0C263A',
    fontWeight: '500',
    marginBottom: 20,
    lineHeight: 24,
    width: '90%',
    alignSelf: 'center',
  },
  returnToLogin: {
    fontSize: 20,
    textAlign: 'center',
    color: '#0C263A',
    fontWeight: '400',
    marginTop: 20,
  },
});

export default ResetPasswordScreen;
