import React from 'react';
import { Text, ScrollView, StyleSheet } from 'react-native';

const TermsOfServiceScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Terms of Service</Text>
      <Text style={styles.subHeader}>Last Updated: March 21, 2025</Text>

      <Text style={styles.sectionTitle}>1. Acceptance of Terms</Text>
      <Text style={styles.text}>
        By using this application (“App”), you agree to these Terms of Service (“Terms”). If you do not agree, do not use the App.
      </Text>

      <Text style={styles.sectionTitle}>2. Nature of the App</Text>
      <Text style={styles.text}>
        This App provides a tool for CoinJoin, a method to enhance cryptocurrency transaction privacy. It is provided “as is,” without any warranties, express or implied, including but not limited to functionality, security, or uninterrupted service. You use the App at your own risk.
      </Text>

      <Text style={styles.sectionTitle}>3. Non-Custodial Service</Text>
      <Text style={styles.text}>
        The App does not store, control, or take custody of your cryptocurrency or private keys. You are solely responsible for securing your funds and managing your transactions.
      </Text>

      <Text style={styles.sectionTitle}>4. User Responsibility</Text>
      <Text style={styles.text}>
        You are responsible for ensuring your use of the App complies with all applicable laws, regulations, and rules in your jurisdiction. The App does not guarantee anonymity or protection from legal consequences arising from your actions.
      </Text>

      <Text style={styles.sectionTitle}>5. Prohibited Use</Text>
      <Text style={styles.text}>
        You may not use the App for illegal activities, including but not limited to money laundering, fraud, or other financial crimes. Any such use is strictly prohibited.
      </Text>

      <Text style={styles.sectionTitle}>6. Limitation of Liability</Text>
      <Text style={styles.text}>
        The developer of this App is not liable for any damages, losses, or legal issues resulting from your use of the App, including loss of funds, data, or regulatory actions. You assume all risks associated with its use.
      </Text>

      <Text style={styles.sectionTitle}>7. Changes and Termination</Text>
      <Text style={styles.text}>
        These Terms may be modified, or the App may be discontinued, at the developer’s sole discretion, with or without notice. Continued use after changes constitutes acceptance of the updated Terms.
      </Text>

      <Text style={styles.sectionTitle}>8. Governing Law</Text>
      <Text style={styles.text}>
        These Terms are governed by the laws of [Insert Jurisdiction, e.g., Switzerland], without regard to conflict of law principles.
      </Text>

      <Text style={styles.sectionTitle}>9. Contact</Text>
      <Text style={styles.text}>
        For questions, contact [insert your preferred contact method].
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subHeader: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 5,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333',
  },
});

export default TermsOfServiceScreen;