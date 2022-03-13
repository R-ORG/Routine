import React from "react";
import { View, StyleSheet } from "react-native";

export default RadioBtn = (props) => {
    const _borderWidth = props.selected ? 4 : 0
    return (
        <View style={[styles.selected, { borderWidth: _borderWidth, backgroundColor: props.color }]}>
        </View>

    )
}

const styles = StyleSheet.create({
    selected: {
        height: 40,
        width: 40,
        borderRadius: 5,
        borderColor: '#0359e3',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 4,
    }
})