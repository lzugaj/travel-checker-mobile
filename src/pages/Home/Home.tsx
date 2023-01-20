import React, { useState } from "react";
import { ActivityIndicator, Text, View } from "react-native";
import Index from "../../components/UI/Button";

const Home = ({ navigation }: { navigation: any }) => {
	const [ isLoading, setIsLoading ] = useState(true);

	React.useEffect(() => {
		setTimeout(() => {
			setIsLoading(false);
		}, 1000);
	}, []);

	if (isLoading) {
		return (
			<View style={{flex:1, justifyContent: "center", alignItems: "center"}}>
				<ActivityIndicator
					size={"large"}
				/>
			</View>
		);
	}

	return (
		<View>
			<Text>
				Home page
			</Text>

			<Index
				title="Login"
				onPress={ () => navigation.navigate("Login") }
			/>
		</View>
	);
}

export default Home;