import React from "react";
import { StyleSheet, View } from "react-native";
import { Title } from "react-native-paper";

type HeaderProps = {
	title: string;
}

export default function Header({title}: HeaderProps) {
	return (
		<View>
			<Title style={ style.heading }>
				{title}
			</Title>
		</View>
	);
}

const style = StyleSheet.create({
	heading: {
		textTransform: "uppercase",
		fontSize: 32,
	}
});