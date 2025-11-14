import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';


const { width } = Dimensions.get('window');
const CARD_WIDTH = (width / 2) - 24; // ajuste como preferir

export const styles = StyleSheet.create({
    card: {
        flex: 1,
        backgroundColor: colors.card,
        borderRadius: 24,
        overflow: 'hidden',
        shadowColor: colors.portalGreen,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 8,
        elevation: 6,
        borderWidth: 1,
        borderColor: colors.border,
        width: CARD_WIDTH, 
        marginBottom: 15
    },

    image: {
        width: '100%',
        height: 180,   // reduzido para caber em 2 colunas
        backgroundColor: colors.background
    },
    
    content: {
        paddingHorizontal: 16,
        paddingVertical: 14,
        backgroundColor: colors.card,//aqui é a cor do card!
    },

    name: {
        fontSize: 18,
        fontWeight: '800',
        color: colors.portalGreen,
        marginBottom: 6,
        letterSpacing: 0.5,
    },

    status: {
        fontSize: 12,
        color: colors.textSecondary,
        marginBottom: 10,
        fontWeight: '600',
        textTransform: 'uppercase',
        letterSpacing: 0.3,
    },
});
