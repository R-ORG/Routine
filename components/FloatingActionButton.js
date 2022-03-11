import React, { useState, useRef } from "react";
import {
    View,
    StyleSheet,
    TouchableWithoutFeedback,
    Animated,
    Dimensions,
} from "react-native";
import { Entypo, Feather } from '@expo/vector-icons'

const windowWidth = Dimensions.get("window").width;

const FloatingActionButton = () => {
    const [colorMode, setColorMode] = useState(false)
    const btn1 = useRef(new Animated.Value(0)).current;

    const btn2X = useRef(new Animated.Value(0)).current;
    const btn2Y = useRef(new Animated.Value(5)).current;

    const btnIn = () => {
        Animated.timing(btn1, {
            toValue: -75,
            duration: 350,
            useNativeDriver: false
        }).start();

        Animated.timing(btn2X, {
            toValue: -35,
            duration: 350,
            useNativeDriver: false
        }).start();

        Animated.timing(btn2Y, {
            toValue: -60,
            duration: 350,
            useNativeDriver: false
        }).start();


    };

    const btnOut = () => {
        Animated.timing(btn1, {
            toValue: 0,
            duration: 350,
            useNativeDriver: false
        }).start();

        Animated.timing(btn2X, {
            toValue: 0,
            duration: 350,
            useNativeDriver: false
        }).start();

        Animated.timing(btn2Y, {
            toValue: 5,
            duration: 350,
            useNativeDriver: false
        }).start();
    };

    const navigation = () => {
        alert("implement later")
    }

    const handlePress = () => {
        setColorMode(!colorMode)
        if (!colorMode) {
            btnIn()
        }
        else {
            btnOut()
        }
    };


    return (
        <View style={{
            position: "absolute",
            bottom: 50,
            alignItems: "center",
            marginHorizontal: windowWidth / 2 - 30
        }}>
            <TouchableWithoutFeedback onPress={navigation}>
                <Animated.View style={[styles.secondaryButton, { left: -75, left: btn1, top: 5 }]}>
                    <Feather name="thermometer" size={24} color='#0041b1'></Feather>
                </Animated.View>
            </TouchableWithoutFeedback>


            <TouchableWithoutFeedback>
                <Animated.View style={[styles.secondaryButton, { left: btn2X, top: btn2Y }]}>
                    <Feather name="key" size={24} color='#0041b1'></Feather>
                </Animated.View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback>
                <Animated.View style={[styles.secondaryButton, { right: btn2X, top: btn2Y }]}>
                    <Feather name="search" size={24} color='#0041b1'></Feather>
                </Animated.View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback>
                <Animated.View style={[styles.secondaryButton, { right: btn1, top: 5 }]}>
                    <Feather name="clock" size={24} color='#0041b1'></Feather>
                </Animated.View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={handlePress}>
                {
                    !colorMode ?
                        <View style={[
                            styles.button,
                            styles.shadow,
                            {
                                position: "relative",
                                backgroundColor: "#fff",
                                zIndex: 100
                            }
                        ]}>
                            {
                                <Entypo name="dots-three-horizontal" size={30} color="#0041b1" />
                            }
                        </View>
                        :
                        <View style={[
                            styles.button,
                            styles.shadow,
                            {
                                position: "relative",
                                zIndex: 100
                            }
                        ]}>
                            {
                                <Entypo name="dots-three-horizontal" size={30} color="#fff" />
                            }
                        </View>
                }
            </TouchableWithoutFeedback>
        </View>

    );
}

export default FloatingActionButton;

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#0041b1",
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

