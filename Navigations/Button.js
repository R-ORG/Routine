import React from "react";
import GradientButton from "react-native-gradient-buttons";
// import * as style from "../style/generalstyle";

export function DefautlButton(props) {
  return (
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
