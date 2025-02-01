import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Linking } from 'react-native';

export default function App() {
  // Replace the URL with your actual GitHub repo URL
  const gitHubRepoUrl = 'https://github.com/ledgent/react-mobile-app';
  // Example HNG Hire Pages URL (update if needed)
  const hngHireUrl = 'https://hng.tech';

  const openUrl = async (url) => {
    // Check if the URL can be opened
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    } else {
      alert(`Don't know how to open this URL: ${url}`);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>React Mobile App</Text>
      
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => openUrl(gitHubRepoUrl)}
      >
        <Text style={styles.buttonText}>Visit GitHub Repository</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.button} 
        onPress={() => openUrl(hngHireUrl)}
      >
        <Text style={styles.buttonText}>Visit HNG Hire Pages</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    marginVertical: 10,
    borderRadius: 5,
    width: '80%',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
});
