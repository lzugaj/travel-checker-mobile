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
        margin: 0,
        textAlign: "center",
        marginTop: 20,
        padding: 10
    }
})