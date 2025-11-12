import React from 'react';
import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';

export const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 12,
        paddingVertical: 8,
    },

    card: {
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
    },

    image: {
        width: '100%',
        height: 220,
        backgroundColor: colors.background,
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

    button: {
        backgroundColor: colors.rickBlue,
        paddingVertical: 11,
        paddingHorizontal: 16,
        borderRadius: 8,
        marginTop: 10,
        alignItems: 'center',
        opacity: 1,
    },

    buttonText: {
        color: colors.background,
        fontWeight: '700',
        fontSize: 13,
        letterSpacing: 0.4,
    },
});
