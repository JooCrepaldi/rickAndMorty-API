import React from 'react';
import { View, Image } from 'react-native';

export default function Header() {
  return (
    <View style={{ padding: 20, backgroundColor: '#141414ff', alignItems: 'center' }}>
      <Image
        source={require('../../../assets/ramLogo.png')}
        style={{ width: 200, height: 60, resizeMode: 'contain' }}
      />
    </View>
  );
}