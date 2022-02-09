import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { TextInput } from "react-native-paper";
import GradientButton from "react-native-gradient-buttons";

import RButton from "../Button.js";
import RTextInput from "../TextInput";

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
            height: windowHeight / 4.6,
            resizeMode: "contain",
          }}
          source={require("../../assets/Routines_logo.png")}
        />

        {/*<Text
          style={{
            marginVertical: 10,
            color: "#555", //"#0359e3",
            fontWeight: "bold",
          }}
        >
          You'd like to be called...{" "}
        </Text> */}

        {/* <View
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
        </View> */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <RTextInput
            type="Text"
            placeholder="Your name..."
            height="50"
            width="400"
          ></RTextInput>
        </View>
        {/* <GradientButton
          text="Let's start!"
          textStyle={{ fontSize: 18 }}
          style={{
            marginTop: windowHeight * 0.08,

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
          width={windowWidth / 2.2 >= 225 ? 225 : windowWidth / 2.2}
          radius={7}
          impact
          impactStyle="Light"
          onPressAction={() => alert("In developing")} // navigation.navigate("NameScreen")}
        /> */}

        <RButton
          text="Let's start!"
          style={{ marginVertical: windowHeight * 0.08 }}
          height={45}
          width={windowWidth / 2.2 >= 225 ? 225 : windowWidth / 2.2}
          onPressAction={() => alert("In developing")}
        >
          {" "}
        </RButton>

        <RButton
          type="invi"
          text="Back to Home"
          textStyle={{ fontSize: 14, color: "#0359e3" }}
          style={{}}
          height={40}
          width={windowWidth / 1.6 >= 350 ? 350 : windowWidth / 1.6}
          onPressAction={() => navigation.navigate("FirstScreen")}
        >
          {" "}
        </RButton>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    //height: windowHeight * 1,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default NameScreen;
