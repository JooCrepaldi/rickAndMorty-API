import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../components/detailPanelStyles/detailStyles';

export default function CharacterDetailScreen({ route }) {
  const { character } = route.params;

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

          <TouchableOpacity style={styles.button}>
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
            <Text style={styles.label}>Espécie:</Text>
            <Text style={styles.infoText}>{character.species}</Text>
          </View>

          {character.type ? (
            <View style={styles.infoRow}>
              <Text style={styles.label}>Tipo:</Text>
              <Text style={styles.infoText}>{character.type}</Text>
            </View>
          ) : null}

          <View style={styles.infoRow}>
            <Text style={styles.label}>Gênero:</Text>
            <Text style={styles.infoText}>{character.gender}</Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.label}>Origem:</Text>
            <Text style={styles.infoText}>{character.origin?.name || 'Desconhecido'}</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
