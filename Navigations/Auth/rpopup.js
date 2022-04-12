import React from "react";
import { Text, StyleSheet, View, Dimensions} from "react-native";
import GradientButton from "react-native-gradient-buttons";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const RPopup = (props) => {
    return (
        <View style={styles.background}>
            <View style={styles.container}>
                <View style={{flex: 25, flexDirection: 'row'}}>
                    <View style={{flex: 6, flexDirection: 'row', justifyContent: 'flex-start'}}>
                        <Text style={[styles.largeText, {color: props.color_1}]}>{props.name}</Text>
                    </View>
                    <View style={{flex: 4, flexDirection: 'row', justifyContent: 'flex-end'}}>
                        <Text style={[styles.largeText, {color: props.color_1}]}>{props.current}/{props.total}</Text>
                    </View>
                </View>
                <View style={{flex: 25, flexDirection: 'row'}}>
                    <View style={{flex: 1, justifyContent: 'flex-end', alignItems: 'flex-start'}}>
                        <Text style={[styles.smallText, {color: props.color_1}]}>FIRST TIME: {props.ftime}</Text>
                    </View>
                    <View style={{flex: 1, justifyContent: 'flex-end', alignItems: 'flex-end'}}>
                        <Text style={[styles.smallText, {color: props.color_1}]}>LONGEST STREAK: {props.lstreak}</Text>
                    </View>
                </View>
                <View style={{flex: 25, flexDirection: 'row'}}>
                    <View style={{flex: 1, justifyContent: 'flex-start', alignItems: 'flex-start'}}>
                        <Text style={[styles.smallText, {color: props.color_1}]}>AVG. DONE: {props.avgdone}</Text>
                    </View>
                    <View style={{flex: 1, justifyContent: 'flex-start', alignItems: 'flex-end'}}>
                        <Text style={[styles.smallText, {color: props.color_1}]}>CURRENT STREAK: {props.cstreak}</Text>
                    </View>
                </View>
                <View style={{flex: 25, justifyContent: 'center'}}>
                    <GradientButton
                    text={props.state === "completed" ? "OK!" : "KEEP ON!"}
                    textStyle={[styles.largeText, {color: props.color_3}]}
                    style={styles.button}
                    gradientBegin={props.color_1}
                    gradientEnd={props.color_2}
                    gradientDirection="radial"
                    height={windowHeight * 0.25 * 0.25}
                    width={windowWidth * 0.9 * 0.95}
                    radius={10}
                    impactStyle="Light"
                    onPressAction={() => {props.setDetail(false)}}
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#000000aa'
    },
    container: {
        marginTop: 200,
        marginLeft: 15,
        padding: 8,
        height: windowHeight * 0.25,
        width: windowWidth * 0.92,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    largeText: {
        marginLeft: 5,
        marginRight: 5,
        fontSize: 25,
        fontFamily: 'Roboto_700Bold',
    },
    normalText: {
        marginLeft: 5,
        marginRight: 5,
        fontSize: 20,
        fontFamily: 'Roboto_700Bold',
    },
    smallText: {
        marginLeft: 5,
        marginRight: 5,
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
})

export default RPopup;