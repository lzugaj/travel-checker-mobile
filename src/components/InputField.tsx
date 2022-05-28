import React, { ReactElement } from "react";
import { StyleSheet, View } from "react-native";
import { TextInput, Text } from 'react-native-paper';
import { FormikErrors, FormikTouched } from "formik";

type InputFieldProps = {
	label: string;
	value: string;
	placeholder: string;
	disabled?: boolean;
	secureTextEntry?: boolean;
	right?: ReactElement;
	touched?: boolean | FormikTouched<any> | FormikTouched<any>[] | undefined;
	errors?: string | string[] | FormikErrors<any> | FormikErrors<any>[] | undefined;
	onChangeText: (value: string) => void;
}

export default function InputField({ touched, errors, ...props }: InputFieldProps) {

	return (
		<View>
			<TextInput
				style={ style.inputField }
				{ ...props }
			/>
			{ touched && errors &&
				<Text style={ style.error }>
					{ errors }
				</Text>
			}
		</View>
	);
}

const style = StyleSheet.create({
	inputField: {
		marginTop: 10
	},
	error: {
		fontSize: 12,
		color: "red",
	}
});