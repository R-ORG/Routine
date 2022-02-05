import React, { useState } from "react";
import GradientButton from "react-native-gradient-buttons";
// import * as style from "../style/generalstyle";

export function DefautlButton(props) {
  const [isFocus, setFocus] = useState(true);
  return props.type == "white" ? (
    <GradientButton
      style={isFocus ? styles.focusStyle : styles.blurStyle}
      theme={isFocus ? themes.focusTheme : themes.blurTheme}
      textStyle={
        props.textStyle ? props.textStyle : { fontSize: 14, color: "#0359e3" }
      }
      style={props.style ? props.style : { marginVertical: 20 }}
      gradientBegin={props.gradientBegin ? props.gradientBegin : "#fff"}
      gradientEnd={props.gradientEnd ? props.gradientEnd : "#fff"}
      gradientDirection={
        props.gradientDirection ? props.gradientDirection : "radial"
      }
      radius={props.radius ? props.radius : 7}
      impactStyle={props.impactStyle ? props.impactStyle : "Light"}
      onPressAction={
        props.onPressAction
          ? props.onPressAction
          : alert("will add more features in future")
      }
    ></GradientButton>
  ) : (
    <GradientButton
      style={props.style}
      gradientBegin={props.gradientBegin ? props.gradientBegin : "#0359E3"}
      gradientEnd={props.gradientEnd ? props.gradientEnd : "#0041b1"}
      gradientDirection={
        props.gradientDirection ? props.gradientDirection : "radial"
      }
      radius={props.radius ? props.radius : 7}
      impactStyle={props.impactStyle ? props.impactStyle : "Light"}
      onPressAction={
        props.onPressAction
          ? props.onPressAction
          : alert("will add more features in future")
      }
      text={props.text}
      textStyle={props.textStyle}
    ></GradientButton>
  );
}
export default DefautlButton;
