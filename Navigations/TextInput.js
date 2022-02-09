import React, { useState } from "react";
import { TextInput } from "react-native-paper";
import * as styles from "../style/generalstyle";
import * as themes from "../style/generaltheme";
function DefautlTextInput(props) {
  const [isFocus, setFocus] = useState(false);
  const [value, setValue] = useState("");
  return (props.type = "Text" ? (
    <TextInput
      placeholderTextColor={
        props.placeholderTextColor ? props.placeholderTextColor : "#aab"
      }
      style={isFocus ? styles.focusStyle : styles.blurStyle}
      theme={isFocus ? themes.focusTheme : themes.blurTheme}
      onChangeText={(value) => setValue(value)}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
      placeholder={props.placeholder}
      value={value}
      underlineColor={props.underlineColor ? props.underlineColor : "fff"}
      selectionColor={props.underlineColor ? props.underlineColor : "abf"}
    ></TextInput>
  ) : (
    (props.type = "Number" ? (
      <TextInput
        placeholderTextColor={
          props.placeholderTextColor ? props.placeholderTextColor : "#aab"
        }
        style={isFocus ? styles.focusStyle : styles.blurStyle}
        theme={isFocus ? themes.focusTheme : themes.blurTheme}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        placeholder={props.placeholder}
        underlineColor={props.underlineColor ? props.underlineColor : "fff"}
        selectionColor={props.underlineColor ? props.underlineColor : "abf"}
        onChangeText={(value) => setValue(value)}
        value={value}
        keyboardType={"number-pad"}
        textAlign={props.textAlign ? props.textAlign : "center"}
      ></TextInput>
    ) : (
      <TextInput
        placeholderTextColor={
          props.placeholderTextColor ? props.placeholderTextColor : "#aab"
        }
        style={isFocus ? styles.focusStyle : styles.blurStyle}
        theme={isFocus ? themes.focusTheme : themes.blurTheme}
        onChangeText={(value) => setValue(value)}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        placeholder={props.placeholder}
        value={value}
        underlineColor={props.underlineColor ? props.underlineColor : "fff"}
        selectionColor={props.underlineColor ? props.underlineColor : "abf"}
        secureTextEntry={true}
      ></TextInput>
    ))
  ));
}
export default DefautlTextInput;
