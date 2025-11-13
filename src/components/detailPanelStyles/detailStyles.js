import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background, // cor de fundo geral
    alignItems: 'center',
    padding: 20,
  },

  image: {
    width: 220,
    height: 220,
    borderRadius: 110,
    borderWidth: 3,
    borderColor: colors.portalGreen,
    marginBottom: 24,
    shadowColor: colors.portalGreen,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 8,
  },

  name: {
    fontSize: 28,
    fontWeight: '800',
    color: colors.portalGreen,
    textAlign: 'center',
    marginBottom: 12,
    letterSpacing: 1,
  },

  infoContainer: {
    width: '100%',
    backgroundColor: colors.card,
    borderRadius: 16,
    paddingVertical: 20,
    paddingHorizontal: 18,
    shadowColor: colors.portalGreen,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
  },

  infoText: {
    fontSize: 16,
    color: colors.textPrimary,
    fontWeight: '600',
    marginBottom: 8,
  },

  label: {
    color: colors.textSecondary,
    fontWeight: '700',
    fontSize: 14,
    marginRight: 6,
    textTransform: 'uppercase',
  },

  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
});
