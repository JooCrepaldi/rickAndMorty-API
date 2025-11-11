import React from 'react';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
    },

    card: {
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        padding: 16,
        width: '92%',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.15,
        shadowRadius: 12,
        elevation: 8,
        alignItems: 'center',
    },

    image: {
        width: 100,
        height: 100,
        borderRadius: 16,
        marginRight: 16,
    },

    content: {
        flex: 1,
        justifyContent: 'center',
    },

    name: {
        fontFamily: 'ShadowsIntoLight_400Regular',
        fontSize: 20,
        fontWeight: '700',
        color: '#1E293B', // azul petróleo
        marginBottom: 6,
    },

    status: {
        fontSize: 15,
        color: '#64748B',
        marginBottom: 10,
    },
});
