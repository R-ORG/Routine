import React from "react";
import { Text, View, Dimensions, Button } from "react-native";
import GradientButton from "react-native-gradient-buttons";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
import { firebase } from "../../firebase/config";

const LogOut = () => {
  firebase.auth().signOut();
};
// const userId = firebase.auth().currentUser.uid;

// // const userId = firebase.auth().currentUser.uid;
// const db = firebase.firestore();

// // Still on testing

// db.collection("users")
//   .doc(userId)
//   .get()
//   .then((snapshot) => {
//     if (snapshot.exist) {
//       console.log("Document data: ", snapshot.data());
//     } else {
//       //snapshot.data() will be undefined this time
//       console.log("No such document!");
//     }
//   })
//   .catch((error) => {
//     console.log("Error getting document: ", error);
//   });

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Text style={{ textAlign: "center", marginBottom: 20 }}>Home Screen</Text>
      <Text></Text>
      <Button
        style={{ marginTop: 20 }}
        onPress={() => LogOut()}
        title="Log Out"
        color="black"
      />
    </View>
  );
}
