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
        Enter your email address and we’ll send you an OTP verification code.
      </Text>

      {/* Input Field */}
      <CustomInput
        label="Email"
        placeholder="Enter your email"
        icon="envelope"
      />

      {/* Next Button */}
      <CustomButton
        title="Next"
        // onPress={() => console.log('Proceed to OTP')}
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
    color: '#6C6C6C',
    marginBottom: 20,
    width: '90%',
    alignSelf: 'center',
  },
  returnToLogin: {
    fontSize: 14,
    textAlign: 'center',
    color: '#000',
    marginTop: 20,
  },
});

export default ResetPasswordScreen;
