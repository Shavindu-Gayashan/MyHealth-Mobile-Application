import React, { useState } from 'react';
import { Text, View, StyleSheet, Button, Image, TextInput, TouchableOpacity, TouchableHighlight, TouchableNativeFeedback, TouchableWithoutFeedback, Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        console.log('Login Pressed');
        console.log('Username:', username);
        setUsername('');
        setPassword('');
    }

    const handleSignUp = () => {
        console.log('Sign Up Pressed');
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
                </View>
                <View>
                    <Text style={styles.name}>Eazy Shopping</Text>
                </View>
                <View>
                    <Text style={styles.login}>Login</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Username"
                        value={username}
                        onChangeText={setUsername}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                    />
                    <TouchableOpacity style={styles.button} onPress={handleLogin}>
                        <Text style={styles.buttonTextLight}>Login</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button} onPress={handleSignUp}>
                        <Text style={styles.buttonTextLight}>Sign Up</Text>
                    </TouchableOpacity>

                </View>
                <View>
                    <Text style={styles.fogotPassword}>Fogot Password</Text>
                </View>
                <View>
                    <TouchableOpacity style={styles.socialButton} onPress={handleSignUp}>
                        <Image
                            style={styles.socialIcon}
                            source={require('../assets/images/google.png')}
                        />
                        <Text style={styles.socialButtonText}>Login with Google</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.socialButton} onPress={handleSignUp}>
                        <Image
                            style={styles.socialIcon}
                            source={require('../assets/images/facebook.png')}
                        />
                        <Text style={styles.socialButtonText}>Login with Facebook</Text>
                    </TouchableOpacity>
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
    socialButton: {
        flexDirection: 'row',
        width: 240,
        height: 40,
        backgroundColor: '#FFFFFF',
        opacity: 0.7,
        color: '#000000',
        borderRadius: 20,
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: 20,
    },
    buttonTextLight: {
        color: '#ffffff',
        fontSize: 16,
        textAlign: 'center',
        marginTop: 10,
        fontWeight: 'bold',
    },
    socialButtonText: {
        flex: 9,
        color: '#000000',
        fontSize: 16,
        textAlign: 'center',
        marginTop: 10,
        fontWeight: 'bold',
    },
    fogotPassword: {
        fontSize: 16,
        textAlign: 'center',
        marginTop: 20,
    },
    top: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    socialIcon:{
        flex : 1,
        width: 20,
        height: 20,
        margin: 10,
        marginLeft: 20,
        opacity: 1
    }
});
