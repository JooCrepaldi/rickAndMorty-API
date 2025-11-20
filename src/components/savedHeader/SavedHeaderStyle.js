import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.bgLight,
    paddingBottom: 18,
    paddingTop: 18,
    paddingLeft: 28,
    paddingRight: 28,
    marginBottom: 32,
    borderRadius: 100,
    borderColor: colors.border,
    borderWidth: 1,
    marginTop: 20,
  },

  text: {
    fontSize: 18,        // antes 22
    fontWeight: '700',
    color: colors.green,
    letterSpacing: 0.5,
    textTransform: 'uppercase',
  },
});
