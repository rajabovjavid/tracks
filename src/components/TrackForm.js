import React, { useContext } from "react";
import { StyleSheet, ScrollView } from "react-native";
import { Input, Button } from "react-native-elements";

import Spacer from "./Spacer";
import { Context as LocationContext } from "../context/LocationContext";

import useSaveTrack from '../hooks/useSaveTrack'

const TrackForm = () => {
  const {
    state: { name, recording, locations },
    startRecording,
    stopRecording,
    changeName,
  } = useContext(LocationContext);

  const [saveTrack] = useSaveTrack()

  return (
    <>
      <ScrollView>
        <Spacer>
          <Input
            value={name}
            onChangeText={changeName}
            placeholder="Enter track name"
          />
        </Spacer>
        <Spacer>
          {recording ? (
            <Button title="Stop" onPress={stopRecording} />
          ) : (
            <Button title="Start Recording" onPress={startRecording} />
          )}
        </Spacer>
        <Spacer>
          {!recording && locations.length ? (
            <Button title="Save Recording" onPress={saveTrack} />
          ) : null}
        </Spacer>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
});

export default TrackForm;
