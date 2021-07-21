import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  Text,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { TextInput } from "react-native-paper";
import GradientButton from "react-native-gradient-buttons";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const NameScreen = ({ navigation }) => {
  const [text, setText] = React.useState("");
  const [isActive, setIsActive] = React.useState(false);
  const customTheme = isActive
    ? {
        //isFocused
        colors: {
          text: "#fff",
          primary: styles.backgroundColor,
        },
      }
    : {
        //isBlur
        colors: {
          text: "#222",
          primary: styles.backgroundColor,
        },
      };
  const customStyle = isActive
    ? {
        //isFocused
        height: 50,
        backgroundColor: "#105cdd",
        flex: 0.7,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 3,

        elevation: 3,
        borderRadius: 5,
      }
    : {
        //isBlur
        height: 50,
        backgroundColor: "#f8f8f8",
        flex: 0.7,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 3,

        borderRadius: 5,
        elevation: 3,
      };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <StatusBar style="auto" />

        <Image
          style={{
            width: windowWidth / 1.5 >= 350 ? 350 : windowWidth / 1.5,
            height: windowHeight / 4.3,
            resizeMode: "contain",
          }}
          source={require("../../assets/Routines_logo.png")}
        />

        <Text
          style={{
            marginVertical: 15,
            color: "#0359e3",
            fontWeight: "bold",
          }}
        >
          You'd like to be called...{" "}
        </Text>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TextInput
            theme={customTheme}
            style={customStyle}
            placeholder="Your name..."
            placeholderTextColor="#aab"
            underlineColor="fff"
            selectionColor="#abf"
            value={text}
            onChangeText={(text) => setText(text)}
            onFocus={() => setIsActive(true)}
            onBlur={() => setIsActive(false)}
          />
        </View>

        <GradientButton
          text="Let's start!"
          textStyle={{ fontSize: 18 }}
          style={{
            marginTop: windowHeight * 0.05,

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
          width={windowWidth / 2 >= 250 ? 250 : windowWidth / 2}
          radius={7}
          impact
          impactStyle="Light"
          onPressAction={() => alert("In developing")} // navigation.navigate("NameScreen")}
        />
        <GradientButton
          text="Back to Home Screen"
          textStyle={{ fontSize: 18 }}
          style={{
            marginTop: 20,
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
          width={windowWidth / 2 >= 250 ? 250 : windowWidth / 2}
          radius={7}
          impact
          impactStyle="Light"
          onPressAction={() => navigation.navigate("FirstScreen")} // navigation.navigate("NameScreen")}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    height: windowHeight * 1.1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default NameScreen;
