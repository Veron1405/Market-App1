import { StyleSheet } from 'react-native';
import colors from '../themes/colors';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: colors.background,
  },
  image: {
    width: '100%',
    height: 300,
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 10,
    color: colors.text,
  },
  price: {
    fontSize: 20,
    color: colors.accent,
    marginVertical: 10,
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
    marginHorizontal: 20,
    color: colors.textSecondary,
  },
});

export default styles;
