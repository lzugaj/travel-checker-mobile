import React from "react";
import { StyleSheet, Text, View } from "react-native";

type TitleProps = {
	text: string;
}

export default function Title({ text }: TitleProps) {
	return (
		<View>
			<Text style={ style.title }>
				{ text }
			</Text>
		</View>
	);
}

const style = StyleSheet.create({
	title: {
		marginBottom: 10,
		color: "black",
		fontWeight: "400",
		fontSize: 32,
		textTransform: "uppercase",
	},
})