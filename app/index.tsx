import React from 'react';
import { Text, View, StyleSheet, Button, Image, TextInput, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  
  const handleLogin = () => {
    alert('Username: ${username}, Password: ${password}');
  }
  
  return (
    <LinearGradient
      colors={['rgba(217, 217, 217, 0)', 'rgba(54, 178, 178, 0.78)']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1.2, y: 1.2 }}
      style={styles.container}
    >
      <View style={styles.container}>

        <View>
          <Image
            style={styles.logo}
            source={require('../assets/images/logo.png')}
          />
          <Text style={styles.name}>MyHealth</Text>
        </View>
        <View>
          <Text style={styles.login}>Login</Text>
          <TextInput
            style={styles.input}
            placeholder="Username"
            value=''
            onChangeText={(text) => setUsername(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            value=''
            onChangeText={(text) => setPassword(text)}
            secureTextEntry
          />
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>

        </View>
        <View>
          <Text style={styles.fogotPassword}>Fogot Password</Text>
        </View>

      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
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
  },
  button: {
    width: 240,
    height: 40,
    backgroundColor: '#2B78E4',
    color: '#ffffff',
    borderRadius: 20,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 20,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
    fontWeight: 'bold',
  },
  fogotPassword: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20
  }
});
