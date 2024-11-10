import React, { useState } from 'react';
import { Text, View, StyleSheet, Button, Image, TextInput, TouchableOpacity, TouchableHighlight, TouchableNativeFeedback, TouchableWithoutFeedback, Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';

export default function App() {
    const navigation = useNavigation<any>();

    return (
        <LinearGradient
            colors={['rgba(217, 217, 217, 0)', 'rgba(54, 178, 178, 0.78)']}
            start={{ x: 0.8, y: 0.6 }}
            end={{ x: 1.0, y: 1.2 }}
            style={styles.container}
        >

            <View style={styles.header}>
                <Text style={styles.headerText}>MyHealth</Text>
                <FontAwesome name="bars" size={24} color="black" style={styles.menuIcon} />
            </View>

            <View style={styles.summary}>
                <View style={styles.iconRow}>
                    <FontAwesome name="fire" size={24} color="green" />
                    <Text style={styles.iconText}>540</Text>
                    <FontAwesome name="fire" size={24} color="orange" />
                    <Text style={styles.iconText}>250</Text>
                    <FontAwesome name="heart" size={24} color="red" />
                    <Text style={styles.iconText}>83</Text>
                </View>
            </View>

            <View style={styles.card}>
                <Text style={styles.cardTitle}>Daily Goals</Text>
                <View style={styles.progressBarContainer}>
                    <FontAwesome name="fire" size={20} color="green" />
                    <View style={styles.progressBar}>
                        <View style={[styles.progress, { width: '80%', backgroundColor: 'green' }]} />
                    </View>
                </View>
                <View style={styles.progressBarContainer}>
                    <FontAwesome name="fire" size={20} color="orange" />
                    <View style={styles.progressBar}>
                        <View style={[styles.progress, { width: '60%', backgroundColor: 'orange' }]} />
                    </View>
                </View>
                <View style={styles.progressBarContainer}>
                    <FontAwesome name="bicycle" size={20} color="blue" />
                    <View style={styles.progressBar}>
                        <View style={[styles.progress, { width: '40%', backgroundColor: 'blue' }]} />
                    </View>
                </View>
            </View>

            <View style={styles.card}>
                <Text style={styles.cardTitle}>Records</Text>
                <View style={styles.recordRow}>
                    <Text>Cycling</Text>
                    <Text style={styles.recordTime}>1:20:25</Text>
                </View>
                <View style={styles.recordRow}>
                    <Text>Swimming</Text>
                    <Text style={styles.recordTime}>0:45:12</Text>
                </View>
            </View>

            <View style={styles.card}>
                <Text style={styles.cardTitle}>Reminder</Text>
                <Text style={styles.reminderText}>Pill time in 3 Hours</Text>
                <TouchableOpacity style={styles.reminderButton}>
                    <Text style={styles.buttonText}>Add Reminder</Text>
                </TouchableOpacity>
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
        paddingTop: 20,
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    menuIcon: {
        padding: 10,
    },
    summary: {
        width: '90%',
        backgroundColor: '#f0f0f0',
        borderRadius: 10,
        padding: 15,
        marginVertical: 10,
    },
    iconRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    iconText: {
        fontSize: 18,
        marginHorizontal: 5,
    },
    card: {
        width: '90%',
        backgroundColor: '#e0e0e0',
        borderRadius: 10,
        padding: 15,
        marginVertical: 10,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    progressBarContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,
    },
    progressBar: {
        height: 10,
        width: '80%',
        backgroundColor: '#d3d3d3',
        borderRadius: 5,
        overflow: 'hidden',
        marginLeft: 10,
    },
    progress: {
        height: '100%',
    },
    recordRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 5,
    },
    recordTime: {
        color: 'red',
    },
    reminderText: {
        fontSize: 16,
        marginBottom: 10,
    },
    reminderButton: {
        backgroundColor: '#1e90ff',
        paddingVertical: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },

});
