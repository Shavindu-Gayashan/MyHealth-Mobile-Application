import React from 'react';
import { Text, View, StyleSheet, Button, Image, TextInput } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>

      <View>
        <Image
          style={styles.logo}
          source={require('../assets/images/logo.png')}
        />
        <Text style = {styles.name}>MyHealth</Text>
      </View>
      <View>
        <Text style={styles.login}>Login</Text>
        <TextInput 
          style={styles.input}
          placeholder="Username" 
        />
        <TextInput 
          style={styles.input}
          placeholder="Password" 
        />
      </View>
      <View style={styles.content}>
        <Text style={styles.contentText}>This is the main content area.</Text>
        <Button title="Click Me" onPress={() => alert('Button Pressed!')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between', // Adjust to your needs
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  header: {
    width: '100%',
    backgroundColor: '#6200ea',
    padding: 20,
    alignItems: 'center',
  },
  headerText: {
    color: '#ffffff',
    fontSize: 24,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  contentText: {
    fontSize: 18,
  },
  footer: {
    width: '100%',
    backgroundColor: '#6200ea',
    padding: 10,
    alignItems: 'center',
  },
  footerText: {
    color: '#ffffff',
  },
  logo: {
    width: 120,
    height: 120,
    marginTop: 60,
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Oldenburg-Regular',
  },
  input: {
    height: 40,
    margin: 12,
    backgroundColor: '#ffffff',
    borderRadius: 5,
    padding: 10,
    width: 300,
    fontSize: 16,
  },
  login: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: 'center',
    marginTop: 50,
    marginBottom: 20,
  }
});
