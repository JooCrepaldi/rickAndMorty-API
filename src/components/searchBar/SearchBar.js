import { View, TextInput, Image } from 'react-native';
import React from 'react';
import { styles } from './SearchBarStyle';

export default function SearchBar({ onSearchChange }) {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/searchIcon.png')} // substitua o .svg por .png em assets
        style={styles.icon}
        resizeMode="contain"
      />
      <TextInput
        style={styles.input}
        placeholder="Search for a character..."
        placeholderTextColor="gray"
        keyboardType="default"
        onChangeText={onSearchChange}
      />
    </View>
  );
}