import { StyleSheet } from "react-native";
import React from "react";
import { Tabs } from "expo-router";

const TabsLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen name="profile" options={{ title: "Profile" }} />
      <Tabs.Screen name="map" options={{ title: "Map" }} />
      <Tabs.Screen name="events" options={{ title: "Events" }} />
    </Tabs>
  );
};

export default TabsLayout;

const styles = StyleSheet.create({});
