import React from "react";
import { Formik, FormikProps } from 'formik';
import { Keyboard, StyleSheet, View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";

// height={300} width={300} style={{transform: [{rotate: '-5deg'}]}}

import LoginSVG from "../assets/images/login.svg";

import Container from "../components/Container";
import InputField from "../components/InputField";

import { usePasswordVisibility } from "../hooks/usePasswordVisibility";
import { AuthorizationValidation } from "../validations/AuthorizationValidation";
import { AuthenticationDto } from "../dto/types";
import { authentication } from "../api/authentication";
import Header from "../components/Header";

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
			<LoginSVG />
			<Header title="Login"/>

			<Formik
				onSubmit={ handleSubmit }
				initialValues={ { email: "", password: "" } as Form }
				validationSchema={ AuthorizationValidation }
			>
				{ ({ handleChange, handleSubmit, values, errors, touched }: FormikProps<any>) => (
					<View>
						<InputField
							label="Email"
							value={ values.email }
							placeholder="Enter email"
							onChangeText={ handleChange("email") }
							touched={ touched.email }
							errors={ errors.email }
						/>
						<InputField
							label="Password"
							value={ values.password }
							placeholder="Enter password"
							secureTextEntry={ !showPassword }
							onChangeText={ handleChange("password") }
							touched={ touched.password }
							errors={ errors.password }
							right={ <TextInput.Icon name={ "eye" } onPress={ onShowPassword }/> }
						/>
						<Text
							style={ style.forgotPassword }
							onPress={ () => navigation.navigate("ForgotPassword") }
						>
							Forgot password?
						</Text>
						<Button
							mode="contained"
							onPress={ () => handleSubmit(values) }
						>
							Login
						</Button>
					</View>
				) }
			</Formik>

			<Text style={ style.signupText }>
				Don't have an account? <Text style={ style.link } onPress={ () => navigation.navigate("Register") }>Sign
				Up</Text>
			</Text>
		</Container>
	);
}

export default Login;

const style = StyleSheet.create({
	forgotPassword: {
		marginTop: 20,
		marginBottom: 20,
		textAlign: "right",
		fontSize: 18,
		color: "blue",
		textDecorationLine: "underline"
	},
	button: {
		marginTop: 20,
	},
	signupText: {
		marginTop: 20,
		textAlign: "center",
		fontSize: 18
	},
	link: {
		color: "blue",
		textDecorationLine: "underline"
	}
});