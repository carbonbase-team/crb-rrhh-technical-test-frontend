/**
 * Carbonbase Technical Test
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { SafeAreaView, StatusBar, StyleSheet, Text, useColorScheme, View } from 'react-native';
import Wallet from './src/components/Wallet';
import Fonts from './src/assets/fonts';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView style={styles.wrapper}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={styles.container}>
        <Text style={styles.h1}>
          Carbonbase Technical Test
        </Text>
      </View>
      <Text style={styles.p}>
        Edit <Text style={styles.bold}>src/components/Wallet.js</Text> to start working on your test!
      </Text>
      <Wallet />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fcfcfc',
  },
  container: {
    alignItems: 'center',
    backgroundColor: '#3A2B41',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,

  },
  h1: {
    color: '#FFB8BA',
    fontSize: 24,
    fontFamily: Fonts.bold,
  },
  p: {
    color: '#3A2B41',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    fontFamily: Fonts.regular,
  },
  bold: {
    fontWeight: 'bold',
  },
});

export default App;
