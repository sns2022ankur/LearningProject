import React from 'react'
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Button
} from 'react-native';

const ProfileScreen = ({ navigation, ...props }) => {
    return (
        <>
            <Button
                title="Go to Home Page"
                onPress={() =>
                    navigation.navigate('HomeScreen', {name: 'HomeScreen'})
                }
            />
        </>
    )
}

export default ProfileScreen
