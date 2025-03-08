import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

interface CustomButtonProps {
  title: string;
  onPress: () => void;
  type?: 'primary' | 'outline'; // Button types
  disabled?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  onPress,
  type = 'primary',
  disabled = false,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        type === 'outline' ? styles.outlineButton : styles.primaryButton,
        disabled && styles.disabledButton,
      ]}
      onPress={onPress}
      disabled={disabled}>
      <Text
        style={[
          styles.text,
          type === 'outline' ? styles.outlineText : styles.primaryText,
          disabled && styles.disabledText,
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 14,
    width: '100%',
    alignItems: 'center',
    borderRadius: 25,
    justifyContent: 'center',
    marginBottom: 15,
  },
  primaryButton: {
    backgroundColor: '#22A37C',
  },
  outlineButton: {
    borderWidth: 1,
    borderColor: '#000',
    backgroundColor: 'transparent',
  },
  disabledButton: {
    backgroundColor: '#A0A0A0',
  },
  disabledText: {
    color: '#E0E0E0',
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
  },
  primaryText: {
    color: '#fff',
  },
  outlineText: {
    color: '#000',
  },
});

export default CustomButton;
