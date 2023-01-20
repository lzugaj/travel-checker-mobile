import React from "react";
import { Text, TextInput as RNInputText, View } from "react-native";
import { useField } from "formik";

import "./style.scss";

type TextInputProps = {
	name: string;
	value: string;
	placeholder: string;
	secureTextEntry?: boolean;
	keyboardType: "default" | "number-pad" | "decimal-pad" | "numeric" | "email-address" | "phone-pad" | "url";
	onChangeText: (value: string) => void;
}

export default function TextInput({ name, ...props }: TextInputProps) {
	const [ field, meta ] = useField(name);

	return (
		<View>
			<RNInputText
				{ ...props }
			/>
			{ meta.touched && meta.error &&
				<Text>
					{ meta.error }
				</Text>
			}
		</View>
	);
}