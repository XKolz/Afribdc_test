import React, {useState} from 'react';
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
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CustomButton from '../components/CustomButton';

type Props = NativeStackScreenProps<RootStackParamList, 'SetPin'>;

const CELL_COUNT = 4;

const SetPinScreen: React.FC<Props> = ({navigation}) => {
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Set Your Pin</Text> */}

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="chevron-left" size={30} color="#0C263A" />
        </TouchableOpacity>
        <Text style={styles.title}>Set Your Pin</Text>
      </View>

      <Text style={styles.subtitle}>
        Set up your 4-digit pin to make your account more secure. You'll be
        asked to enter this pin when making transactions.
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
            <Text style={styles.cellText}>{symbol ? '●' : ''}</Text>
          </View>
        )}
      />

      {/* <TouchableOpacity
        style={styles.button}
        // onPress={() => console.log('Pin Set:', value)}
        onPress={() => navigation.navigate('Login')}
        disabled={value.length < 4}>
        <Text style={styles.buttonText}>Proceed</Text>
      </TouchableOpacity> */}
      <CustomButton
        title="Proceed"
        onPress={() => navigation.navigate('Login')}
        disabled={value.length < 4}
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
    fontSize: 20,
    fontWeight: '400',
    textAlign: 'center',
    flex: 1,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#6B777F',
    fontWeight: '600',
    lineHeight: 24,
    marginTop: 50,
    marginBottom: 100,
  },
  codeFieldRoot: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 40,
  },
  cell: {
    width: 50,
    height: 50,
    borderWidth: 2,
    borderColor: '#A0A0A0',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    backgroundColor: '#fff',
  },
  cellText: {
    fontSize: 24,
    // fontWeight: 'bold',
    textAlign: 'center',
    color: '#10B981',
  },
  focusCell: {
    borderColor: '#10B981',
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

export default SetPinScreen;
