import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';

const AboutScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://github.com/AreaLayer/FireBolt/raw/main/src/asset/firebolt_logo_readme.png' }} 
          style={styles.logo}
        />
        <Text style={styles.title}>About Our App</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.text}>
            Firebolt Wallet is an app that allows you to manage your Bitcoin and transactions securely. You can create a new wallet, import an existing wallet, and manage your funds. Beyond allow Lightning Network, Coinjoin, Payjoin and more.
        </Text>
        
        <Text style={styles.text}>
          Check our GitHub repository: https://github.com/AreaLayer/firebolt-react-native
        </Text>
        <Text style={styles.text}>
          Created by: AreaLayer
          </Text>
        <Text style={styles.text}>
          Version: 1.0.22-alpha
        </Text>

        <Text style={styles.text}>
          For support or inquiries, please contact us at: arealayer@gmail.com
        </Text>

        <Text style={styles.text}>
          Thank you for using our app!
        </Text>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  content: {
    paddingVertical: 20,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    color: '#666',
    marginBottom: 10,
  },
});

export default AboutScreen;
