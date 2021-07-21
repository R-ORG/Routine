import React, { useEffect, useState } from "react";
import { Text, View, Dimensions, Button } from "react-native";
import GradientButton from "react-native-gradient-buttons";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
import { firebase } from "../../firebase/config";

// Check for current user

// initialize DB

export default function HomeScreen() {
  const LogOut = () => {
    firebase.auth().signOut();
  };

  const user = firebase.auth().currentUser;
  const [username, setUsername] = useState("");
  const [emailData, setEmailData] = useState("");
  const uid = user.uid;
  console.log("User UID: ", uid);
  console.log("Current User: ", user);

  useEffect(() => {
    const usersRef = firebase.firestore().collection("users");
    usersRef
      .doc(uid)
      .get()
      .then((doc) => {
        if (doc.exists) {
          console.log("Document data:", doc.data());
          let userData = doc.data();
          console.log("UserData", userData.username);
          setUsername(userData.username);
          setEmailData(userData.email);
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Text style={{ textAlign: "center", marginBottom: 20 }}>Home Screen</Text>
      <Text style={{ textAlign: "center", marginBottom: 20 }}>
        Hello, {username}
      </Text>
      <Text style={{ textAlign: "center", marginBottom: 20 }}>
        Your Email Address is: {emailData}
      </Text>
      <Button
        style={{ marginTop: 20 }}
        onPress={() => LogOut()}
        title="Log Out"
        color="black"
      />
    </View>
  );
}
