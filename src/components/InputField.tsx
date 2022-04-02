import React from "react";
import { TextInput } from "react-native";

type InputFieldProps = {
	label: string;
	value?: string;
	placeholder?: string;
	keyboardType?: "default" | "number-pad" | "decimal-pad" | "numeric" | "email-address" | "phone-pad";
	disabled?: boolean;
	secureTextEntry?: boolean;
	onChangeText: () => void;
}

export default function InputField({ ...props }: InputFieldProps) {
	return (
		<TextInput
			{ ...props }
		/>
	);
}