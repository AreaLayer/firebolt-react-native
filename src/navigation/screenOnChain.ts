import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { generateInvoice } from "../app/lightning";
import { SCREEN_ONX_ADDRESS } from "../app/constants";
import * as nostrInterface from "../utils/nostr/encryption"; // Evita conflito de palavras-chave

// Tipagem correta dos parâmetros de navegação
interface NavigationParams {
  OnboardingHome: undefined;
  Send: undefined;
  Receive: undefined;
  generateInvoice: undefined;
  generateAddress: undefined;
}

// Tipagem para armazenamento de invoice na blockchain
interface ScreenOnChain {
  [key in typeof SCREEN_ONX_ADDRESS]: {
    invoice: string;
  };
}

export const Receive: React.FC = () => {
  const navigation = useNavigation<NavigationProp<NavigationParams>>();
  const [bitcoinAddress, setBitcoinAddress] = useState(
    "Generate an address to receive Bitcoin"
  );
  const [invoice, setInvoice] = useState<string | null>(null);

  // Copiar endereço para área de transferência
  const handleCopyAddress = () => {
    if (bitcoinAddress !== "Generate an address to receive Bitcoin") {
      console.log("Address copied to clipboard:", bitcoinAddress);
    } else {
      console.log("No address to copy");
    }
  };

  // Gerar novo endereço Bitcoin
  const handleGenerateAddress = () => {
    const newAddress = "bc1q" + Math.random().toString(36).substring(2, 15);
    setBitcoinAddress(newAddress);
  };

  // Gerar fatura Lightning
  const handleGenerateInvoice = async () => {
    try {
      const newInvoice = await generateInvoice();
      setInvoice(newInvoice);
    } catch (error) {
      console.error("Failed to generate invoice:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Receive Bitcoin</Text>

      <View style={styles.addressContainer}>
        <Text style={styles.label}>Your Bitcoin Address:</Text>
        <Text style={styles.address} selectable>
          {bitcoinAddress}
        </Text>

        <TouchableOpacity
          style={styles.copyButton}
          onPress={handleCopyAddress}
          disabled={bitcoinAddress === "Generate an address to receive Bitcoin"}
        >
          <Text style={styles.copyButtonText}>Copy Address</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.generateButton} onPress={handleGenerateAddress}>
          <Text style={styles.generateButtonText}>Generate New Address</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.invoiceButton} onPress={handleGenerateInvoice}>
          <Text style={styles.invoiceButtonText}>Generate Lightning Invoice</Text>
        </TouchableOpacity>

        {invoice && (
          <View style={styles.invoiceContainer}>
            <Text style={styles.label}>Lightning Invoice:</Text>
            <Text style={styles.address} selectable>
              {invoice}
            </Text>
          </View>
        )}
      </View>

      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  addressContainer: {
    backgroundColor: "#f5f5f5",
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
  },
  invoiceContainer: {
    marginTop: 15,
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
  },
  address: {
    fontSize: 14,
    color: "#333",
    marginBottom: 15,
  },
  copyButton: {
    backgroundColor: "#007AFF",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 10,
  },
  copyButtonText: {
    color: "#fff",
    fontSize: 16,
  },
  generateButton: {
    backgroundColor: "#4CAF50",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 10,
  },
  generateButtonText: {
    color: "#fff",
    fontSize: 16,
  },
  invoiceButton: {
    backgroundColor: "#FFA500",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 10,
  },
  invoiceButtonText: {
    color: "#fff",
    fontSize: 16,
  },
  backButton: {
    backgroundColor: "#666",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  backButtonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default Receive;
