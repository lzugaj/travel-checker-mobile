import React from "react";
import { Formik, FormikProps } from 'formik';
import { Keyboard, StyleSheet, Text, View } from "react-native";

import Button from "../../components/UI/Button";
import Container from "../../components/Container";
import TextInput from "../../components/UI/TextInput";
import Title from "../../components/Title";

import { usePasswordVisibility } from "../../hooks/usePasswordVisibility";
import { AuthorizationValidation } from "../../validations/AuthorizationValidation";
import { AuthenticationDto } from "../../dto/types";
import { authentication } from "../../api/authentication";

type Form = AuthenticationDto;

const Login = ({ navigation }: { navigation: any }) => {
	const { showPassword, onShowPassword } = usePasswordVisibility();

	const handleSubmit = async (values: AuthenticationDto) => {
		authentication(values)
			.then((isOk: boolean) => {
				if (isOk) {
					navigation.navigate("Home");
				}
			})
			.catch(error => {
				console.log(error);
			});

		Keyboard.dismiss();
	}

	return (
		<Container>
			<Title text="Login" />
			<Formik
				onSubmit={ handleSubmit }
				initialValues={ { email: "", password: "" } as Form }
				validationSchema={ AuthorizationValidation }
			>
				{ ({ handleChange, handleSubmit, values, errors, touched }: FormikProps<any>) => (
					<View>
						<TextInput
							name="email"
							value={ values.email }
							placeholder="Enter your email"
							keyboardType="email-address"
							onChangeText={ handleChange("email") }
						/>
						<TextInput
							name="password"
							value={ values.password }
							placeholder="Enter your password"
							secureTextEntry={ true }
							keyboardType="default"
							onChangeText={ handleChange("password") }
						/>
						<Text
							style={ style.forgotPassword }
							onPress={ () => navigation.navigate("ForgotPassword") }
						>
							Forgot password?
						</Text>
						<Button
							title="Login"
							onPress={ () => handleSubmit(values) }
						/>
					</View>
				) }
			</Formik>
			<View style={ style.signup }>
				<Text style={ style.signupText }>
					Don't have an account?
				</Text>
				<Text
					style={ style.signupLink }
					onPress={ () => navigation.navigate("Register") }>
					Sign Up
				</Text>
			</View>
		</Container>
	);
}

export default Login;

const style = StyleSheet.create({
	forgotPassword: {
		marginBottom: 20,
		textAlign: "right",
		fontSize: 18,
		color: "blue",
	},
	signup: {
		alignItems: "center",
		marginTop: 20,
	},
	signupText: {
		fontSize: 18,
	},
	signupLink: {
		fontSize: 18,
		marginLeft: 10,
		color: "blue",
	}
});