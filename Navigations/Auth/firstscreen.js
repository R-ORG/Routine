import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, Image, Dimensions, Alert, Text } from "react-native";

import RButton from "../Button.js";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const showAlert = (alertTitle, alertText) =>
  Alert.alert(
    alertTitle,
    alertText,
    [
      {
        text: "OK",
        //onPress: () => Alert.alert("OK Pressed"),
        style: "cancel",
      },
    ],
    {
      cancelable: true,
      /* onDismiss: () =>
        Alert.alert(
          "This alert was dismissed by tapping outside of the alert dialog."
        ), */
    }
  );

const FirstScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Image
        style={{
          width: windowWidth / 1.5 >= 350 ? 350 : windowWidth / 1.5,
          height: windowHeight / 4,
          resizeMode: "contain",
        }}
        source={require("../../assets/Routines_logo.png")}
      />

      {/* <GradientButton
        text="USING THIS DEVICE ONLY"
        textStyle={{ fontSize: 18 }}
        style={{
          marginVertical: 10,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.2,
          shadowRadius: 3,

          elevation: 3,
          borderRadius: 7,
        }}
        gradientBegin="#0359e3"
        gradientEnd="#0041b1"
        gradientDirection="radial"
        height={45}
        width={windowWidth / 1.5 >= 350 ? 350 : windowWidth / 1.5}
        radius={7}
        impact
        impactStyle="Light"
        onPressAction={() => navigation.navigate("NameScreen")} //showAlert("Device only", "In developing")}
      /> */}

      <RButton
        text="USING THIS DEVICE ONLY"
        height={45}
        width={windowWidth / 1.5 >= 350 ? 350 : windowWidth / 1.5}
        onPressAction={() => navigation.navigate("NameScreen")}
      >
        {" "}
      </RButton>

      <RButton
        type="white"
        text="LOG IN AND SYNC"
        height={45}
        width={windowWidth / 1.5 >= 350 ? 350 : windowWidth / 1.5}
        onPressAction={() => navigation.navigate("LoginScreen")}
      >
        {" "}
      </RButton>

      {/* <GradientButton
        text="LOG IN AND SYNC"
        textStyle={{ fontSize: 18, color: "#0359e3" }}
        style={{
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.2,
          shadowRadius: 3,

          elevation: 3,
          borderRadius: 7,
        }}
        gradientBegin="#fdfdff"
        gradientEnd="#fdfdff"
        gradientDirection="radial"
        height={45}
        width={windowWidth / 1.5 >= 350 ? 350 : windowWidth / 1.5}
        radius={7}
        impact
        impactStyle="Light"
        onPressAction={() => navigation.navigate("LoginScreen")}
      /> */}

      {/* <GradientButton
        text="Not having an account? Sign up"
        textStyle={{ fontSize: 14, color: "#0359e3" }}
        style={{ marginVertical: 50 }}
        gradientBegin={styles.container.backgroundColor}
        gradientEnd={styles.container.backgroundColor}
        gradientDirection="radial"
        height={40}
        width={windowWidth / 1.6 >= 350 ? 350 : windowWidth / 1.6}
        radius={7}
        impactStyle="Light"
        onPressAction={() => navigation.navigate("SignUpScene")}
      /> */}

      {/* <Text
        style={{
          marginVertical: 50,
          fontSize: 14,
          color: "#0359e3",
          fontWeight: "bold",
        }}
        onPress={() => navigation.navigate("SignUpScene")}
      >
        {" "}
        Not having an account? Sign up{" "}
      </Text> */}

      <RButton
        style={{ marginVertical: 50 }}
        type="invi"
        text="Not having an account? Sign up"
        textStyle={{ fontSize: 14, color: "#0359e3" }}
        height={20}
        width={windowWidth / 1.5 >= 320 ? 320 : windowWidth / 1.5}
        radius={7}
        impactStyle="Light"
        onPressAction={() => navigation.navigate("SignUpScene")}
      />

      {/* <Text
        style={{
          marginVertical: 20,
          fontSize: 14,
          color: "#888",
          fontWeight: "bold",
        }}
        onPress={() => navigation.navigate("SetNameRoutine")}
      >
        {" "}
        Test - Naming new routine{" "}
      </Text> */}

      <RButton
        type="invi"
        text="Test - Naming new routine"
        style={{ marginVertical: 20 }}
        textStyle={{ fontSize: 14, color: "#888" }}
        height={20}
        width={windowWidth / 2 >= 300 ? 300 : windowWidth / 2}
        radius={7}
        impactStyle="Light"
        onPressAction={() => navigation.navigate("SetNameRoutine")}
      />

      <RButton
        type="invi"
        text="Test - Achievement"
        style={{ marginVertical: 20 }}
        textStyle={{ fontSize: 14, color: "#888" }}
        height={20}
        width={windowWidth / 2 >= 300 ? 300 : windowWidth / 2}
        radius={7}
        impactStyle="Light"
        onPressAction={() => navigation.navigate("Achieve")}
      />

      {/* <Text
        style={{
          marginVertical: 20,
          fontSize: 14,
          color: "#888",
          fontWeight: "bold",
        }}
        onPress={() => navigation.navigate("Achieve")}
      >
        {" "}
        Test - Achievement{" "}
      </Text> */}

      {/* <GradientButton
        text="Test - Naming new routine"
        textStyle={{ fontSize: 14, color: "#888" }}
        style={{ marginVertical: 30 }}
        gradientBegin={styles.container.backgroundColor}
        gradientEnd={styles.container.backgroundColor}
        gradientDirection="radial"
        height={40}
        width={windowWidth / 1.6 >= 350 ? 350 : windowWidth / 1.6}
        radius={7}
        impactStyle="Light"
        onPressAction={() => navigation.navigate("SetNameRoutine")}
      /> */}

      {/* <GradientButton
        text="Test - Achievement"
        textStyle={{ fontSize: 14, color: "#888" }}
        gradientBegin={styles.container.backgroundColor}
        gradientEnd={styles.container.backgroundColor}
        gradientDirection="radial"
        height={40}
        width={windowWidth / 1.6 >= 350 ? 350 : windowWidth / 1.6}
        radius={7}
        impactStyle="Light"
        onPressAction={() => navigation.navigate("Achieve")}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FirstScreen;
