import { colors } from '../../theme/colors';
import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const INPUT_WIDTH = width - 32;

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.bgLight,
    height: 44,
    paddingHorizontal: 12,
    width: INPUT_WIDTH,
    marginBottom: 20,
    marginTop: 30,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: colors.border,
  },

  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
    tintColor: colors.secondaryTitle, // opcional: colore o ícone se for PNG monocromático
  },

  input: {
    flex: 1,
    color: colors.title,
    fontSize: 14,
    padding: 0,
  },
});