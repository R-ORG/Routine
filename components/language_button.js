import React from "react";
import { Text, View, StyleSheet } from "react-native";

LanguageBtn = (props) => {
    const _backgroundColor = props.selected ? '#0359e3' : '#fff'
    const _textColor = props.selected ? '#fff' : '#0359e3'
    return (
        <View style={[styles.container, { backgroundColor: _backgroundColor }]}>
            <Text style={[styles.content, { color: _textColor }]}>{props.text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 60,
        height: 30,
        alignItems: 'center',
        elevation: 10,
        borderRadius: 3
    },
    content: {
        textTransform: 'uppercase',
        fontSize: 24,
        lineHeight: 30,
    }
})

export default LanguageBtn;