import React from "react";
import { TouchableWithoutFeedback, View, Text, StyleSheet } from "react-native";

const TextBtn = (props) => {
    return (
        <TouchableWithoutFeedback onPress={props.onPress}>
            <View style={styles.container}>
                <Text style={[styles.content, props.style]}>
                    {props.text}
                </Text>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 15,
        paddingBottom: 15
    },
    content: {
        textTransform: 'capitalize',
        fontSize: 24,
        fontWeight: '600',
        textAlignVertical: 'center'
    }
})
export default TextBtn