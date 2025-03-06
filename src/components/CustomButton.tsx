import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

interface CustomButtonProps {
  title: string;
  onPress: () => void;
  type?: 'primary' | 'outline'; // Button types
}

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  onPress,
  type = 'primary',
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        type === 'outline' ? styles.outlineButton : styles.primaryButton,
      ]}
      onPress={onPress}>
      <Text
        style={[
          styles.text,
          type === 'outline' ? styles.outlineText : styles.primaryText,
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 14,
    // paddingHorizontal: 60,
    width: '100%',
    alignItems: 'center',
    borderRadius: 25,
    // alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },
  primaryButton: {
    backgroundColor: '#1CA17E',
  },
  outlineButton: {
    borderWidth: 1,
    borderColor: '#000',
    backgroundColor: 'transparent',
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
