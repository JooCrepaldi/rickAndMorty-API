import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';

const { width } = Dimensions.get('window');
const INPUT_WIDTH = width - 48

export const styles = StyleSheet.create({
    image: {
        width: 200,
        height: 60,
        resizeMode: 'contain'
    },
    title: {
        fontSize: 32,
        color: '#ffff'
    },
    input: {
        backgroundColor: colors.card,
        height: 40,
        paddingHorizontal: 10,
        width: INPUT_WIDTH,
        marginBottom: 20,
    }
})