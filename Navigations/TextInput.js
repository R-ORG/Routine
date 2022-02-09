// import { useState } from "react";
import React from "react";
import { TextInput } from "react-native-paper";
import * as styles from "../style/generalstyle";
import * as themes from "../style/generaltheme";
//
function DefaultTextInput(props) {
  const [isFocus, setFocus] = React.useState(false);
  return (
    <TextInput
      placeholderTextColor={
        props.placeholderTextColor ? props.placeholderTextColor : "#aab"
      }
      width={props.width}
      height={props.height}
      style={isFocus ? styles.focusStyle : styles.blurStyle}
      theme={isFocus ? themes.focusTheme : themes.blurTheme}
      onChangeText={(text) => props.onChangeText(text)}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
      placeholder={props.placeholder}
      value={props.value}
      underlineColor={props.underlineColor ? props.underlineColor : "fff"}
      selectionColor={props.underlineColor ? props.underlineColor : "abf"}
    ></TextInput>
  );
}
function DefaultNumberInput(props) {
  const [isFocus, setFocus] = React.useState(false);
  return (
    <TextInput
      placeholderTextColor={
        props.placeholderTextColor ? props.placeholderTextColor : "#aab"
      }
      width={props.width}
      height={props.height}
      style={isFocus ? styles.focusStyle : styles.blurStyle}
      theme={isFocus ? themes.focusTheme : themes.blurTheme}
      onChangeText={(text) => props.onChangeText(text)}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
      placeholder={props.placeholder}
      value={props.value}
      underlineColor={props.underlineColor ? props.underlineColor : "fff"}
      selectionColor={props.underlineColor ? props.underlineColor : "abf"}
      keyboardType={"number-pad"}
    ></TextInput>
  );
}
function DefaultPassWordInput(props) {
  const [isFocus, setFocus] = React.useState(false);
  return (
    <TextInput
      placeholderTextColor={
        props.placeholderTextColor ? props.placeholderTextColor : "#aab"
      }
      width={props.width}
      height={props.height}
      style={isFocus ? styles.focusStyle : styles.blurStyle}
      theme={isFocus ? themes.focusTheme : themes.blurTheme}
      onChangeText={(text) => props.onChangeText(text)}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
      placeholder={props.placeholder}
      value={props.value}
      underlineColor={props.underlineColor ? props.underlineColor : "fff"}
      selectionColor={props.underlineColor ? props.underlineColor : "abf"}
      secureTextEntry={true}
    />
  );
}
export { DefaultTextInput, DefaultNumberInput, DefaultPassWordInput };
