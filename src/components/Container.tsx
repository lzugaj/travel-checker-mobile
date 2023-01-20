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
        textAlign: "center",
        justifyContent: "center",
        margin: 10,
        padding: 10,
    }
})