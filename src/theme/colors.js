import React from 'react';
import { StyleSheet } from 'react-native';

export const colors = {
  // base
  background: '#141414',      // app background (escuro)
  card: '#1E1E1F',            // cartas / cards
  border: '#2A2A2B',          // bordas sutis
  glass: 'rgba(255,255,255,0.04)',

  // icônicos / destaque
  portalGreen: '#00FF7F',     // verde "portal" neon
  rickBlue: '#88E8FF',        // azul claro do Rick
  mortyYellow: '#FFD54A',     // amarelo da camiseta do Morty
  accentPurple: '#7C4DFF',    // roxo para contrastes

  // texto / estados
  textPrimary: '#FFFFFF',
  textSecondary: '#BFC4C9',
  muted: '#6B6F73',
  success: '#2ECC71',
  danger: '#FF6B6B',
};

export const styles = StyleSheet.create({
  appBackground: {
    backgroundColor: colors.background,
  },
  cardBackground: {
    backgroundColor: colors.card,
  },
  border: {
    borderColor: colors.border,
  },
  logoTint: {
    tintColor: colors.rickBlue,
  },
  titleText: {
    color: colors.textPrimary,
  },
  subtitleText: {
    color: colors.textSecondary,
  },
});
