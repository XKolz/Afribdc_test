import React, {useState} from 'react';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

interface CustomInputProps {
  label: string;
  placeholder: string;
  icon?: string;
  isPassword?: boolean;
}

const CustomInput: React.FC<CustomInputProps> = ({
  label,
  placeholder,
  icon,
  isPassword,
}) => {
  const [secureText, setSecureText] = useState(isPassword);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
        {icon && (
          <Icon name={icon} size={18} color="#6C6C6C" style={styles.icon} />
        )}
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          secureTextEntry={secureText}
          placeholderTextColor="#9A9A9A"
        />
        {isPassword && (
          <TouchableOpacity onPress={() => setSecureText(!secureText)}>
            <Icon
              name={secureText ? 'eye-slash' : 'eye'}
              size={18}
              color="#6C6C6C"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 15,
  },
  label: {
    fontSize: 14,
    color: '#333',
    marginBottom: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    paddingHorizontal: 10,
    height: 50,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
});

export default CustomInput;
