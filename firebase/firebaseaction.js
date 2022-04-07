import { firebase } from "./config";
import { doc, setDoc } from "firebase/firestore";
const usersRef = firebase.firestore().collection("users");
const achiveRef = firebase.firestore().collection("achivements");

const onLoginPress = (email, password) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      alert(error);
      console.log(error);
    });
};

const addRoutine = (uid, routine) => {
  usersRef
    .doc(uid)
    .collection("Routines")
    .doc(routine.ID) // routine name or ID (but i think it is better to use name)
    .set(routine)
    .catch((error) => {
      alert(error);
      console.log(error);
    });
};
const fetchRoutine = (uid) => {
  let routineDocs = usersRef.doc(uid).collection("Routines").get();
  return routineDocs;
};
const changeSetting = (uid, setting) => {
  usersRef
    .doc(uid)
    .collection("Setting")
    .set(setting)
    .catch((error) => {
      alert(error);
      console.log(error);
    });
};

const fetchMyAchivement = (n) => {
  return usersRef
    .doc(uid)
    .collection("Achivement")
    .orderBy("name") // need to confirm what should be fetch first
    .limit(n) // number of achivement need to be fetched
    .get()
    .catch((error) => {
      alert(error);
      console.log(error);
    });
};
const updateAchivement = (uid, achivement) => {
  usersRef
    .doc(uid)
    .collection("Achivement")
    .set(achivement)
    .catch((error) => {
      alert(error);
      console.log(error);
    });
};

export {
  onLoginPress,
  addRoutine,
  fetchRoutine,
  changeSetting,
  updateAchivement,
  fetchMyAchivement,
};
