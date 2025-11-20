import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './SavedHeaderStyle';

export default function SavedHeader() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Saved Characters</Text>
    </View>
  );
}
