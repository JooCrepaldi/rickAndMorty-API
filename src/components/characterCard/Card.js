import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { styles } from './CardStyle';

export default function CharacterCard() {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.card} activeOpacity={0.9}>
                <Image
                    source={{
                        uri: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
                    }}
                    style={styles.image}
                />
                <View style={styles.content}>
                    <Text style={styles.name}>Rick</Text>
                    <Text style={styles.status}>Alive</Text>

                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Ver Detalhes</Text>
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>
        </View>
    );
}
