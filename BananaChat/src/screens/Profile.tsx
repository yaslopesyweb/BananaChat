import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, Text } from 'react-native'; // Adiciona Text aqui
import Header from '../components/Header';
import User from '../components/User';
import Bio from '../components/Bio';
import Preferences from '../components/Preferences';
import Info from '../components/Info';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import React from 'react';
import { RootStackParamsList } from '../../types/navigation';


type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamsList, 'Profile'>;
type ProfileScreenRouteProp = RouteProp<RootStackParamsList, 'Profile'>;

type Props = {
    navigation: ProfileScreenNavigationProp;
    route: ProfileScreenRouteProp;
};

const headerImageUri = 'https://images.unsplash.com/photo-1555786750-7c3c2b9a6b0e?q=80&w=2068&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

const user = {
    avatarUri: 'https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'Yasmin Lopes',
    handle: '@yaslopesyweb',
};

export default function Profile({ navigation, route }: Props) {
    const { userId } = route.params;

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Header source={headerImageUri} />
                <User userId={userId} username={user.name} source={user.avatarUri} userSlug={user.handle} />
                <Bio
                    bioText='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt in libero quis vulputate. Donec et malesuada nisi, vitae condimentum mi. Nullam tincidunt fermentum nisl id congue. Pellentesque at erat id ipsum commodo tincidunt. Quisque ut nunc vel libero ultrices ornare.'
                    bioTitle='Bio'
                />
                <Preferences />
                <Info />
                <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
                    <Text style={styles.text}>Voltar</Text>
                </TouchableOpacity>
            </ScrollView>
            <StatusBar style="light" />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    button: {
        backgroundColor: '#007bff',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    text: {
        color: '#fff',
        fontSize: 16,
    },
});
