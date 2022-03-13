import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    TouchableWithoutFeedback,
    Dimensions,
    SafeAreaView
} from "react-native";
import RadioBtn from "../components/theme_button";
import LanguageBtn from "../components/language_button";
import NotiBtn from "../components/notifiaction_button";
import TextBtn from "../components/text_button";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const SettingLocal = () => {

    const [whiteButtonSelected, setWhiteButtonSelected] = useState(true)
    const [engLangaugeSelected, setEngLanguageSelected] = useState(true)
    const whiteButtonHandler = () => {
        if (!whiteButtonSelected) { setWhiteButtonSelected(true) }
    }
    const blackButtonHandler = () => {
        if (whiteButtonSelected) { setWhiteButtonSelected(false) }
    }
    const engLanguageHandler = () => {
        if (!engLangaugeSelected) { setEngLanguageSelected(true) }
    }
    const vieLanguageHandler = () => {
        if (setEngLanguageSelected) { setEngLanguageSelected(false) }
    }
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.heading}>preferences</Text>
            <View style={styles.settingoption}>
                <Text style={styles.option}>theme</Text>
                <View style={styles.themebutton}>
                    <TouchableWithoutFeedback onPress={whiteButtonHandler} >
                        <View>
                            <RadioBtn selected={whiteButtonSelected} color={'#fff'} />
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={blackButtonHandler}>
                        <View>
                            <RadioBtn selected={!whiteButtonSelected} color={'#000'} />
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </View>
            <View style={styles.settingoption}>
                <Text style={styles.option}>language</Text>
                <View style={styles.languagebutton}>
                    <TouchableWithoutFeedback onPress={engLanguageHandler}>
                        <View>
                            <LanguageBtn selected={engLangaugeSelected} text={'eng'}></LanguageBtn>
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={vieLanguageHandler}>
                        <View>
                            <LanguageBtn selected={!engLangaugeSelected} text={'vie'}></LanguageBtn>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </View>
            <View style={[styles.settingoption]}>
                <Text style={styles.option}>notifications</Text>
                <View style={styles.notibutton}>
                    <NotiBtn />
                </View>
            </View>
            <Text style={styles.heading}>account</Text>
            <View>
                <View style={styles.settingoption}>
                    <Text style={styles.option}>my name</Text>
                    <Text style={styles.name}>Phong</Text>
                </View>
                <TextBtn
                    text={'Reset achievements'}
                    onPress={() => { }}
                    style={{ color: "red" }} />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        width: windowWidth,
        height: windowHeight,
        padding: 30,
        paddingTop: 50
    },
    settingoption: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 15,
        paddingBottom: 15,
    },
    themebutton: {
        width: 90,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    languagebutton: {
        display: 'flex',
        flexDirection: 'row',
    },
    notibutton: {
        marginRight: 8
    },
    heading: {
        textTransform: 'uppercase',
        color: '#0359e3',
        fontSize: 30,
        fontWeight: '500'
    },
    option: {
        textTransform: 'capitalize',
        fontSize: 22,
        fontWeight: '600',
        textAlignVertical: 'center'
    },
    name: {
        color: '#0359e3',
        textTransform: 'capitalize',
        fontSize: 22,
        fontWeight: '600',
        textAlignVertical: 'center'
    }

})

export default SettingLocal