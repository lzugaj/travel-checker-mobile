import React from "react";
import Container from "../components/Container";
import { Button, Text, TextInput, View } from "react-native";

import { Formik, FormikProps } from 'formik';

import InputField from "../components/InputField";

import { AuthenticationDto } from "../dto/types";

type Form = AuthenticationDto;

export default function Login() {

    const handleSubmit = (values: AuthenticationDto) => {
        console.log(values);
    }

    return (
        <Container>
            <Text>
                Login
            </Text>

            <Formik
                initialValues={ { email: "", password: "" } as Form }
                onSubmit={ handleSubmit }
            >
                { ({ handleChange, handleSubmit, values }: FormikProps<any>) => (
                    <View>
                        <TextInput
                            value={"dsdsa"}
                            onChangeText={() => handleChange("email")}
                            placeholder="Enter email"
                        />
                        <InputField
                            label="Password"
                            placeholder="Enter password"
                            secureTextEntry={ true }
                            onChangeText={ () => handleChange("password") }
                        />
                        <Button
                            title="Login"
                            onPress={ () => handleSubmit() }
                        />
                    </View>
                ) }
            </Formik>
        </Container>
    );
}