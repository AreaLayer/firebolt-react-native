import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export const Receive = () => {
    const navigation = useNavigation();
    
    // Using state to manage the address with a default message
    const [bitcoinAddress, setBitcoinAddress] = useState("Generate an address to receive Bitcoin");
    
    // Function to handle copying address to clipboard
    const handleCopyAddress = () => {
        if (bitcoinAddress !== "Generate an address to receive Bitcoin") {
            console.log("Address copied to clipboard:", bitcoinAddress);
            // In a real app, you'd use Clipboard here
        } else {
            console.log("No address to copy");
            // You could add a toast notification here
        }
    };

    // Function to simulate generating a new address
    const handleGenerateAddress = () => {
        // In a real app, this would call a wallet API
        const newAddress = "bc1q" + Math.random().toString(36).substring(2, 15);
        setBitcoinAddress(newAddress);
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

                <TouchableOpacity 
                    style={styles.generateButton}
                    onPress={handleGenerateAddress}
                >
                    <Text style={styles.generateButtonText}>Generate New Address</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity
                style={styles.backButton}
                onPress={() => navigation.goBack()}
            >
                <Text style={styles.backButtonText}>Back</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    addressContainer: {
        backgroundColor: '#f5f5f5',
        padding: 15,
        borderRadius: 8,
        marginBottom: 20,
    },
    label: {
        fontSize: 16,
        marginBottom: 10,
    },
    address: {
        fontSize: 14,
        color: '#333',
        marginBottom: 15,
    },
    copyButton: {
        backgroundColor: '#007AFF',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 10,
    },
    copyButtonText: {
        color: '#fff',
        fontSize: 16,
    },
    generateButton: {
        backgroundColor: '#4CAF50',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    generateButtonText: {
        color: '#fff',
        fontSize: 16,
    },
    backButton: {
        backgroundColor: '#666',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    backButtonText: {
        color: '#fff',
        fontSize: 16,
    },
});

export default Receive;