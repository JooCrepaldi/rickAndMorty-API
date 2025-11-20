import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, useState } from 'react-native';
import { styles } from '../components/detailPanelStyles/detailStyles';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function CharacterDetailScreen({ route }) {
  const { character } = route.params;
 
  //pergar id da página, salvar em um array, buscar o card pelo id no SavedScreen.js

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={[styles.container, { flexGrow: 1 }]}
        showsVerticalScrollIndicator={false}
      >
        <Image
          source={{ uri: character.image }}
          style={styles.image}
          resizeMode="cover"
        />

        <View style={{ flexDirection: 'row', gap: 20, alignItems: 'center', justifyContent: 'center', marginBottom: 24 }}>
          <Text
            style={styles.name}
            numberOfLines={2}
          >
            {character.name}
          </Text>

          <TouchableOpacity
            style={styles.button}
            /* onPress={()} */      >
            <Image
              source={require('../../assets/bookMarkIcon.png')}
              resizeMode="contain"
            />
          </TouchableOpacity>

        </View>


        <View style={styles.infoContainer}>
          <View style={styles.infoRow}>
            <Text style={styles.label}>Status:</Text>
            <Text style={styles.infoText}>{character.status}</Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.label}>Species:</Text>
            <Text style={styles.infoText}>{character.species}</Text>
          </View>

          {character.type ? (
            <View style={styles.infoRow}>
              <Text style={styles.label}>Type:</Text>
              <Text style={styles.infoText}>{character.type}</Text>
            </View>
          ) : null}

          <View style={styles.infoRow}>
            <Text style={styles.label}>Gender:</Text>
            <Text style={styles.infoText}>{character.gender}</Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.label}>Origin:</Text>
            <Text style={styles.infoText}>{character.origin?.name || 'Desconhecido'}</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
