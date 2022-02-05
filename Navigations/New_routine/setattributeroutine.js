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
  const [routineType, setRoutineType] = useState("a");
  const [reps, setReps] = useState("");
  const [repsFocus, setFocus] = useState(false);
  const [duration, setDuration] = useState(new Date());
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    Platform.OS === "ios" ? setShow(true) : shetShow(false);
    setDuration(currentDate);
  };
  let routine = route.params;
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
            <GradientButton
              text="To Do"
              textStyle={{ fontSize: 18 }}
              style={isDo ? style.blurStyle : style.focusStyle}
              onPressAction={() => setIsDo(true)}
              width={windowWidth / 4}
              height={windowWidth / 4}
            />
            <GradientButton
              text="Not To Do"
              textStyle={{ fontSize: 18 }}
              style={!isDo ? style.blurStyle : style.focusStyle}
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
            <GradientButton
              text="Duration"
              textStyle={{ fontSize: 18 }}
              style={
                routineType == "Duration" ? style.blurStyle : style.focusStyle
              }
              onPressAction={() => setRoutineType("Duration")}
              width={windowWidth / 4}
              height={windowWidth / 6}
            />
            <GradientButton
              text="Reps"
              textStyle={{ fontSize: 18 }}
              style={routineType == "Reps" ? style.blurStyle : style.focusStyle}
              onPressAction={() => setRoutineType("Reps")}
              width={windowWidth / 6}
              height={windowWidth / 6}
            />
            <GradientButton
              text="..."
              textStyle={{ fontSize: 18 }}
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
            {routineType == "Duration" && (
              <DateTimePicker
                value={duration}
                is24Hour={true}
                mode={"time"}
                display={"spinner"}
                onChange={onChange}
              /> // show time picker if type is duration
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
          <GradientButton
            text="Next"
            textStyle={{ fontSize: 18 }}
            marginTop={windowHeight * 0.08}
            onPressAction={() => {
              routineType == "Reps"
                ? (routine.att = { isDo: isDo, reps: reps })
                : (routine.att = { isDo: isDo, duration: duration });
              navigation.navigate("SetIconRoutine", routine);
            }} // navigation.navigate("NameScreen")}
          />
          <GradientButton
            text="Back"
            textStyle={{ fontSize: 14, color: "#0359e3" }}
            style={{ marginVertical: 20 }}
            gradientBegin={styles.container.backgroundColor}
            gradientEnd={styles.container.backgroundColor}
            gradientDirection="radial"
            onPressAction={() => navigation.navigate("SetNameRoutine", routine)} // navigation.navigate("NameScreen")}
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
