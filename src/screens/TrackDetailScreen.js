import React, { useContext } from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import MapView, { Polyline } from "react-native-maps";

import { Context as TrackContext } from "../context/TrackContext";

const TrackDetailScreen = ({ navigation }) => {
  const { state } = useContext(TrackContext);
  const _id = navigation.getParam("_id");

  const track = state.find((t) => t._id === _id);
  const initialCords = track.locations[0].coords;

  return (
    <>
      <Text style={{ fontSize: 48 }}>{track.name}</Text>
      <MapView
				style={{height:300}}
        initialRegion={{
          longitudeDelta: 0.01,
          latitudeDelta: 0.01,
          ...initialCords,
        }}
      >
        <Polyline coordinates={track.locations.map((loc) => loc.coords)} />
      </MapView>
    </>
  );
};

const styles = StyleSheet.create({});

export default TrackDetailScreen;
