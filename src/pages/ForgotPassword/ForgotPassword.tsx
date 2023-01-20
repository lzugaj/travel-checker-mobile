import React from "react";
import Container from "../../components/Container";
import { Formik, FormikProps } from "formik";
import { View } from "react-native";
import { ForgotPasswordDto } from "../../dto/types";
import { ForgotPasswordValidation } from "../../validations/AuthorizationValidation";
import { forgotPassword } from "../../api/forgotPassword";
import Title from "../../components/Title";
import TextInput from "../../components/UI/TextInput";
import Button from "../../components/UI/Button";

type Form = ForgotPasswordDto;

const ForgotPassword = ({ navigation }: { navigation: any }) => {

	const handleSubmit = (values: ForgotPasswordDto) => {
		forgotPassword(values)
			.then(response => console.log(response));
	}

	return (
		<Container>
			<Title text="Forgot Password" />

			<Formik
				onSubmit={ handleSubmit }
				initialValues={ { email: "" } as Form }
				validationSchema={ ForgotPasswordValidation }
			>
				{ ({ handleChange, handleSubmit, values }: FormikProps<any>) => (
					<View>
						<TextInput
							name="email"
							value={ values.email }
							placeholder="Enter your email"
							secureTextEntry={ true }
							keyboardType="email-address"
							onChangeText={ handleChange("email") }
						/>
						<Button
							title="Continue"
							onPress={ () => handleSubmit() }
						/>
					</View>
				) }
			</Formik>
			<Button
				title="Back to Login"
				onPress={ () => navigation.navigate("Login") }
			/>
		</Container>
	);
}

export default ForgotPassword;