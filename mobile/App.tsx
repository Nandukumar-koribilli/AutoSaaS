import { ActionSheetIOS, StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';
import { StatusBar } from 'expo-status-bar';
import React from 'react';

export default function App() {
  // NOTE: We detected the working IP from your screenshot.
  const uri = 'http://192.168.29.140:5173'; 

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <WebView 
        source={{ uri }} 
        style={styles.webview}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        startInLoadingState={true}
        renderError={(errorName) => (
             <View style={styles.errorContainer}>
               <Text style={styles.errorText}>Could not load app.</Text>
               <Text style={styles.errorSubText}>Ensure the dev server is running.</Text>
               <Text style={{color: 'gray', marginTop: 10}}>Target: {uri}</Text>
             </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  webview: {
    flex: 1,
    marginTop: 40, // Safe area for status bar
  },
  errorContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  errorSubText: {
    fontSize: 14,
    color: '#666',
  }
});
