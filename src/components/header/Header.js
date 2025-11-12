import React from 'react';
import { View, Image, Text } from 'react-native';

export default function Header() {
  return (
    <View style={{ padding: 20, alignItems: 'center' }}>
      <Image
        source={require('../../../assets/ramLogo.png')}
        style={{ width: 200, height: 60, resizeMode: 'contain' }}
      />
      <Text style={{color: '#ffff'}}>Characters</Text>
    </View>
  );
}