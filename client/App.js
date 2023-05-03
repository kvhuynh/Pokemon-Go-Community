
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Map } from './src/components/Map'
import { Login } from './src/components/Login'

export const App = () => {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen 
          name="Login"
          component={Login}
        /> */}
        <Stack.Screen
          name="Map"
          component={Map}
        />
      </Stack.Navigator>
    </NavigationContainer>
    // <Map></Map>
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
//   <View style={styles.container}>
//         <MapView style={styles.map}
//           initialRegion={ location }
//         >
//         <Marker
//             coordinate={{
//               latitude: 47.32261,
//               longitude: -122.33111,
//             }}
//             title={"kevin's house"}
//             description={"pkemon raid here"}
//          />
//       </MapView>
//  </View>
  );
}

export default App;