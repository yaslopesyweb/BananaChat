import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import Header from "../components/Header";
import User from "../components/User";
import Post from "../components/NewPost";
import RowButtons from "../components/RowButtons";
import { StackNavigationProp } from "@react-navigation/stack";

import React from "react";
import { RootStackParamsList } from "../../types/navigation";

type NewPostScreenNavigationProp = StackNavigationProp<RootStackParamsList, 'New'>;
type Props = {
    navigation: NewPostScreenNavigationProp;
};

const headerSource = 'https://images.unsplash.com/photo-1555786750-7c3c2b9a6b0e?q=80&w=2068&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

const user = {
    imageUri: 'https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'Yasmin Lopes',
    slug: '@yaslopesyweb',
};

export default function NewFeed({ navigation }: Props) {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Header source={headerSource} />
                <User userId="2930" username={user.name} source={user.imageUri} userSlug={user.slug} />
                <Post />
                <RowButtons onPress={() => navigation.navigate("Feed")} />
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
