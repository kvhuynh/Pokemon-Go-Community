import React, { useEffect, useState } from "react";
import MapView, { Marker } from "react-native-maps";
import Modal from "react-native-modal";
import { Picker } from "@react-native-picker/picker";


import { StyleSheet, View, Text, Alert, Button } from "react-native";
import { getCurrentLocation } from "../services/geoLocationServices";

export const Map = ({ navigation }) => {
	const [locations, setLocations] = useState(null);
	const [errorMsg, setErrorMsg] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [popUpData, setPopUpData] = useState(null);
	const [isPoppedUp, setIsPoppedUp] = useState(false);
	const [isModalVisible, setModalVisible] = useState(false);

	useEffect(() => {
		getCurrentLocation()
			.then((res) => {
				console.log("do we get here");
				setLocations(res);
				setIsLoading(false);
			})
			.catch((err) => {
				setErrorMsg(err);
				console.log(err);
			});
	}, [isLoading, isPoppedUp]);

	const setPopUp = (e) => {
		setIsPoppedUp(true);
		toggleModal();
	};

	const toggleModal = () => {
		setModalVisible(!isModalVisible);
	};

	return errorMsg ? (
		<Text>enable location services</Text>
	) : isLoading ? (
		<Text>Loading</Text>
	) : (
		<View style={styles.container}>
			<MapView
				style={styles.map}
				initialRegion={{
					latitude: locations.coords.latitude,
					longitude: locations.coords.longitude,
					latitudeDelta: locations.latitudeDelta,
					longitudeDelta: locations.longitudeDelta,
				}}
				onLongPress={(e) => {
					console.log(e.nativeEvent);
					setPopUp();
				}}
			>
				<Marker
					coordinate={{
						latitude: 47.32261,
						longitude: -122.33111,
					}}
					title={"kevin's house"}
					description={"raid here"}
				/>
			</MapView>
			{isPoppedUp ? (
				<View style={{ flex: 1 }}>
					<Modal isVisible={isModalVisible}>
						<View style={{ flex: 1 }}>
							<Text>Hello!</Text>
							<Picker>
								<Picker.Item label="Java" value="java" />
								<Picker.Item label="JavaScript" value="js" />
							</Picker>
							<Button title="Hide modal" onPress={toggleModal} />
						</View>
					</Modal>
				</View>
			) : (
				""
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	map: {
		width: "100%",
		height: "100%",
	},
});

export default Map;
