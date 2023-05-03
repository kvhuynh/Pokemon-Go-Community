import React from "react";
import {
	StyleSheet,
	Button,
	View,
	SafeAreaView,
	Text,
	Alert,
	TextInput,
} from "react-native";

import { Picker } from "@react-native-picker/picker";
import { useEffect, useState } from "react";

import { test } from "../services/internalApiServices";

const Separator = () => <View style={styles.separator} />;

export const Login = ({ navigation }) => {
	const [name, setName] = useState("");

	useEffect(() => {
		test()
			.then((res) => {
				setName(res);
			})
			.catch((error) => {
				console.log(error);
			});
	});

	return (
		<SafeAreaView style={styles.container}>
			<View>
				<Text style={styles.title}>Pokemon Go Raid Finder</Text>
			</View>
			<View>
				<Text>First Name: </Text>
				<TextInput style={styles.input}></TextInput>
			</View>
			<View>
				<Text>Last Name: </Text>
				<TextInput style={styles.input}></TextInput>
			</View>
			<View>
				<Text>Email: </Text>
				<TextInput style={styles.input}></TextInput>
			</View>
			<View>
				<Text>Password: </Text>
				<TextInput style={styles.input} secureTextEntry={true}></TextInput>
			</View>
			<View>
				<Text>Confirm Password: </Text>
				<TextInput style={styles.input} secureTextEntry={true}></TextInput>
			</View>
			<Button title="Login" />
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		marginHorizontal: 16,
	},
	title: {
		textAlign: "center",
		marginVertical: 8,
	},
	fixToText: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
	separator: {
		marginVertical: 8,
		borderBottomColor: "#737373",
		borderBottomWidth: StyleSheet.hairlineWidth,
	},
	input: {
		height: 40,
		margin: 12,
		borderWidth: 1,
		padding: 10,
	},
});

export default Login;
