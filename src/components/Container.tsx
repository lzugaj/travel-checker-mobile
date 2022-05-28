import React from "react";
import { StyleSheet, View } from "react-native";

type ContainerProps = {
    children: React.ReactNode;
}

export default function Container({ children }: ContainerProps) {
    return (
        <View style={ styles.container }>
            { children }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 20,
        padding: 10,
        textAlign: "center",
        justifyContent: "center",
        paddingHorizontal: 25
    }
})