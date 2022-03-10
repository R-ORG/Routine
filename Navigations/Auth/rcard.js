import React, {useState} from "react";
import { Text, StyleSheet, View, Modal, Dimensions, TouchableHighlight } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import GradientButton from "react-native-gradient-buttons";
import RPopup from "./rpopup";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

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
                        <View style={{flex: 7, flexDirection: 'column'}}>
                            <View style={{flex: 4, padding: 8}}>
                                <Text style={styles.largeText}>{props.name}</Text>
                            </View>
                            <View style={{flex: 6, padding: 8}}>
                                <Text style={styles.smallText}>
                                    {props.current}/{props.total}
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
                                    height={windowHeight * 0.13 * 0.4}
                                    width={windowWidth * 0.9 * 0.28}
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
                                    height={windowHeight * 0.13 * 0.4}
                                    width={windowWidth * 0.9 * 0.28}
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
            <Modal
            transparent={true}
            visible={detail}
            >
                <RPopup 
                name={props.name} 
                current={props.current} 
                total={props.total}
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
        width: windowWidth * 0.95,
        height: windowHeight * 0.145,
    },
    item: {
        flexDirection: 'row',
        width: windowWidth * 0.92,
        height: windowHeight * 0.13,
        margin: 5,
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
    }
});

export default RCard;