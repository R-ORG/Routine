import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, Image, Dimensions, Text } from "react-native";
import { TextInput } from "react-native-paper";
import GradientButton from "react-native-gradient-buttons";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const LoginScreen = ({ navigation }) => {
  const [user, setUser] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [userFocus, setUserFocus] = React.useState(false);
  const [passwordFocus, setPasswordFocus] = React.useState(false);
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
    backgroundColor: "#f2f2f2",
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
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Image
        style={{
          width: windowWidth / 1.5 >= 350 ? 350 : windowWidth / 1.5,
          height: windowHeight / 4.3,
          resizeMode: "contain",
        }}
        source={require("../assets/Routines_logo.png")}
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
            placeholder="Email or phone number"
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
              marginTop: 30,
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
            placeholder="*********"
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
          marginVertical: windowHeight * 0.05,
          marginBottom: windowHeight * 0.4,
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
        onPressAction={() => alert("In developing")} //need authorize function
      />
    </View>
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

export default LoginScreen;
