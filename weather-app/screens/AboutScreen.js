import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function AboutScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About Weather Assistant</Text>
      <Text style={styles.text}>
        This is a personal weather assistant app built with React Native and Open-Meteo API.
      </Text>
      <Text style={styles.text}>
        It displays real-time weather based on your location and sends push notifications
        for extreme weather alerts like high temperature and wind.
      </Text>
      <Text style={styles.text}>
        Technologies: React Native, Expo, Express.js, Node.js, Open-Meteo API
      </Text>
      <View style={{ marginTop: 20 }}>
        <Button title="Back to Home" onPress={() => navigation.navigate('Home')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  text: { fontSize: 16, marginBottom: 10 },
});
