import React, { useEffect } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from './CardStyle';

import { useNavigation } from '@react-navigation/native';

import { characterService } from '../../services/characterService';

export default function CharacterCard({ character }) {
    const navigation = useNavigation();

    const getID = async (id) => {
        try {
          const data = await characterService.getById(id);
          console.log('Personagem retornado:', data);
         
          navigation.navigate('CharacterDetail', { character: data });
        } catch (error) {
          console.error('Erro ao buscar personagem:', error);
        }
      };

      const getStatusColor = () => {
        switch(character.status) {
            case 'Alive':
                return styles.status.Alive;
            case 'Dead':
                return styles.status.Dead;
            default:
                return styles.status;
        }
    };

    return (
        <View>
            <TouchableOpacity
                style={styles.card}
                activeOpacity={0.9}
                onPress={() => getID(character.id)}//preciso pegar o id do personagem
            >
                <Image
                    source={{ uri: character.image }}
                    style={styles.image}
                />
                <View style={styles.content}>
                    <Text style={styles.name}>{character.name}</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
                        <Text style={styles.statusPart}>Status:</Text>
                        <Text style={getStatusColor()}>{character.status}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
}
