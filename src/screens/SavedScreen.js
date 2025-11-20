import { useFavorites } from '../context/FavoritesContext';
import CharacterCard from '../components/characterCard/Card';
import { characterService } from '../services/characterService';
import { useState, useEffect } from "react";
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList } from 'react-native';
import { colors } from '../theme/colors';
import SavedHeader  from '../components/savedHeader/SavedHeader'

export default function SavedScreen() {
  const { favorites } = useFavorites();
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    async function load() {
      const data = await Promise.all(
        favorites.map(id => characterService.getById(id))
      );
      setCharacters(data);
    }
    load();
  }, [favorites]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.bg }}>
      <FlatList
        ListHeaderComponent={<SavedHeader/>}
        data={characters}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <CharacterCard character={item} />}
        columnWrapperStyle={{ gap: 12 }}
        contentContainerStyle={{
          padding: 8,
          alignItems: 'center',
        }}
        numColumns={2}
      />
    </SafeAreaView>

  );
}
