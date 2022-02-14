import React from "react";
import { View, StyleSheet, TouchableHighlight, Animated } from "react-native";
import { Entypo, Feather } from '@expo/vector-icons'
export default class FloatingActionButton extends React.Component {

    buttonSize = new Animated.Value(1);
    mode = new Animated.Value(0);

    handlePress = () => {
        Animated.sequence([
            Animated.timing(this.buttonSize, {
                toValue: 0.95,
                duration: 200,
                useNativeDriver: false
            }),
            Animated.timing(this.buttonSize, {
                toValue: 1,
                useNativeDriver: false
            }),
            Animated.timing(this.mode, {
                toValue: this.mode._value === 0 ? 1 : 0,
                useNativeDriver: false
            })
        ]).start();
    };

    render() {
        const sizeStyle = {
            transform: [{ scale: this.buttonSize }]
        };
        const colorChange = this.mode.interpolate({
            inputRange: [0, 1],
            outputRange: ["#0041b1", "#fff"]
        })
        const backgroundChange = this.mode.interpolate({
            inputRange: [0, 1],
            outputRange: ["#fff", "#0041b1"]
        })

        const thermometerX = this.mode.interpolate({
            inputRange: [0, 1],
            outputRange: [-24, -100]
        })
        const thermometerY = this.mode.interpolate({
            inputRange: [0, 1],
            outputRange: [2, 0]
        })
        const clockX = this.mode.interpolate({
            inputRange: [0, 1],
            outputRange: [-24, -60]
        })
        const clockY = this.mode.interpolate({
            inputRange: [0, 1],
            outputRange: [2, -60]
        })
        const keyX = this.mode.interpolate({
            inputRange: [0, 1],
            outputRange: [-24, 12]
        })
        const keyY = this.mode.interpolate({
            inputRange: [0, 1],
            outputRange: [2, -60]
        })
        const searchX = this.mode.interpolate({
            inputRange: [0, 1],
            outputRange: [-24, 52]
        })
        const searchY = this.mode.interpolate({
            inputRange: [0, 1],
            outputRange: [2, 0]
        })
        return (
            <View style={{ position: "absolute", alignItems: 'center', bottom: 100 }}>
                <Animated.View style={{ position: 'absolute', left: thermometerX, top: thermometerY }}>
                    <View style={[styles.secondaryButton, styles.shadow]}>
                        <Feather name="thermometer" size={24} color='#0041b1'></Feather>
                    </View>
                </Animated.View>
                <Animated.View style={{ position: 'absolute', left: clockX, top: clockY }}>
                    <View style={[styles.secondaryButton, styles.shadow]}>
                        <Feather name="clock" size={24} color='#0041b1'></Feather>
                    </View>
                </Animated.View>
                <Animated.View style={{ position: 'absolute', left: keyX, top: keyY }}>
                    <View style={[styles.secondaryButton, styles.shadow]}>
                        <Feather name="key" size={24} color='#0041b1'></Feather>
                    </View>
                </Animated.View><Animated.View style={{ position: 'absolute', left: searchX, top: searchY }}>
                    <View style={[styles.secondaryButton, styles.shadow]}>
                        <Feather name="search" size={24} color='#0041b1'></Feather>
                    </View>
                </Animated.View>
                <Animated.View style={[styles.button, sizeStyle, styles.shadow, { backgroundColor: backgroundChange }]}>
                    <TouchableHighlight onPress={this.handlePress} underlayColor={backgroundChange}>
                        <Animated.View style={{ backgroundColor: backgroundChange }}>
                            <Entypo name="dots-three-horizontal" size={30} color="#0041b1" />
                        </Animated.View>
                    </TouchableHighlight>
                </Animated.View>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#fff",
        borderColor: '#ccc',
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
        width: 60,
        height: 60,
        borderRadius: 30,
        position: "absolute",
        zIndex: 99,
    },
    secondaryButton: {
        position: 'absolute',
        alignItems: 'center',
        borderColor: '#ccc',
        borderWidth: 2,
        justifyContent: 'center',
        width: 48,
        height: 48,
        borderRadius: 24,
        backgroundColor: '#fff',
        zIndex: 98
    },
    shadow: {
        elevation: 3
    }
})