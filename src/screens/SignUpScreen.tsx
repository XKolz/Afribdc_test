import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/AppNavigator';
import Icon from 'react-native-vector-icons/FontAwesome';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';

type Props = NativeStackScreenProps<RootStackParamList, 'SignUp'>;

const SignUpScreen: React.FC<Props> = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backButton}>
        <Icon name="chevron-left" size={18} color="#000" />
      </TouchableOpacity>

      {/* Title */}
      <Text style={styles.title}>Create your account</Text>

      {/* Input Fields */}
      <CustomInput label="Email" placeholder="Email" icon="envelope" />
      <CustomInput label="Username" placeholder="Enter unique username" />
      <CustomInput
        label="Create password"
        placeholder="Password"
        icon="lock"
        isPassword
      />
      <CustomInput
        label="Confirm password"
        placeholder="Confirm password"
        icon="lock"
        isPassword
      />

      <View style={{flex: 0.08}} />

      {/* Sign-Up Button */}
      <CustomButton
        title="Sign up"
        onPress={() => navigation.navigate('PersonalInformation')}
        type="primary"
      />

      {/* Login Link */}
      <Text style={styles.loginText}>
        Already have an account?{' '}
        <Text
          onPress={() => navigation.navigate('Login')}
          style={styles.loginLink}>
          Login
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
    backgroundColor: '#FAFAFA',
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
  loginText: {
    fontSize: 14,
    textAlign: 'center',
    color: '#000',
    marginTop: 15,
  },
  loginLink: {
    color: '#2563EB',
    fontWeight: '500',
  },
});

export default SignUpScreen;
