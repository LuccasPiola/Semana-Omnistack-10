import React from "react";
import { StyleSheet, Image, View, Text } from "react-native";
import { Marker, Callout } from "react-native-maps";

export default function Dev({ dev, nav }) {
  return (
    <Marker
      coordinate={{
        latitude: dev.location.coordinates[1],
        longitude: dev.location.coordinates[0]
      }}
    >
      <Image
        source={{
          uri: dev.avatar_url
        }}
        style={styles.avatar}
      />
      <Callout
        onPress={() => {
          nav.navigate("Profile", {
            github_username: dev.github_username
          });
        }}
      >
        <View style={styles.callout}>
          <Text style={styles.devName}>{dev.name}</Text>
          <Text style={styles.devBio}>{dev.bio}</Text>
          <Text style={styles.devTechs}>{dev.techs.join(", ")}</Text>
        </View>
      </Callout>
    </Marker>
  );
}

const styles = StyleSheet.create({
  avatar: {
    width: 54,
    height: 54,
    borderRadius: 4,
    borderWidth: 4,
    borderColor: "#fff"
  },

  callout: {
    width: 260
  },

  devName: {
    fontWeight: "bold",
    fontSize: 16
  },
  devBio: {
    color: "#666",
    marginTop: 5
  },
  devTechs: {
    marginTop: 5
  }
});
