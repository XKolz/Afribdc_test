import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/AppNavigator';
import Icon from 'react-native-vector-icons/FontAwesome';
import CustomButton from '../components/CustomButton';
import {
  CodeField,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

type Props = NativeStackScreenProps<RootStackParamList, 'OtpVerification'>;

const CELL_COUNT = 6;
const OtpVerificationScreen: React.FC<Props> = ({navigation}) => {
  const [countdown, setCountdown] = useState(59);
  const [otp, setOtp] = useState('');
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown]);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backButton}>
        <Icon name="chevron-left" size={18} color="#000" />
      </TouchableOpacity>

      <Text style={styles.title}>Reset Password</Text>

      {/* Subtitle */}
      <Text style={styles.subtitle}>Enter Code</Text>

      {/* Email Masked Info */}
      <Text style={styles.infoText}>
        We have sent an OTP verification code to{'\n'}
        <Text style={styles.email}>ki******w****@gmail.com</Text>
      </Text>

      {/* OTP Input */}
      <CodeField
        ref={ref}
        {...props}
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({index, symbol, isFocused}) => (
          <View
            key={index}
            style={[styles.cell, isFocused && styles.focusCell]}>
            <Text style={styles.cellText}>{symbol || ' '}</Text>
          </View>
        )}
      />

      {/* Resend Code */}
      <TouchableOpacity
        disabled={countdown > 0}
        onPress={() => setCountdown(59)}>
        <Text style={styles.resendText}>
          Didn’t get the code?{' '}
          <Text style={{color: countdown > 0 ? '#9A9A9A' : '#007AFF'}}>
            Resend code ({countdown}s)
          </Text>
        </Text>
      </TouchableOpacity>

      {/* Submit Button */}
      <CustomButton
        title="Submit"
        // onPress={() => console.log('OTP Submitted:', otp)}
        onPress={() => navigation.navigate('ResetPasswordForm')}
        type="primary"
      />
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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 20,
  },
  backButton: {
    // marginRight: 10,
    position: 'absolute',
    top: 40,
    left: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 10,
  },
  infoText: {
    fontSize: 14,
    textAlign: 'center',
    color: '#6C6C6C',
    marginBottom: 20,
  },
  email: {
    fontWeight: 'bold',
  },
  //
  codeFieldRoot: {paddingVertical: 20},
  cell: {
    width: 50, // Slightly wider for better spacing
    height: 50,
    fontSize: 20,
    textAlign: 'center',
    textAlignVertical: 'center', // Ensures vertical alignment (Android only)
    justifyContent: 'center', // Centers content in the View
    alignItems: 'center',
    display: 'flex', // Required for justifyContent to work
    borderWidth: 1,
    borderColor: '#ccc',
    marginHorizontal: 5,
    borderRadius: 5,
    backgroundColor: '#fff', // Ensures no visual bugs
  },
  cellText: {
    fontSize: 24, // Make the text a little bigger
    textAlign: 'center',
    fontWeight: 'bold',
  },
  focusCell: {
    borderColor: '#007AFF',
  },

  //
  otpContainer: {
    width: '80%',
    alignSelf: 'center',
    height: 60,
    marginBottom: 20,
  },
  otpBox: {
    width: 50,
    height: 50,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#D1D1D1',
    textAlign: 'center',
    fontSize: 18,
    color: '#000',
  },
  otpActiveBox: {
    borderColor: '#007AFF',
  },
  resendText: {
    fontSize: 14,
    textAlign: 'center',
    color: '#6C6C6C',
    marginBottom: 20,
  },
});

export default OtpVerificationScreen;
