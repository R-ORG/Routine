import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  Dimensions,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";

import { TextInput } from "react-native-paper";
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

const SetNameRoutine = ({ navigation, route }) => {
  const [isActive, setIsActive] = React.useState(false);
  // first time enter this route (route.params is null) we need to create new routine
  let routine = !route.params ? { name: "", att: "", icon: "" } : route.params;
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
          <TextInput
            theme={customTheme}
            style={customStyle}
            placeholder="Abc"
            placeholderTextColor="#aab"
            underlineColor="fff"
            selectionColor="#abf"
            value={routine.name}
            onChangeText={(text) => (routine.name = text)}
            onFocus={() => setIsActive(true)}
            onBlur={() => setIsActive(false)}
          />
        </View>

        <GradientButton
          text="Next"
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
          width={windowWidth / 3.5 >= 150 ? 150 : windowWidth / 3.5}
          radius={7}
          impact
          impactStyle="Light"
          onPressAction={
            () => navigation.navigate("SetAttributeRoutine", routine) // pass routine as parameter of this route
          } // navigation.navigate("NameScreen")}
        />
        <GradientButton
          text="Back"
          textStyle={{ fontSize: 14, color: "#0359e3" }}
          style={{ marginVertical: 20 }}
          gradientBegin={styles.container.backgroundColor}
          gradientEnd={styles.container.backgroundColor}
          gradientDirection="radial"
          height={40}
          width={windowWidth / 4 >= 120 ? 120 : windowWidth / 4}
          radius={7}
          impactStyle="Light"
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
