import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CharacterCard from '../components/characterCard/Card';

export default function CharactersListScreen({navigation}) {
  return (
    <SafeAreaView style={{flex: 1}}>
        <CharacterCard/>
    </SafeAreaView>
  );
}