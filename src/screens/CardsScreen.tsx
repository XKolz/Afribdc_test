import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function CardsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Cards Screen</Text>
      {/* <Text>CardsScreen</Text> */}
    </View>
  );
}

// const styles = StyleSheet.create({});
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
