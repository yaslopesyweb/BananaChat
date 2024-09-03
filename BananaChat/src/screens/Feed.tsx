import { SafeAreaView, ScrollView, StyleSheet, Text, View, Image } from "react-native";
import Header from "../components/Header";
import Post from "../components/Post";
import React from "react";

const postImageSources = [
    'https://images.unsplash.com/photo-1515041219749-89347f83291a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2022/05/03-e1653929996954.jpg?w=1024',
    'https://akamai.sscdn.co/uploadfile/letras/fotos/8/1/1/4/8114912e15fa1a499e2f15d0012bae54.jpg',
    'https://i.pinimg.com/474x/3a/9f/eb/3a9feb4fa16119879d996f62354c3d0b.jpg',
    'https://www.universalpics.com.br/tl_files/content/movies/minions2/minions2_header-mobile.jpg',
];

const headerSource = 'https://images.unsplash.com/photo-1555786750-7c3c2b9a6b0e?q=80&w=2068&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

export default function Feed() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Header source={headerSource} />
                <View style={styles.content}>
                    <View style={styles.userInfo}>
                        <Image source={{ uri: headerSource }} style={styles.userImage} />
                        <View>
                            <Text style={styles.userName}>Yasmin Lopes</Text>
                            <Text style={styles.username}>@yaslopesyweb</Text>
                        </View>
                    </View>
                    {postImageSources.map((uri, index) => (
                        <Post key={index} postImageSource={uri} />
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FAF9F9',
    },
    content: {
        padding: 16,
        gap: 16,
    },
    userInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 4,
        gap: 8,
    },
    userImage: {
        width: 60,
        height: 60,
        borderRadius: 100,
        borderWidth: 4,
        borderColor: '#FBDF4B',
    },
    userName: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#484646',
    },
    username: {
        fontSize: 12,
        color: '#484646',
    },
});
