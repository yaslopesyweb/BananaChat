import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

interface ButtonProps {
    onPress?: () => void;
}

export default function LoadImageButton({ onPress }: ButtonProps) {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <MaterialIcons name="add-a-photo" size={24} color="#484646" />
            <Text style={styles.textButton}>Adicionar Imagem</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 4,
        borderRadius: 4,
        gap: 8,
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: 117,
        backgroundColor: "#d9d9d9",
    },
    textButton: {
        color: "#484646",
        fontSize: 16,
        fontWeight: "bold",
    },
});
