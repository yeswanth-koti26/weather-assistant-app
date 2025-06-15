import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  Platform,
  Button,
} from 'react-native';
import * as Location from 'expo-location';
import axios from 'axios';
import * as Notifications from 'expo-notifications';

export default function HomeScreen({ navigation }) {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission denied');
        setLoading(false);
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = location.coords;

      try {
        const res = await axios.get(
          `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
        );
        setWeather(res.data.current_weather);

        if (Platform.OS !== 'web') {
          const tokenResponse = await Notifications.getExpoPushTokenAsync();
          const pushToken = tokenResponse.data;

          await axios.post('http://192.168.1.70:3001/send-alert', {
            pushToken,
            location: { latitude, longitude },
          });
        }
      } catch (err) {
        console.error(err);
        setErrorMsg('Failed to fetch weather or send notification');
      }

      setLoading(false);
    })();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>🌤️ Weather Assistant</Text>
      {loading ? (
        <ActivityIndicator size="large" />
      ) : errorMsg ? (
        <Text style={styles.error}>{errorMsg}</Text>
      ) : weather ? (
        <View style={styles.card}>
          <Text style={styles.label}>Temperature: {weather.temperature}°C</Text>
          <Text style={styles.label}>Wind Speed: {weather.windspeed} km/h</Text>
          <Text style={styles.label}>Condition Code: {weather.weathercode}</Text>
        </View>
      ) : (
        <Text>No data available.</Text>
      )}
      <View style={{ marginTop: 20 }}>
        <Button title="Go to About" onPress={() => navigation.navigate('About')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  label: { fontSize: 18, marginVertical: 4 },
  card: {
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    elevation: 3,
  },
  error: { color: 'red', marginBottom: 10 },
});
