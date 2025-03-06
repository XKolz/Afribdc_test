import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {
  CodeField,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/AppNavigator';

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
      <Text style={styles.title}>Set Your Pin</Text>
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

      <TouchableOpacity
        style={styles.button}
        // onPress={() => console.log('Pin Set:', value)}
        onPress={() => navigation.navigate('Login')}
        disabled={value.length < 4}>
        <Text style={styles.buttonText}>Proceed</Text>
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
    color: '#6B7280',
    marginBottom: 30,
  },
  codeFieldRoot: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
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
    fontWeight: 'bold',
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
