import { StyleSheet, Dimensions, Platform } from 'react-native';
import { colors } from '../../theme/colors';

const { width } = Dimensions.get('window');
const IMAGE_HEIGHT = Math.round(width * 0.9); // altura numérica responsiva

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.bg,
  },

  container: {
    width: '100%',
    alignItems: 'flex-start', 
    paddingHorizontal: 20,
    paddingBottom: 32,
    paddingTop: 16,
  },

  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.bg,
  },

  image: {
    width: '100%',
    height: IMAGE_HEIGHT,
    borderRadius: 24,
    marginBottom: 20,
    backgroundColor: colors.bgLight,
  },

  name: {
    fontSize: 26,
    flex: 1,
    flexShrink: 1,
    textAlign: 'left',
    fontWeight: '800',
    color: colors.green,
    letterSpacing: 0.6,
  },

  infoContainer: {
    width: '100%',
    backgroundColor: colors.bgLight,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.border,
    paddingVertical: 18,
    paddingHorizontal: 16,
  },

  infoText: {
    fontSize: 16,
    color: colors.title,
    fontWeight: '600',
  },

  label: {
    color: colors.secondaryTitle,
    fontWeight: '700',
    fontSize: 13,
    marginRight: 8,
    textTransform: 'uppercase',
  },

  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },

  button: {
    width: 80,
    height: 44,
    borderRadius: 100,
    backgroundColor: colors.bgLight,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 12,
    borderWidth: 1,
    borderColor: colors.border,
  },

  bookmarkIcon: {
    width: 22,
    height: 22,
  },
});
