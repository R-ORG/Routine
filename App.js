import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// Auth Screen
import FirstScreen from "./Navigations/Auth/firstscreen";
import NameScreen from "./Navigations/Auth/namescreen";
import LoginScreen from "./Navigations/Auth/loginscreen";
import SignUpScreen from "./Navigations/Auth/signupscreen";
import SetNameRoutine from "./Navigations/New_routine/setnameroutine"; //testing
import SetAttributeRoutine from "./Navigations/New_routine/setattributeroutine"; //test
import SetIconRoutine from "./Navigations/New_routine/seticonroutine"; //testing
import AchieveScreen from "./Navigations/Auth/achievescreen";
import RoutineScreen from "./Navigations/Auth/routine";
import { firebase } from "./firebase/config";

// Main Screen
import HomeScreen from "./Navigations/Main/Home";

import { decode, encode } from "base-64";
if (!global.btoa) {
  global.btoa = encode;
}
if (!global.atob) {
  global.atob = decode;
}

const Stack = createNativeStackNavigator();

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        setLoggedIn(false);
        setLoaded(true);
      } else {
        setLoggedIn(true);
        setLoaded(true);
      }
    });
  }, []);

  return (
    <>
      {!loaded ? (
        <View style={{ flex: 1, justifyContent: "center" }}>
          <Text>Loading...</Text>
        </View>
      ) : loggedIn ? (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="FirstScreen"
              component={FirstScreen}
              options={{ headerShown: false }}
            />

            <Stack.Screen
              name="NameScreen"
              component={NameScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LoginScreen"
              component={LoginScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignUpScene"
              component={SignUpScreen}
              options={{ headerShown: false }}
            />

            <Stack.Screen
              name="SetNameRoutine"
              component={SetNameRoutine}
              options={{ headerShown: false }}
            />

            <Stack.Screen
              name="SetIconRoutine"
              component={SetIconRoutine}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SetAttributeRoutine"
              component={SetAttributeRoutine}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Achieve"
              component={AchieveScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Routine"
              component={RoutineScreen}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      ) : (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="FirstScreen"
              component={FirstScreen}
              options={{ headerShown: false }}
            />

            <Stack.Screen
              name="NameScreen"
              component={NameScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LoginScreen"
              component={LoginScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignUpScene"
              component={SignUpScreen}
              options={{ headerShown: false }}
            />

            <Stack.Screen
              name="SetNameRoutine"
              component={SetNameRoutine}
              options={{ headerShown: false }}
            />

            <Stack.Screen
              name="SetIconRoutine"
              component={SetIconRoutine}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SetAttributeRoutine"
              component={SetAttributeRoutine}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Achieve"
              component={AchieveScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Routine"
              component={RoutineScreen}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      )}
    </>
  );
}
