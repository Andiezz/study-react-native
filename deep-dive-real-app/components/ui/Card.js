import { View, StyleSheet } from 'react-native';

import Colors from '../../constants/colors';

function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
}

export default Card;

const styles = StyleSheet.create({
  card: {
    justifyContent: 'center',
    alignItem: 'center',
    marginTop: 36,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    // android
    elevation: 4,
    // ios
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6, // expand ?
    shadowOpacity: 0.25, // transparent
  },
});
