import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Text, StyleSheet, View} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { ActivityIndicator } from "react-native-paper";
import { useFonts, Roboto_300Light, Roboto_500Medium, Roboto_700Bold, Roboto_900Black } from "@expo-google-fonts/roboto";
import AppLoading from 'expo-app-loading';
import ACard from './acard.js';

const color_1 = '#0359e3'
const color_2 = '#0041b1'

const AchieveScreen = ({ navigation }) => {
    // Create data
    const data = [
        {
            id: "1",
            name: "Item 1",
            top: "3-DAY STREAK",
            down: "3/3",
            image: require("./emoji/smile.png"),
            state: "completed",
        },
        {
            id: "2",
            name: "Item 2",
            top: "4-DAY STREAK",
            down: "3/4",
            image: require("./emoji/smile.png"),
            state: "doing",
        },
        {
            id: "3",
            name: "Item 3",
            top: "5-DAY STREAK",
            down: "3/5",
            image: require("./emoji/smile.png"),
            state: "doing",
        },
        {
            id: "4",
            name: "Item 4",
            top: "6-DAY STREAK",
            down: "3/6",
            image: require("./emoji/smile.png"),
            state: "doing",
        },
        {
            id: "5",
            name: "Item 5",
            top: "7-DAY STREAK",
            down: "3/7",
            image: require("./emoji/smile.png"),
            state: "doing",
        },
        {
            id: "6",
            name: "Item 6",
            top: "8-DAY STREAK",
            down: "3/8",
            image: require("./emoji/smile.png"),
            state: "doing",
        },
        {
            id: "7",
            name: "Item 7",
            top: "9-DAY STREAK",
            down: "3/9",
            image: require("./emoji/smile.png"),
            state: "doing",
        },
        {
            id: "8",
            name: "Item 8",
            top: "10-DAY STREAK",
            down: "3/10",
            image: require("./emoji/smile.png"),
            state: "doing",
        },
        {
            id: "9",
            name: "Item 9",
            top: "11-DAY STREAK",
            down: "3/11",
            image: require("./emoji/smile.png"),
            state: "doing",
        },
        {
            id: "10",
            name: "Item 10",
            top: "12-DAY STREAK",
            down: "3/12",
            image: require("./emoji/smile.png"),
            state: "locked",
        },
    ]
    // State to update data
    const [currentData, setCurrentData] = useState(data);
    // State to render loading
    const [isLoading, setIsLoading] = useState(false);

    const [fontsLoaded, error] = useFonts({Roboto_300Light, Roboto_500Medium, Roboto_700Bold, Roboto_900Black});
    if (!fontsLoaded) {
        return (<AppLoading />);
    }
    
    return (
        <View style={styles.container}>
            <StatusBar style='auto'/>
            <Text style={{alignSelf: 'flex-start', marginLeft: 25, marginTop: 10, marginBottom: 5, fontSize: 30, fontFamily: 'Roboto_500Medium', color: color_2}}>ACHIEVEMENT</Text>
            <FlatList
                data={currentData}
                keyExtractor={item => item.id}
                renderItem={({item}) => <ACard top={item.top} down={item.down} image={item.image} state={item.state}/>}
                ListFooterComponent={() => {
                    return (
                        isLoading ? 
                        <View style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: 5,
                        }}>
                            <Text style={{
                                fontSize: 20,
                                color: color_1,
                            }}>
                                Load More
                            </Text>
                            <ActivityIndicator size='large' color={color_2}/>
                        </View> : null
                    );
                }}
                onEndReached={() => {
                    setIsLoading(true)
                    setTimeout(() => {
                        // Add data if loading
                        setCurrentData(data.concat([ 
                            {
                                id: "11",
                                name: "Item 11",
                                top: "13-DAY STREAK",
                                down: "3/13",
                                image: require("./emoji/smile.png"),
                                state: "locked",
                            },
                            {
                                id: "12",
                                name: "Item 12",
                                top: "14-DAY STREAK",
                                down: "3/14",
                                image: require("./emoji/smile.png"),
                                state: "locked",
                            },
                            {
                                id: "13",
                                name: "Item 13",
                                top: "15-DAY STREAK",
                                down: "3/15",
                                image: require("./emoji/smile.png"),
                                state: "locked",
                            } 
                        ]))
                        setIsLoading(false)
                    }, 2000);
                }}
                onEndReachedThreshold = {0.1}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default AchieveScreen;
