import React from 'react';
import { SafeAreaView, StatusBar, Text, useColorScheme, } from 'react-native';

import { Colors, } from 'react-native/Libraries/NewAppScreen';
import Login from "./src/pages/Login";

export default function App() {
    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    return (
        <SafeAreaView style={ backgroundStyle }>
            <StatusBar barStyle={ isDarkMode ? 'light-content' : 'dark-content' }/>
            <Login />
        </SafeAreaView>
    );
}