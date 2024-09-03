import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface RowButtonsProps {
    onPress?: () => void;
}

export default function RowButtons({ onPress }: RowButtonsProps) {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onPress} style={styles.buttonPrimary}>
                <Text style={styles.buttonText}>Enviar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onPress} style={styles.buttonSecondary}>
                <Text style={[styles.buttonText, styles.buttonTextSecondary]}>Cancelar</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        marginVertical: 20,
        height: 50,
    },
    buttonPrimary: {
        flex: 1,
        marginRight: 5,
        backgroundColor: '#FBDF4B',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    buttonSecondary: {
        flex: 1,
        marginLeft: 5,
        backgroundColor: '#484646',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    buttonTextSecondary: {
        color: '#FFFFFF',
    },
});
