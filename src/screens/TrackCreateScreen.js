import React, { useContext, useCallback } from "react";
import { StyleSheet, LogBox } from "react-native";
import { Text } from "react-native-elements";
import { SafeAreaView, withNavigationFocus } from "react-navigation";

import { Context as LocationContext } from "../context/LocationContext";

import useLocation from "../hooks/useLocation";
import Map from "../components/Map";
import TrackForm from "../components/TrackForm";
import "../helper/_mockLocation";

const TrackCreateScreen = ({ isFocused }) => {
  const {
    state: { recording },
    addLocation,
  } = useContext(LocationContext);
  const callback = useCallback(
    (location) => {
      addLocation(location, recording);
    },
    [recording]
  );

  const [err] = useLocation(isFocused || recording, callback);

  return (
    <SafeAreaView forceInset={{ top: "always" }} style={styles.container}>
      <Text h3>Create a Track</Text>
      <Map />
      {err ? <Text>Please enable location services</Text> : null}
      <TrackForm />
    </SafeAreaView>
  );
};

LogBox.ignoreLogs([
  "Your project is accessing the following APIs from a deprecated global rather than a module import: Constants (expo-constants).",
]);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: Constants.statusBarHeight,
  },
});

export default withNavigationFocus(TrackCreateScreen);
