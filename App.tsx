import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from "./src/pages/Home/Home";
import Login from "./src/pages/Login/Login";
import Register from "./src/pages/Register/Register";
import ForgotPassword from "./src/pages/ForgotPassword/ForgotPassword";

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Home" screenOptions={ { headerShown: false } }>
				<Stack.Screen name="Home" component={ Home }/>

				<Stack.Screen name="Login" component={ Login }/>
				<Stack.Screen name="Register" component={ Register }/>

				<Stack.Screen name="ForgotPassword" component={ ForgotPassword }/>

			</Stack.Navigator>
		</NavigationContainer>
	);
}
