import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  Dimensions,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { DefaultTextInput as RTextInput } from "../TextInput.js";

import RButton from "../Button.js";
import { TouchableOpacity } from "react-native-gesture-handler";
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

const SetNameRoutine = ({ navigation, route }) => {
  const [isActive, setIsActive] = React.useState(false);
  // first time enter this route (route.params is null) we need to create new routine
  const [rname, setName] = useState(route.params ? route.params.name : "");
  const [ratt, setAtt] = useState(route.params ? route.params.att : "");
  const [ricon, setIcon] = useState(route.params ? route.params.icon : "");
  let routine = {
    name: rname,
    att: ratt,
    icon: ricon,
  };
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

        <Text style={{ height: 120 }}>
          Step
          <Image
            style={{
              width: 60,
              height: 60,
              resizeMode: "contain",
            }}
            source={require("../../assets/step1.png")}
          />
        </Text>

        <Text
          style={{
            marginVertical: 10,
            color: "#555", //"#0359e3",
            fontWeight: "bold",
          }}
        >
          Name your new routine{" "}
        </Text>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <RTextInput
            height={10}
            width={150}
            value={rname}
            onChangeText={(text) => setName(text)}
          />
        </View>
        <TouchableOpacity disabled={rname == ""}>
          <RButton
            text="Next"
            textStyle={{ fontSize: 19 }}
            height={45}
            width={windowWidth / 3.5 >= 150 ? 150 : windowWidth / 3.5}
            onPressAction={
              () => navigation.navigate("SetAttributeRoutine", routine) // pass routine as parameter of this route
            } // navigation.navigate("NameScreen")}
          />
        </TouchableOpacity>
        <RButton
          text="Back"
          type="white"
          height={40}
          width={windowWidth / 4 >= 120 ? 120 : windowWidth / 4}
          onPressAction={() => navigation.navigate("FirstScreen")} // user don't want to add new routine so we don't pass routine back
          // navigation.navigate("NameScreen")}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default SetNameRoutine;
