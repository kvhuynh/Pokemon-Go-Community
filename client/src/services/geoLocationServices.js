import * as Location from 'expo-location';

export const getCurrentLocation = async () => {
    console.log("does this function get called");
    let { status } = await Location.requestForegroundPermissionsAsync();
    console.log(status);
    if (status !== 'granted') {
        throw new Error("Permission to access location was denied")
    }
    let locations = await Location.getCurrentPositionAsync({});
    console.log(locations);
    locations.latitudeDelta = 0.0001;
    locations.longitudeDelta = 0.001;
    
    return locations


    // * TESTING FOR RANDOM APP PLACEMENT
    return  {"coords": {"accuracy": 5.75464581582954, "altitude": 114.66044616699219, "altitudeAccuracy": 1.6448884010314941, "heading": -1, "latitude": Math.floor(Math.random() * 101) - 50, "longitude": Math.floor(Math.random() * 101) - 50, "speed": -1}, "timestamp": 1679713297483.074, "latitudeDelta": 0.0001, "longitudeDelta": 0.0001}
}
