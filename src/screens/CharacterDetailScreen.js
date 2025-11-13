import React from "react";
import { View, Text, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../components/detailPanelStyles/detailStyles';

export default function CharacterDetailScreen({ route }) {
  const { character } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <Image source={{ uri: character.image }} style={styles.image} />

      <Text style={styles.name}>{character.name}</Text>

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
          <Text style={styles.infoText}>{character.origin.name}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
