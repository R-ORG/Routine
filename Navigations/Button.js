import React, { useState } from "react";
import GradientButton from "react-native-gradient-buttons";
import { focusStyle, blurStyle } from "../style/generalstyle.js";
import { focusTheme, blurTheme } from "../style/generaltheme.js";
export function DefautlButton(props) {
  const [isFocus, setFocus] = useState(true);
  return props.type == "white" ? (
    <GradientButton
      style={isFocus ? focusStyle : blurStyle}
      theme={isFocus ? focusTheme : blurTheme}
      height={props.height}
      width={props.width}
      textStyle={
        props.textStyle ? props.textStyle : { fontSize: 14, color: "#0359e3" }
      }
      text={props.text}
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
      style={isFocus ? focusStyle : blurStyle}
      theme={isFocus ? focusTheme : blurTheme}
      height={props.height}
      width={props.width}
      text={props.text}
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
    ></GradientButton>
  );
}
export default DefautlButton;
