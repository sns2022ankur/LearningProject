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

const HomeScreen = () => {
    return (
        <>
            <Button
                title="Go to Profile Page"
                onPress={() =>
                    navigation.navigate('ProfileScreen', {name: 'ProfileScreen'})
                }
            />
        </>
    )
}

export default HomeScreen
