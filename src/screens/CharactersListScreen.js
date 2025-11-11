import React, { useEffect, useState } from 'react';
import { FlatList, ActivityIndicator, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CharacterCard from '../components/characterCard/Card';
import { characterService } from '../services/characterService';
import Header from '../components/header/Header';

export default function CharactersListScreen() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadCharacters() {
      try {
        const data = await characterService.getAll();
        setCharacters(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadCharacters();
  }, []);

  if (loading) {
    return (
      <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#000" />
      </SafeAreaView>
    );
  }

  return ( //aqui está a rederização da lista a partir do CharacterCard(desenvolvido em Card.js)
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        ListHeaderComponent={<Header />}
        data={characters}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <CharacterCard character={item} />}
      />
    </SafeAreaView>
  );
}
