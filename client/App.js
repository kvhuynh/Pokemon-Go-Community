// import React from 'react';
// import {
//   StyleSheet,
//   Button,
//   View,
//   SafeAreaView,
//   Text,
//   Alert,
// } from 'react-native';

// import Login from "./src/views/Login"

// const App = () => {

//   return (
//     <Login></Login>
//   )
// };



// export default App;

import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View } from 'react-native';

export default function App() {

  const location = {
    latitude: 47.32261,
    longitude: -122.33111,
    latitudeDelta: 0.0001,
    longitudeDelta: 0.0001,
  }


  return (
  //   <View style={styles.container}>
  //   <MapView
  //     style={styles.map}
  //     initialRegion={location} //your region data goes here.
  //   >
  //     <Marker 
  //       coordinate={location}
  //       title={"yo"}
  //       description={"wtf"}
  //     />
  //   </MapView>
  // </View>
  <View style={styles.container}>
        <MapView style={styles.map}
          initialRegion={ location }
        >
        <Marker
            coordinate={{
              latitude: 47.32261,
              longitude: -122.33111,
            }}
            title={"kevin's house"}
            description={"pkemon raid here"}
         />
      </MapView>
 </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
