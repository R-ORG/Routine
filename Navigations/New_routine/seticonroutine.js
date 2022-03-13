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
  Picker,
} from "react-native";
import { addRoutine } from "../../firebase/firebaseaction";

import RButton from "../Button.js";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
import { firebase } from "../../firebase/config";
const SetIconRoutine = ({ navigation, route }) => {
  const [text, setText] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [Color, setColor] = useState("#555");
  const [showIconPicker, setShowIconPicker] = useState(false);
  let routine = route.params;
  const [routineIcon, setSelectedValue] = useState(routine.icon);
  const onSelect = (icon) => {
    setShowIconPicker(false); // fix this
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <StatusBar style="auto" />

        <Text style={{ height: 80 }}>
          Step
          <Image
            style={{
              width: 60,
              height: 60,
              resizeMode: "contain",
            }}
            source={require("../../assets/step3.png")}
          />
        </Text>

        <Text
          style={{
            marginVertical: 35,
            color: "#555", //"#0359e3",
            fontWeight: "bold",
          }}
        >
          Choose an icon{" "}
        </Text>

        <Picker
          selectedValue={routineIcon}
          style={{ height: 50, width: 250, shadowColor: "#000" }}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
          <Picker.Item label="     ...    (None)" value="none" />
          <Picker.Item label="    📒    Doing homework" value="homework" />
          <Picker.Item label="    💪    Doing sport" value="sport" />
          <Picker.Item label="    🥤    Drinking water" value="water" />
          <Picker.Item label="    🍝    Eating" value="eat" />
          <Picker.Item label="    🎮    E-sports" value="nec" />
          <Picker.Item label="    🎵    Listening to music" value="music" />
          <Picker.Item label="    💊    Medicines" value="med" />
          <Picker.Item label="    🚭    No smoking" value="no-smoking" />
          <Picker.Item label="    🏃‍♀️    Running" value="run" />
          <Picker.Item label="    😴    Sleeping" value="sleep" />
          <Picker.Item label="    🚙    Traveling" value="travel" />
          <Picker.Item label="    🖥    TV" value="tv" />
          <Picker.Item label="    ⚠    Alert 1" value="al1" />
          <Picker.Item label="    ❌    Alert 2" value="al2" />
          <Picker.Item label="    ✅    Alert 3" value="al3" />
        </Picker>

        {/* <GradientButton
          text="Done"
          textStyle={{ fontSize: 18 }}
          style={{
            marginTop: windowHeight * 0.04,

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
          onPressAction={() => {
            routine.icon = routineIcon;
            let user = firebase.auth().currentUser;
            user
              ? addRoutine(user.uid, routine)
              : navigation.navigate("NameScreen");
            console.log(routine);
          }} // navigation.navigate("NameScreen")}
        /> */}
        {/* <GradientButton
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
          onPressAction={
            () => navigation.navigate("SetAttributeRoutine", routine)
            //pass routine back to set attribute to keep other routine info like name and attribute
          } // navigation.navigate("NameScreen")}
        /> */}

        <RButton
          text="Done"
          style={{ marginVertical: windowHeight * 0.08 }}
          height={45}
          width={windowWidth / 3.5 >= 150 ? 150 : windowWidth / 3.5}
          onPressAction={() => {
            routine.icon = routineIcon;
            let user = firebase.auth().currentUser;
            user
              ? addRoutine(user.uid, routine)
              : navigation.navigate("NameScreen");
            console.log(routine);
          }}
        />

        <RButton
          type="invi"
          text="Back"
          textStyle={{ fontSize: 14, color: "#0359e3" }}
          style={{}}
          height={40}
          width={windowWidth / 1.6 >= 350 ? 350 : windowWidth / 1.6}
          onPressAction={
            () => navigation.navigate("SetAttributeRoutine", routine)
            //pass routine back to set attribute to keep other routine info like name and attribute
          }
        >
          {" "}
        </RButton>
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
  aaa: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    height: windowHeight / 2.5,
    backgroundColor: "#fff",
    marginHorizontal: 25,
    flexDirection: "row",
  },
});

export default SetIconRoutine;
