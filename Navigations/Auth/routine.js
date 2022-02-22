import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Text, StyleSheet, View} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { ActivityIndicator } from "react-native-paper";
import { useFonts, Roboto_300Light, Roboto_500Medium, Roboto_700Bold, Roboto_900Black } from "@expo-google-fonts/roboto";
import AppLoading from 'expo-app-loading';
import RCard from './rcard.js';

const color_1 = '#0359E3'
const color_2 = '#0041b1'
const color_3 = '#C00000'
const color_4 = '#880000'
const color_5 = '#FFFFFF'
const color_6 = '#B7D2FE'

const RoutineScreen = ({ navigation }) => {
    // Create data
    const data = [
        {
            id: "1",
            name: "RUN 03 MILES",
            current: "0",
            total: "3",
            category: 'todo',
            state: 'doing',
            ftime: "01/02/2022",
            avgdone: 100,
            lstreak: "10",
            cstreak: "10"
        },
        {
            id: "2",
            name: "DRINK WATER",
            current: "1",
            total: "4",
            category: 'todo',
            state: 'doing',
            ftime: "01/02/2022",
            avgdone: 100,
            lstreak: "10",
            cstreak: "10"
        },
        {
            id: "3",
            name: "DON'T SMOKE",
            current: "18h",
            total: "24h",
            category: 'nottodo',
            state: 'doing',
            ftime: "01/02/2022",
            avgdone: 100,
            lstreak: "10",
            cstreak: "10"
        },
        {
            id: "4",
            name: "DRINK WATER",
            current: "1",
            total: "4",
            category: 'todo',
            state: 'doing',
            ftime: "01/02/2022",
            avgdone: 100,
            lstreak: "10",
            cstreak: "10"
        },
        {
            id: "5",
            name: "DRINK WATER",
            current: "1",
            total: "4",
            category: 'todo',
            state: 'doing',
            ftime: "01/02/2022",
            avgdone: 100,
            lstreak: "10",
            cstreak: "10"
        },
        {
            id: "6",
            name: "Get up 5h",
            current: "7d",
            total: "7d",
            category: "todo",
            state: "completed",
            ftime: "01/02/2022",
            avgdone: 100,
            lstreak: "10",
            cstreak: "10"
        },
        {
            id: "7",
            name: "Tiktok 180 minutes",
            current: "7d",
            total: "7d",
            category: "nottodo",
            state: "completed",
            ftime: "01/02/2022",
            avgdone: 100,
            lstreak: "10",
            cstreak: "10"
        }
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
            <Text style={{alignSelf: 'flex-start', marginLeft: 25, marginTop: 10, marginBottom: 5, fontSize: 30, fontFamily: 'Roboto_500Medium', color: color_2}}>ROUTINES</Text>
            <FlatList
                data={currentData}
                keyExtractor={item => item.id}
                renderItem={
                    ({item}) => 
                    <RCard 
                    name={item.name} 
                    current={item.current} 
                    total={item.total} 
                    category={item.category} 
                    state={item.state}
                    ftime={item.ftime}
                    avgdone={item.avgdone}
                    lstreak={item.lstreak}
                    cstreak={item.cstreak}
                    />
                }
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
                        ]))
                        setIsLoading(false)
                    }, 2000);
                }}
                onEndReachedThreshold = {0.1}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default RoutineScreen;