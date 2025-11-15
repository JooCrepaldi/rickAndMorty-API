import React from 'react';
import { View, Image } from 'react-native';
import { styles } from './HeaderStyle';
import SearchBar from '../searchBar/SearchBar';

export default function Header({ onSearchChange }) {
  return (
    <View style={{ padding: 20, alignItems: 'center' }}>
      <Image
        source={require('../../../assets/ramLogo.png')}
        style={styles.image}
      />
      <SearchBar onSearchChange={onSearchChange} />
    </View>
  );
}