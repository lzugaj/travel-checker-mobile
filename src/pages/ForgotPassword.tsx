import React from "react";
import Container from "../components/Container";
import { Button, Title } from "react-native-paper";
import { Formik, FormikProps } from "formik";
import { View } from "react-native";
import InputField from "../components/InputField";
import { ForgotPasswordDto } from "../dto/types";
import { ForgotPasswordValidation } from "../validations/AuthorizationValidation";
import { forgotPassword } from "../api/forgotPassword";

type Form = ForgotPasswordDto;

const ForgotPassword = ({ navigation }: { navigation: any }) => {

	const handleSubmit = (values: ForgotPasswordDto) => {
		forgotPassword(values)
			.then(response => console.log(response));
	}

	return (
		<Container>
			<Title>
				Forgot Password
			</Title>

			<Formik
				onSubmit={ handleSubmit }
				initialValues={ { email: "" } as Form }
				validationSchema={ ForgotPasswordValidation }
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
						<Button
							mode="contained"
							onPress={ () => handleSubmit() }
						>
							Continue
						</Button>
					</View>
				) }
			</Formik>

			<Button
				onPress={ () => navigation.navigate("Login") }
			>
				Back to Login
			</Button>
		</Container>
	);
}

export default ForgotPassword;