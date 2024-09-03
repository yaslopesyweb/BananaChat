import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

interface PostProps {
    postImageSource: string;
}

const defaultImageSource = 'https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

export default function Post({ postImageSource }: PostProps) {
    return (
        <View style={styles.container}>
            <View style={styles.userInfoContainer}>
                <Image source={{ uri: defaultImageSource }} style={styles.profileImage} />
                <Text style={styles.usernameText}>Yasmmin Lopes</Text>
            </View>

            <Image source={{ uri: postImageSource }} style={styles.postImage} />

            <View style={styles.interactionContainer}>
                <View style={styles.iconTextPair}>
                    <AntDesign name="hearto" size={24} color="#484646" />
                    <Text style={styles.interactionText}> 128</Text>
                </View>
                <View style={styles.iconTextPair}>
                    <AntDesign name="message1" size={24} color="#484646" />
                    <Text style={styles.interactionText}> 41</Text>
                </View>
                <View style={styles.iconTextPair}>
                    <AntDesign name="sharealt" size={24} color="#484646" />
                    <Text style={styles.interactionText}> 60</Text>
                </View>
            </View>

            <View style={styles.commentContainer}>
                <Text style={styles.commentUser}>@yaslopesyweb</Text>
                <Text style={styles.commentText}>Ba-ba-ba-ba-ba-na-na</Text>
            </View>
            <View style={styles.commentContainer}>
                <Text style={styles.commentUser}>@gigi_teixeira</Text>
                <Text style={styles.commentText}>Atum lê amo titi chulé</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 8,
        padding: 8,
        borderRadius: 10,
        borderColor: '#FBDF4B',
        borderWidth: 2,
        backgroundColor: '#FFFFFF',
        gap: 8,
    },
    userInfoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    profileImage: {
        width: 40,
        height: 40,
        borderRadius: 20,
        borderColor: '#FBDF4B',
        borderWidth: 2,
    },
    usernameText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#484646',
        marginLeft: 8,
    },
    postImage: {
        width: '100%',
        height: 200,
        borderRadius: 8,
        marginBottom: 8,
    },
    interactionContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 8,
    },
    iconTextPair: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    interactionText: {
        fontSize: 10,
        color: '#484646',
        marginLeft: 4,
    },
    commentContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
    },
    commentUser: {
        fontSize: 12,
        fontWeight: 'bold',
    },
    commentText: {
        fontSize: 12,
    },
});
