import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {
  CodeField,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/AppNavigator';

type Props = NativeStackScreenProps<RootStackParamList, 'OtpPhoneVerify'>;

const CELL_COUNT = 6;
const OtpPhoneVerifyScreen: React.FC<Props> = ({navigation}) => {
  const [countdown, setCountdown] = useState(59);
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
      <Text style={styles.title}>Verify phone</Text>
      <Text style={styles.subtitle}>Please verify your phone number</Text>

      <Text style={styles.infoText}>
        We have sent a 6-digit verification code to {'\n'}
        <Text style={styles.phoneNumber}>+1 (506) 210-0661</Text>
      </Text>

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

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('SignUp')}
        disabled={value.length < CELL_COUNT}
        activeOpacity={0.7}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#1A1A1A',
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#333',
    marginBottom: 20,
  },
  infoText: {
    fontSize: 14,
    textAlign: 'center',
    color: '#6C6C6C',
    marginBottom: 10,
  },
  phoneNumber: {
    fontWeight: 'bold',
    color: '#1A1A1A',
  },
  codeFieldRoot: {
    marginBottom: 20,
    justifyContent: 'center',
  },
  cell: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    backgroundColor: '#fff',
  },
  cellText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  focusCell: {
    borderColor: '#007AFF',
  },
  resendText: {
    fontSize: 14,
    textAlign: 'center',
    color: '#6C6C6C',
    marginBottom: 20,
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

export default OtpPhoneVerifyScreen;
