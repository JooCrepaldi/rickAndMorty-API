import React from 'react';
import { StyleSheet } from 'react-native';

export const colors = {
  // base
  bg: '#0f0f0f',      // app background (escuro)
  bgLight: '#202020',            // cartas / cards
  border: '#38383aff',          // bordas sutis

  // icônicos / destaque
  green: '#5dd62c',     
  greenDark: '#337418',  

  // texto / estados
  title: '#f8f8f8',
  secondaryTitle: '#BFC4C9',
  muted: '#6B6F73',
  success: '#2ECC71',
  danger: '#FF6B6B',
};

export const styles = StyleSheet.create({
  bg: {
    backgroundColor: colors.bg,
  },
  bgLight: {
    backgroundColor: colors.bgLight,
  },
  border: {
    borderColor: colors.border,
  },
  green: {
    tintColor: colors.green,
  },
  greenDark: {
    tintColor: colors.greenDark,
  },
  title: {
    color: colors.title,
  },
  secondaryTitle: {
    color: colors.secondaryTitle,
  },
  danger: {
    color: colors.danger,
  },
  muted: {
    color: colors.muted,
  },
  success: {
    color: colors.success,
  },
});
