import React from 'react';
import { View, Image, Text } from 'react-native';
import { styles } from './HeaderStyle';

export default function Header() {
  return (
    <View style={{ padding: 20, alignItems: 'center' }}>
      <Image
        source={require('../../../assets/ramLogo.png')}
        style={styles.image}
      />
      <Text style={styles.title}>Characters</Text>
    </View>
  );
}