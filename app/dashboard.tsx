import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
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
            <ScrollView contentContainerStyle={{ alignItems: 'center', paddingBottom: 20 }}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>MyHealth</Text>
                    <FontAwesome name="bars" size={24} color="black" style={styles.menuIcon} />
                </View>

                <View style={styles.summary}>
                    <View style={styles.iconRow}>
                        <Image style={styles.icon} source={require('../assets/images/steps.png')} />
                        <Text style={styles.iconText}>540</Text>
                        <Image style={styles.icon} source={require('../assets/images/burn.png')} />
                        <Text style={styles.iconText}>250</Text>
                        <Image style={styles.icon} source={require('../assets/images/heart.png')} />
                        <Text style={styles.iconText}>83</Text>
                    </View>
                </View>

                <View style={styles.card}>
                    <Text style={styles.cardTitle}>Daily Goals</Text>
                    <View style={styles.progressBarContainer}>
                        <Image style={styles.icon} source={require('../assets/images/steps.png')} />
                        <View style={styles.progressBar}>
                            <View style={[styles.progress, { width: '80%', backgroundColor: 'green' }]} />
                        </View>
                    </View>
                    <View style={styles.progressBarContainer}>
                        <Image style={styles.icon} source={require('../assets/images/burn.png')} />
                        <View style={styles.progressBar}>
                            <View style={[styles.progress, { width: '60%', backgroundColor: 'orange' }]} />
                        </View>
                    </View>
                    <View style={styles.progressBarContainer}>
                        <Image style={styles.icon} source={require('../assets/images/run.png')} />
                        <View style={styles.progressBar}>
                            <View style={[styles.progress, { width: '40%', backgroundColor: 'blue' }]} />
                        </View>
                    </View>
                </View>

                <View style={styles.card}>
                    <Text style={styles.cardTitle}>Records</Text>
                    <View style={styles.recordRow}>
                        <Text style={styles.recordData}>Cycling</Text>
                        <Text style={styles.recordTime}>1:20:25</Text>
                    </View>
                    <View style={styles.recordRow}>
                        <Text style={styles.recordData}>Swimming</Text>
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

                <View style={styles.card}>
                    <Text style={styles.cardTitle}>Activities</Text>
                    <Text style={styles.reminderText}>Go for a 30-minute walk</Text>
                    <TouchableOpacity style={styles.activityButton}>
                        <Text style={styles.buttonText}>Start Activity</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
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
        fontSize: 26,
        fontWeight: 'bold',
    },
    menuIcon: {
        padding: 20,
    },
    icon: {
        width: 40,
        height: 40,
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
        fontSize: 23,
        marginHorizontal: 5,
        marginVertical: 5,
        
    },
    card: {
        width: '90%',
        backgroundColor: '#e0e0e0',
        borderRadius: 10,
        padding: 15,
        marginVertical: 10,
    },
    cardTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    progressBarContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,
    },
    progressBar: {
        height: 20,
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
        fontSize: 18,
    },
    recordData: {
        fontSize: 18,
    },
    reminderText: {
        fontSize: 18,
        marginBottom: 10,
    },
    reminderButton: {
        backgroundColor: '#1e90ff',
        paddingVertical: 10,
        borderRadius: 20,
        alignItems: 'center',
    },
    activityButton: {
        backgroundColor: '#1e90ff',
        paddingVertical: 10,
        borderRadius: 20,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        
    },

});
