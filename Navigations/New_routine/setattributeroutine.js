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
  Touchable,
} from "react-native";
import RButton from "../Button.js";
import * as style from "../../style/generalstyle";
import { TextInput } from "react-native-paper";
import DateTimePicker from "@react-native-community/datetimepicker";
import GradientButton from "react-native-gradient-buttons";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
GradientButton.defaultProps = {
  height: windowHeight / 20,
  width: windowWidth / 3.5 >= 150 ? 150 : windowWidth / 3.5,
  radius: 7,
  gradientBegin: "#0359E3",
  gradientEnd: "#0041b1",
  gradientDirection: "radial",
  impactStyle: "Light",
};
const SetAttributeRoutine = ({ navigation, route }) => {
  const [isDo, setIsDo] = useState(true); // to do or not to do
  const [routineType, setRoutineType] = useState("");
  const [reps, setReps] = useState("");
  const [repsFocus, setFocus] = useState(false);
  const [duration, setDuration] = useState(new Date());
  const [isShow, setShow] = useState(false);
  const onPickDuration = (event, selectedDate) => {
    setShow(false);
    const currentDate = selectedDate || duration;
    setDuration(currentDate);
  };
  const [rname, setName] = useState(route.params ? route.params.name : "");
  const [ratt, setAtt] = useState(route.params ? route.params.att : "");
  const [ricon, setIcon] = useState(route.params ? route.params.icon : "");
  let routine = {
    name: rname,
    att: ratt,
    icon: ricon,
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ height: 80 }}>
            Step
            <Image
              style={{
                width: 60,
                height: 60,
                resizeMode: "contain",
              }}
              source={require("../../assets/step2.png")}
            />
          </Text>

          <View
            marginTop={windowHeight * 0.08}
            style={{
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <RButton
              type={isDo ? "blue" : "white"}
              text="To Do"
              // style={isDo ? style.focusStyle : style.blurStyle}
              onPressAction={() => setIsDo(true)}
              width={windowWidth / 4}
              height={windowWidth / 4}
            />
            <RButton
              type={!isDo ? "blue" : "white"}
              text="Not To Do"
              onPressAction={() => setIsDo(false)}
              width={windowWidth / 4}
              height={windowWidth / 4}
            />
          </View>
          <View
            marginTop={windowHeight * 0.08}
            style={{
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <RButton
              type={routineType == "Duration" ? "blue" : "white"}
              text="Duration"
              // textStyle={{ fontSize: 18 }}
              // style={
              //   routineType == "Duration" ? style.blurStyle : style.focusStyle
              // }
              onPressAction={() => {
                setRoutineType("Duration");
                setShow(true);
              }}
              width={windowWidth / 4}
              height={windowWidth / 6}
            />
            <RButton
              type={routineType == "Reps" ? "blue" : "white"}
              text="Reps"
              style={routineType == "Reps" ? style.blurStyle : style.focusStyle}
              onPressAction={() => setRoutineType("Reps")}
              width={windowWidth / 6}
              height={windowWidth / 6}
            />
            <RButton
              type={routineType == "..." ? "blue" : "white"}
              text="..."
              style={routineType == "..." ? style.blurStyle : style.focusStyle}
              onPressAction={() => alert("will add more options in future")}
              width={windowWidth / 6}
              height={windowWidth / 6}
            />
          </View>
          <View
            marginVertical={windowHeight * 0.04}
            style={{
              flexDirection: "row",
              justifyContent: "center",
              height: windowHeight * 0.1,
              width: windowWidth,
            }}
          >
            {routineType == "Duration" && isShow == true && (
              <DateTimePicker
                value={duration}
                is24Hour={true}
                mode={"time"}
                display={"spinner"}
                onChange={onPickDuration}
              />
            )}
            {
              routineType == "Reps" && (
                <TextInput
                  style={repsFocus ? style.focusStyle : style.blurStyle}
                  theme={repsFocus ? style.focusStyle : style.blurStyle}
                  placeholder="numer of reps"
                  placeholderTextColor="#aab"
                  placeholderTextColor="#aab"
                  underlineColor="fff"
                  selectionColor="#abf"
                  onChangeText={(reps) => setReps(reps)}
                  onFocus={() => setFocus(true)}
                  onBlur={() => setFocus(false)}
                  value={reps}
                  keyboardType={"number-pad"}
                  textAlign={"center"}
                />
              ) //show text input if type is reps
            }
          </View>
          <RButton
            text="Next"
            textStyle={{ fontSize: 18 }}
            marginTop={windowHeight * 0.08}
            onPressAction={() => {
              routineType == "Reps"
                ? (routine.att = { isDo: isDo, reps: reps })
                : (routine.att = { isDo: isDo, duration: duration });
              navigation.navigate("SetIconRoutine", routine);
            }}
          />
          <RButton
            text="Back"
            textStyle={{ fontSize: 14, color: "#0359e3" }}
            style={{ marginVertical: 20 }}
            type="white"
            // gradientBegin={styles.container.backgroundColor}
            // gradientEnd={styles.container.backgroundColor}
            // gradientDirection="radial"
            onPressAction={() => navigation.navigate("SetNameRoutine", routine)}
          />
        </View>
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

export default SetAttributeRoutine;
