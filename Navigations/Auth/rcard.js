import React, { useState, useEffect, useRef } from "react";
import { Animated, Text, StyleSheet, View, Modal, Dimensions, TouchableHighlight, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import GradientButton from "react-native-gradient-buttons";
import RPopup from "./rpopup";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const widthBackground = windowWidth * 0.95;
const heightBackground = windowHeight * 0.145;
const widthItem = windowWidth * 0.92;
const heightItem = windowHeight * 0.13;

const ProgressBar = (props) => {
    const [width, setWidth] = useState(0);
    const animatedValue = useRef(new Animated.Value(-1000)).current;
    const reactive = useRef(new Animated.Value(-1000)).current;

    useEffect(() => {
        Animated.timing(animatedValue, {
            toValue: reactive,
            duration: 300,
            useNativeDriver: true,
        }).start();
    }, []);

    useEffect(() => {
        reactive.setValue(-width + width * props.step / props.steps);
    }, [props.step, width]);

    return (
        <View
        onLayout={e => {
            const newWidth = e.nativeEvent.layout.width;
            setWidth(newWidth);
        }}
        style={{height: props.height, width: widthItem, backgroundColor: 'rgba(0,0,0,0.1)', borderRadius: props.height, overflow: 'hidden', marginTop: 2, marginBottom: 5,marginLeft: 5}}
        >
            <Animated.View style={{height: props.height, width: '100%', borderRadius: props.height, backgroundColor: props.color, position: 'absolute', transform: [{translateX: animatedValue}]}}>
            </Animated.View>
        </View>
    )
}

const RCard = (props) => {
    var color_1 = '#0359E3';
    var color_2 = '#0041b1';
    if (props.category === "nottodo") {
        color_1 = '#C00000';
        color_2 = '#880000';
    } 
    
    const color_3 = '#FFFFFF'
    const color_4 = '#B7D2FE'

    // State to show pop up
    const [detail, setDetail] = useState(false)

    return (
        <View>
            <TouchableHighlight 
            style={{borderRadius: 10, activeOpacity: 0.5}} 
            onPress={() => {setDetail(true)}} 
            underlayColor={color_1}
            >
                <View style={styles.itemBackground}>
                    <LinearGradient
                    start={{x:0.0, y:0.0}}
                    end={{x:1.0, y:0.0}}
                    colors={[color_1, color_2]}
                    style={[styles.item, styles.shadow]}
                    >
                        <Image 
                        source={props.image}
                        style={styles.imageBackground}
                        />
                        <View style={{flex: 7, flexDirection: 'column'}}>
                            <View style={{flex: 4, padding: 8}}>
                                <Text style={styles.largeText}>{props.name}</Text>
                            </View>
                            <View style={{flex: 6, padding: 8}}>
                                <Text style={styles.smallText}>
                                    {props.current}{props.unit}/{props.total}{props.unit}
                                    {props.state === "completed" ? " - COMPLETED!" : null}
                                </Text>
                            </View>
                        </View>
                        <View style={{flex: 3, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                            <View style={{flex: 1}}>
                                {props.category === "todo" && props.state !== "completed" ?
                                    <GradientButton
                                    text="DO"
                                    textStyle={[styles.normalText, {color: color_1}]}
                                    style={styles.button}
                                    gradientBegin={color_3}
                                    gradientEnd={color_4}
                                    gradientDirection="radial"
                                    height={heightItem * 0.4}
                                    width={widthItem * 0.27}
                                    radius={5}
                                    impactStyle="Light"
                                    onPressAction={() => alert("In developing")} // navigation.navigate("NameScreen")}
                                    /> :
                                    null
                                }
                            </View>
                            <View style={{flex: 1}}>
                                {props.state !== "completed" ?
                                    <GradientButton
                                    text={props.category === "todo" ? "DONE" : "GIVE UP"}
                                    textStyle={[styles.normalText, {color: color_3}]}
                                    style={styles.button}
                                    gradientBegin={color_1}
                                    gradientEnd={color_2}
                                    gradientDirection="radial"
                                    height={heightItem * 0.4}
                                    width={widthItem * 0.27}
                                    radius={5}
                                    impactStyle="Light"
                                    onPressAction={() => alert("In developing")}
                                    /> :
                                    null
                                }
                            </View>
                        </View>
                    </LinearGradient>
                </View>
            </TouchableHighlight>
            <ProgressBar step={props.current * 10 / props.total} steps={10} height={10} color={color_1}/>
            <Modal
            transparent={true}
            visible={detail}
            >
                <RPopup 
                name={props.name} 
                current={props.current} 
                total={props.total}
                unit={props.unit}
                state={props.state}
                ftime={props.ftime}
                avgdone={props.avgdone}
                lstreak={props.lstreak}
                cstreak={props.cstreak}
                color_1={color_1}
                color_2={color_2}
                color_3={color_3}
                setDetail={setDetail}
                />
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    itemBackground: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: widthBackground,
        height: heightBackground,
    },
    item: {
        flexDirection: 'row',
        width: widthItem,
        height: heightItem,
        marginTop: 10,
        marginLeft: 5,
        borderRadius: 10,
    },
    shadow: {
        shadowColor: '#000',
        shadowOffset: {
        width: 0,
        height: 2,
        },
        shadowOpacity: 0.8,
        shadowRadius: 8,
        elevation: 8,
    },
    largeText: {
        marginLeft: 12,
        marginRight: 12,
        color: '#fff',
        fontSize: 25,
        fontFamily: 'Roboto_700Bold',
    },
    normalText: {
        marginLeft: 12,
        marginRight: 12,
        fontSize: 20,
        fontFamily: 'Roboto_700Bold',
    },
    smallText: {
        marginLeft: 12,
        marginRight: 12,
        color: '#fff',
        fontSize: 15,
        fontFamily: 'Roboto_500Medium',
    },
    button: {
        marginTop: 5,
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 3,

        elevation: 3,
        borderRadius: 7,
    },
    imageBackground:{
        position: 'absolute',
        width: widthItem * 0.2,
        height: heightItem,
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        opacity: 0.5
    },
});

export default RCard;