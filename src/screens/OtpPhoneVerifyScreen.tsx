import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
  StatusBar,
} from 'react-native';
import {
  CodeField,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/AppNavigator';
import Icon from 'react-native-vector-icons/FontAwesome';
import CustomButton from '../components/CustomButton';

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
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="chevron-left" size={20} color="#000" />
        </TouchableOpacity>
        <Text style={styles.title}>Verify phone</Text>
      </View>

      <Text style={styles.subtitle}>
        Please verify your phone {'\n'} number
      </Text>

      <Text style={styles.infoText}>
        We have sent an 6-digit verification code to
        {'\n'}
        <Text style={styles.phoneNumber}>+1 (506) 210-0661</Text>
        {'\n'}
        Enter this code below
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
          <Text style={{color: countdown > 0 ? '#9A9A9A' : '#2563EB'}}>
            Resend code ({countdown}s)
          </Text>
        </Text>
      </TouchableOpacity>

      <CustomButton
        title="Submit"
        onPress={() => navigation.navigate('SignUp')}
        disabled={value.length < CELL_COUNT}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
    paddingHorizontal: 20,
    alignItems: 'center',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    color: '#1A1A1A',
    fontSize: 18,
    fontWeight: '400',
    // marginLeft: 10,
    textAlign: 'center',
    flex: 1,
  },
  subtitle: {
    textAlign: 'center',
    color: '#0C263A',
    fontSize: 18,
    fontWeight: '600',
    paddingVertical: 40,
  },
  infoText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#6B777F',
    marginBottom: 40,
    lineHeight: 24,
    fontWeight: '500',
  },
  phoneNumber: {
    fontWeight: '500',
    color: '#374151',
  },
  codeFieldRoot: {
    marginBottom: 30,
    justifyContent: 'center',
  },
  cell: {
    width: 50,
    height: 55,
    borderWidth: 1,
    borderColor: '#0C263A',
    borderRadius: 5,
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
    fontSize: 15,
    textAlign: 'center',
    color: '#0C263A',
    marginBottom: 40,
    fontWeight: '500',
  },
});

export default OtpPhoneVerifyScreen;
