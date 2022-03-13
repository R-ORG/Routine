import React from "react";
import { Text, StyleSheet, View, Image, ImageBackground, Dimensions, TouchableHighlight } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const widthBackground = windowWidth * 0.9;
const heightBackground = windowHeight * 0.145;
const widthItem = windowWidth * 0.8;
const heightItem = windowHeight * 0.115;

const ACard = (props) => {
    var color_1 = '#205ae0';
    var color_2 = '#4662e9';
    if (props.state === "completed") {
        color_1 = '#00a04b';
        color_2 = '#009946';
    } else if (props.state === "locked") {
        color_1 = '#9ec3e5';
        color_2 = '#9fc3e7';
    }
    
    return (
        <TouchableHighlight 
        style={{borderRadius: 10, activeOpacity: 0.5}} 
        onPress={() => {return null;}} 
        underlayColor={color_1}
        >
            <View style={styles.itemBackground}>
                <LinearGradient
                start={{x:0.0, y:0.0}}
                end={{x:1.0, y:0.0}}
                colors={[color_1, color_2]}
                style={[styles.item, styles.shadow]}
                >
                    <View style={{flex: 9}}>
                        <View style={{flex: 1, padding: 8}}>
                            <Text style={styles.largeText}>{props.top}</Text>
                        </View>
                        <View style={{flex: 1, padding: 8}}>
                            <Text style={styles.smallText}>
                                {props.down}
                                {props.state === "completed" ? " - COMPLETED!" : props.state === "locked" ? " - LOCKED!" : null}
                            </Text>
                        </View>
                    </View>
                    <View style={{flex: 1, flexWrap: 'nowrap', justifyContent: 'center', alignItems: 'center'}}>
                        <ImageBackground
                        source={require("./emoji/background.jpg")}
                        style={[styles.imageBackground, styles.shadow]}
                        >
                            <Image 
                            source={props.image}
                            style={styles.image}
                            />
                        </ImageBackground>
                    </View>
                </LinearGradient>
            </View>
        </TouchableHighlight>
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
    imageBackground: {
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center',
        width: widthBackground * 0.25,
        height: windowHeight * 0.135,
        borderRadius: 150 / 2,
        overflow: 'hidden',
    },
    image: {
        width: widthBackground * 0.2,
        height: windowHeight * 0.105,
    },
    largeText: {
        marginLeft: 12,
        color: '#fff',
        fontSize: 25,
        fontFamily: 'Roboto_700Bold',
    },
    smallText: {
        marginLeft: 12,
        color: '#fff',
        fontSize: 15,
        fontFamily: 'Roboto_500Medium',
    }
});

export default ACard;