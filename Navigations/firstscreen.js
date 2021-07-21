import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, Image, Dimensions, Alert } from "react-native";
import GradientButton from "react-native-gradient-buttons";

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
        source={require("../assets/Routines_logo.png")}
      />

      <GradientButton
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
      />

      <GradientButton
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
      />

      <GradientButton
        text="Not having an account? Sign up"
        textStyle={{ fontSize: 14, color: "#0359e3" }}
        style={{ marginVertical: 50 }}
        gradientBegin={styles.container.backgroundColor}
        gradientEnd={styles.container.backgroundColor}
        gradientDirection="radial"
        height={40}
        width={windowWidth / 1.6 >= 350 ? 350 : windowWidth / 1.6}
        radius={7}
        impact
        impactStyle="Light"
        onPressAction={() => showAlert("Sign up", "Unavailable feature!")}
      />
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
