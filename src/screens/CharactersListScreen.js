import React, { useEffect, useState } from 'react';
import { FlatList, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CharacterCard from '../components/characterCard/Card';
import { characterService } from '../services/characterService';
import Header from '../components/header/Header';
import { colors } from '../theme/colors';

export default function CharactersListScreen() {
  const [characters, setCharacters] = useState([]);
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState('');

  useEffect(() => { // carregar personagens
    async function loadCharacters() {
      try {
        const data = await characterService.getAll();
        const list = Array.isArray(data) ? data : (data.results || []);
        setCharacters(list);
        setFilteredCharacters(list);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadCharacters();
  }, []);

  function handleSearch(text) { // função de persquisa
    setSearchText(text);
    const q = text.trim().toLowerCase();

    if (q === '') {
      setFilteredCharacters(characters);
      return;
    }

    const newList = characters.filter(item =>
      item.name && item.name.toLowerCase().includes(q)
    );
    setFilteredCharacters(newList);
  }

  if (loading) {
    return (
      <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#00FF7F" />
      </SafeAreaView>
    );
  }

  return ( // renderização da lista
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.bg }}>
      <FlatList
        ListHeaderComponent={<Header onSearchChange={handleSearch} />}
        data={filteredCharacters}           // <-- usar filteredCharacters
        numColumns={2}
        keyExtractor={(item) => item.id.toString()}
        columnWrapperStyle={{ gap: 12 }}
        contentContainerStyle={{
          padding: 8,
          alignItems: 'center',
        }}
        renderItem={({ item }) => <CharacterCard character={item} />}
      />
    </SafeAreaView>
  );
}
