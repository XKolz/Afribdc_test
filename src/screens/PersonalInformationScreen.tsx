import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import DropDownPicker from 'react-native-dropdown-picker';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/AppNavigator';
import CustomButton from '../components/CustomButton';

type Props = NativeStackScreenProps<RootStackParamList, 'PersonalInformation'>;

const PersonalInformationScreen: React.FC<Props> = ({navigation}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'United States', value: 'US'},
    {label: 'Canada', value: 'CA'},
    {label: 'United Kingdom', value: 'UK'},
  ]);

  const [stateOpen, setStateOpen] = useState(false);
  const [state, setState] = useState(null);
  const [stateItems, setStateItems] = useState([
    {label: 'California', value: 'CA'},
    {label: 'New York', value: 'NY'},
    {label: 'Texas', value: 'TX'},
  ]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled">
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="chevron-left" size={20} color="#000" />
          </TouchableOpacity>
          <Text style={styles.title}>Personal information</Text>
        </View>

        <Text style={styles.label}>First name *</Text>
        <TextInput
          style={styles.input}
          placeholder="First name"
          placeholderTextColor="#A0A0A0"
          value={firstName}
          onChangeText={setFirstName}
        />

        <Text style={styles.label}>Last name *</Text>
        <TextInput
          style={styles.input}
          placeholder="Last name"
          placeholderTextColor="#A0A0A0"
          value={lastName}
          onChangeText={setLastName}
        />

        <Text style={styles.label}>Date of Birth</Text>
        <View style={styles.inputContainer}>
          <Icon name="calendar" size={16} color="#A0A0A0" style={styles.icon} />
          <TextInput
            style={styles.inputWithIcon}
            placeholder="dd/mm/yyyy"
            placeholderTextColor="#A0A0A0"
            value={dateOfBirth}
            onChangeText={setDateOfBirth}
            keyboardType="numeric"
          />
        </View>

        <Text style={styles.label}>Country of residence</Text>
        <View style={styles.pickerContainer}>
          <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            placeholder="Select a country"
            style={styles.dropdown}
            dropDownContainerStyle={styles.dropdownContainer}
          />
        </View>

        <Text style={styles.label}>State/Territory</Text>
        <View style={styles.pickerContainer}>
          <DropDownPicker
            open={stateOpen}
            value={state}
            items={stateItems}
            setOpen={setStateOpen}
            setValue={setState}
            setItems={setStateItems}
            placeholder="Select a state"
            style={styles.dropdown}
            dropDownContainerStyle={styles.dropdownContainer}
          />
        </View>

        <Text style={styles.label}>Address line 1</Text>
        <TextInput
          style={styles.input}
          placeholder="Address line 1"
          placeholderTextColor="#A0A0A0"
          value={address1}
          onChangeText={setAddress1}
        />

        <Text style={styles.label}>Address line 2</Text>
        <TextInput
          style={styles.input}
          placeholder="Address line 2"
          placeholderTextColor="#A0A0A0"
          value={address2}
          onChangeText={setAddress2}
        />

        <Text style={styles.label}>City</Text>
        <TextInput
          style={styles.input}
          placeholder="City"
          placeholderTextColor="#A0A0A0"
          value={city}
          onChangeText={setCity}
        />

        <Text style={styles.label}>Postal/Zip Code</Text>
        <TextInput
          style={styles.input}
          placeholder="Postal"
          placeholderTextColor="#A0A0A0"
          value={postalCode}
          onChangeText={setPostalCode}
          keyboardType="numeric"
        />

        <View style={{marginTop: 10}} />

        <CustomButton
          title="Continue"
          onPress={() => navigation.navigate('SetPin')}
          type="primary"
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  scrollContainer: {
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 30,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  title: {
    color: '#1A1A1A',
    fontSize: 18,
    fontWeight: '400',
    // marginLeft: 10,
    textAlign: 'center',
    flex: 1,
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333',
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#D1D5DB',
    paddingHorizontal: 15,
    height: 50,
    fontSize: 16,
    marginBottom: 15,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#D1D5DB',
    paddingHorizontal: 15,
    height: 50,
    marginBottom: 15,
  },
  icon: {
    marginRight: 10,
  },
  inputWithIcon: {
    flex: 1,
    fontSize: 16,
    color: '#1F2937',
  },
  pickerContainer: {
    marginBottom: 15,
  },
  dropdown: {
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 10,
  },
  dropdownContainer: {
    borderWidth: 1,
    borderColor: '#D1D5DB',
  },
  button: {
    backgroundColor: '#10B981',
    paddingVertical: 16,
    alignItems: 'center',
    borderRadius: 12,
    marginTop: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default PersonalInformationScreen;
