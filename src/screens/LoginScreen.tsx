import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/AppNavigator';
import Icon from 'react-native-vector-icons/FontAwesome';
import CustomInput from '../components/CustomInput'; // Import reusable input
import CustomButton from '../components/CustomButton'; // Import reusable button

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

const LoginScreen: React.FC<Props> = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backButton}>
        <Icon name="chevron-left" size={18} color="#000" />
      </TouchableOpacity>

      {/* Title */}
      <Text style={styles.title}>Login to your account</Text>

      {/* Input Fields */}
      <CustomInput label="Email" placeholder="Email" icon="envelope" />
      <CustomInput
        label="Password"
        placeholder="Password"
        icon="lock"
        isPassword
      />

      {/* Forgot Password */}
      <TouchableOpacity
        // onPress={() => console.log('Forgot Password')}
        onPress={() => navigation.navigate('ResetPassword')}
        style={styles.forgotPassword}>
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </TouchableOpacity>

      {/* Login Button */}
      <CustomButton
        title="Login"
        // onPress={() => console.log('Login Pressed')}
        onPress={() => navigation.navigate('Home')}
        type="primary"
      />

      {/* Sign-Up Link */}
      <Text style={styles.signupText}>
        Don’t have an account?{' '}
        <Text
          onPress={() => navigation.navigate('SignUp')}
          style={styles.signupLink}>
          Sign up
        </Text>
      </Text>
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
    marginBottom: 20,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginBottom: 20,
  },
  forgotPasswordText: {
    fontSize: 14,
    color: '#007AFF',
    fontWeight: '500',
  },
  signupText: {
    fontSize: 14,
    textAlign: 'center',
    color: '#000',
    marginTop: 15,
  },
  signupLink: {
    color: '#007AFF',
    fontWeight: 'bold',
  },
});

export default LoginScreen;
