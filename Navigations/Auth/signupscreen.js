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

const SignUpScreen = ({ navigation }) => {
  const [email, setEMail] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [userFocus, setUserFocus] = React.useState(false);
  const [emailFocus, setEmailFocus] = React.useState(false);
  const [passwordFocus, setPasswordFocus] = React.useState(false);
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [confirmPasswordFocus, setConfirmPasswordFocus] = React.useState("");

  const onSignUpPressed = () => {
    // Validation

    if (password !== confirmPassword) {
      alert("Passwords don't match.");
      return;
    }

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        const uid = response.user.uid;
        const data = {
          id: uid,
          email,
          username,
        };
        const usersRef = firebase.firestore().collection("users");
        usersRef
          .doc(uid)
          .set(data)

          .catch((error) => {
            alert(error);
          });
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
            marginTop: windowHeight * 0.1,
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
              Your email{" "}
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
            }}
          >
            <TextInput
              theme={emailFocus ? focusTheme : blurTheme}
              style={emailFocus ? focusStyle : blurStyle}
              placeholder="Email"
              placeholderTextColor="#aab"
              underlineColor="fff"
              selectionColor="#abf"
              onChangeText={(email) => setEMail(email)}
              value={email}
              onFocus={() => setEmailFocus(true)}
              onBlur={() => setEmailFocus(false)}
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
                marginVertical: 10,
                color: "#0359e3",
                fontWeight: "bold",
                textAlign: "left",
              }}
            >
              Your username{" "}
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
              placeholder="Username"
              placeholderTextColor="#aab"
              underlineColor="fff"
              selectionColor="#abf"
              onChangeText={(username) => setUsername(username)}
              value={username}
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
              Confirm Password{" "}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <TextInput
              secureTextEntry={true}
              theme={confirmPasswordFocus ? focusTheme : blurTheme}
              style={confirmPasswordFocus ? focusStyle : blurStyle}
              placeholder="••••••••"
              placeholderTextColor="#aab"
              underlineColor="fff"
              selectionColor="#abf"
              onChangeText={(confirmPassword) =>
                setConfirmPassword(confirmPassword)
              }
              value={confirmPassword}
              onFocus={() => setConfirmPasswordFocus(true)}
              onBlur={() => setConfirmPasswordFocus(false)}
            />
          </View>
        </View>
        <GradientButton
          text="Sign Up"
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
          onPressAction={() => onSignUpPressed()} //need authorize function
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
          onPressAction={() => navigation.navigate("FirstScreen")} //need authorize function
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    height: windowHeight * 1.2,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});

export default SignUpScreen;
