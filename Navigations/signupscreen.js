import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Image, Dimensions, Alert } from "react-native";
import GradientButton from "react-native-gradient-buttons";
import * as Font from "expo-font";
import { AppLoading } from "expo";

const SecondScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Hello World!</Text>
    </View>
  );
};

export default SecondScreen;
