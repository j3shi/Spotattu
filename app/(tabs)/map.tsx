import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import * as Location from 'expo-location';
import MapView, { Marker } from 'react-native-maps';

export default function MapScreen() {
    const [status, requestPermission] = Location.useForegroundPermissions();

    if(!status) {
        return <View style={styles.container}><Text>Loading...</Text></View>;
    }

    if(!status.granted) {
        return (
            <View style={styles.container}>
                <Text style={styles.notGranted}>
                    Spotattu needs your location to show what's trending around you!
                </Text>
                <Button title="Enable Location" onPress={requestPermission}></Button>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <MapView
            style={styles.map}
            showsUserLocation={true}
            followsUserLocation={true}
            initialRegion={{
                latitude: 62.2426,
                longitude: 25.7473,
                latitudeDelta: 0.05,
                longitudeDelta: 0.05,
            }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    notGranted: {
        textAlign: 'center',
        marginBottom: 20,
    },
    map: {
        width: '100%',
        height: '100%',
    },
})