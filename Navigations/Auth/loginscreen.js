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
import { firebase } from "../../firebase/config";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const LoginScreen = ({ navigation }) => {
  const [user, setUser] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [userFocus, setUserFocus] = React.useState(false);
  const [passwordFocus, setPasswordFocus] = React.useState(false);

  const onLoginPress = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(user, password)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        alert(error);
        console.log(error);
      });
  };
  const focusTheme = {
    colors: {
      text: "#fff",
      primary: styles.backgroundColor,
    },
  };
  const blurTheme = {
    colors: {
      text: "#222",
      primary: styles.backgroundColor,
    },
  };

  const focusStyle = {
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
    height: 50,

    elevation: 3,
    borderRadius: 5,
  };
  const blurStyle = {
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
            marginTop: windowHeight * 0.05,
            width: windowWidth / 3 >= 175 ? 175 : windowWidth / 3,
            height: windowHeight / 12,
            resizeMode: "contain",
          }}
          source={require("../../assets/Routines_logo.png")}
        />
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignSelf: "flex-start",
            }}
          >
            <Text
              style={{
                marginVertical: 10,
                color: "#0359e3",
                fontWeight: "bold",
                textAlign: "left",
              }}
            >
              Your email or phone number{" "}
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
            }}
          >
            <TextInput
              theme={userFocus ? focusTheme : blurTheme}
              style={userFocus ? focusStyle : blurStyle}
              placeholder="Email"
              placeholderTextColor="#aab"
              underlineColor="fff"
              selectionColor="#abf"
              onChangeText={(user) => setUser(user)}
              value={user}
              onFocus={() => setUserFocus(true)}
              onBlur={() => setUserFocus(false)}
            />
          </View>
        </View>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignSelf: "flex-start",
            }}
          >
            <Text
              style={{
                marginTop: 25,
                color: "#0359e3",
                fontWeight: "bold",
                textAlign: "left",
                marginBottom: 10,
              }}
            >
              Password{" "}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <TextInput
              secureTextEntry={true}
              theme={passwordFocus ? focusTheme : blurTheme}
              style={passwordFocus ? focusStyle : blurStyle}
              placeholder="••••••••"
              placeholderTextColor="#aab"
              underlineColor="fff"
              selectionColor="#abf"
              onChangeText={(password) => setPassword(password)}
              value={password}
              onFocus={() => setPasswordFocus(true)}
              onBlur={() => setPasswordFocus(false)}
            />
          </View>
        </View>
        <GradientButton
          text="Login"
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
          width={windowWidth / 2.5 >= 210 ? 210 : windowWidth / 2.5}
          radius={7}
          impact
          impactStyle="Light"
          onPressAction={() => onLoginPress()} //need authorize function
        />
        <GradientButton
          text="Back to Home"
          textStyle={{ fontSize: 14, color: "#0359e3" }}
          style={{ marginVertical: 35 }}
          gradientBegin={styles.container.backgroundColor}
          gradientEnd={styles.container.backgroundColor}
          gradientDirection="radial"
          height={40}
          width={windowWidth / 1.6 >= 350 ? 350 : windowWidth / 1.6}
          radius={7}
          impactStyle="Light"
          onPressAction={() => navigation.navigate("FirstScreen")} //need authorize function
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    //height: windowHeight * 1.2,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default LoginScreen;
