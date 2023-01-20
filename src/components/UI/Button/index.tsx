import React from "react";
import { Button as RNButton, View } from "react-native";

type ButtonProps = {
	title: string;
	onPress: () => void;
}

export default function Button({ ...props }: ButtonProps) {
	return (
		<View>
			<RNButton
				{ ...props }
			/>
		</View>
	);
}