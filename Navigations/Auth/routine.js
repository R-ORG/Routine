import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { Text, StyleSheet, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { ActivityIndicator } from "react-native-paper";
import {
  useFonts,
  Roboto_300Light,
  Roboto_500Medium,
  Roboto_700Bold,
  Roboto_900Black,
} from "@expo-google-fonts/roboto";
import AppLoading from "expo-app-loading";
import RCard from "./rcard.js";
import { firebase } from "../../firebase/config";
import { fetchRoutine } from "../../firebase/firebaseaction";
import AsyncStorage from "@react-native-async-storage/async-storage";
import RButton from "../Button.js";

const color_1 = "#0359E3";
const color_2 = "#0041b1";
const color_3 = "#C00000";
const color_4 = "#880000";
const color_5 = "#FFFFFF";
const color_6 = "#B7D2FE";

const RoutineScreen = ({ navigation }) => {
  // State to render loading
  const [isLoading, setIsLoading] = useState(false);
  const [currentData, setCurrentData] = useState();
  useEffect(() => {
    fetchdata();
  });
  async function fetchdata() {
    var data;
    try {
      var user = firebase.auth().currentUser;
      if (user) {
        data = await fetchRoutine(user.uid);
      } else {
        data = await AsyncStorage.getItem("Routine");
        // console.log(JSON.parse(data));
      }
    } catch (e) {
      console.log(e);
    }
    // console.log(JSON.parse(data));
    return data ? setCurrentData(JSON.parse(data)) : setCurrentData([]);
  }

  // console.log(currentData);
  const [fontsLoaded, error] = useFonts({
    Roboto_300Light,
    Roboto_500Medium,
    Roboto_700Bold,
    Roboto_900Black,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text
        style={{
          alignSelf: "flex-start",
          marginLeft: 25,
          marginTop: 10,
          marginBottom: 5,
          fontSize: 30,
          fontFamily: "Roboto_500Medium",
          color: color_2,
        }}
      >
        ROUTINES
      </Text>
      <RButton
        type="invi"
        text="Test - Naming new routine"
        style={{ marginVertical: 20 }}
        textStyle={{ fontSize: 14, color: "#888" }}
        height={20}
        width={300}
        onPressAction={() => navigation.navigate("SetNameRoutine")}
      />
      <FlatList
        data={currentData}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
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
        )}
        ListFooterComponent={() => {
          return isLoading ? (
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                padding: 5,
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  color: color_1,
                }}
              >
                Load More
              </Text>
              <ActivityIndicator size="large" color={color_2} />
            </View>
          ) : null;
        }}
        onEndReached={() => {
          setIsLoading(true);
          setTimeout(() => {
            // Add data if loading
            setIsLoading(false);
          }, 2000);
        }}
        onEndReachedThreshold={0.1}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default RoutineScreen;
