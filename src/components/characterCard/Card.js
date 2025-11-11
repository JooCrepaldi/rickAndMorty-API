import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from './CardStyle';

export default function CharacterCard({character}) {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.card} activeOpacity={0.9}>
                <Image
                    source={{uri: character.image}}
                    style={styles.image}
                />
                <View style={styles.content}>
                    <Text style={styles.name}>{character.name}</Text>
                    <Text style={styles.status}>{character.status}</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}
