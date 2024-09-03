import React from "react";
import { Text, TextInput, View, StyleSheet } from "react-native";
import LoadImageButton from "./LoadImageButton";

export default function NewPost(){
    return(
        <View style={styles.post}>
            <View>
                <Text style={styles.postTitle}>Título</Text>
                <TextInput placeholderTextColor={'#7E7070'}
                style={styles.postTextInput} placeholder="Insira um título"/>
            </View>
            <View>
                <Text style={styles.postTitle}>Imagem</Text>
                <LoadImageButton/>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    post:{
        paddingHorizontal: 8,
        gap: 32,
        marginTop:8
    },
    postTitle:{
        paddingHorizontal: 4,
        paddingVertical: 4,
        fontSize: 16,
        color:'#484646',
        fontWeight: 'bold'
    },
    postTextInput:{
        borderRadius:8,
        borderWidth: 1,
        borderColor: '#D9D9D9',
        height:60,
        paddingHorizontal: 8
    }

})