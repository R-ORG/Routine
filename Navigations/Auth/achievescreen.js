import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Dimensions,
  TouchableHighlight,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";
import { ActivityIndicator } from "react-native-paper";
import { fetchMyAchivement } from "../../firebase/firebaseaction";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

function NewItem(props) {
  return (
    <TouchableHighlight
      onPress={() => {
        return null;
      }}
      underlayColor="#0359e3"
    >
      <View style={styles.outItem}>
        <LinearGradient
          start={{ x: 0.0, y: 0.0 }}
          end={{ x: 1.0, y: 0.0 }}
          colors={["#0359e3", "#0041b1"]}
          style={[styles.item, styles.shadowStyle]}
        >
          <View style={{ flex: 9 }}>
            <View style={{ flex: 1, padding: 10 }}>
              <Text style={styles.largeText}>{props.top}</Text>
            </View>
            <View style={{ flex: 1, padding: 10 }}>
              <Text style={styles.smallText}>{props.down}</Text>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              flexWrap: "nowrap",
              justifyContent: "center",
              alignItems: "center",
              overflow: "visible",
            }}
          >
            <ImageBackground
              source={require("./background.jpg")}
              imageStyle={{ borderRadius: 6 }}
              style={[styles.image, styles.shadowStyle]}
            >
              <Image
                source={props.image}
                style={{
                  width: windowWidth * 0.2 * 0.9,
                  height: windowHeight * 0.1,
                }}
              />
            </ImageBackground>
          </View>
        </LinearGradient>
      </View>
    </TouchableHighlight>
  );
}

const AchieveScreen = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false);
  const achivements = fetchMyAchivement(10);

  const [currentData, setCurrentData] = useState(data);
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <FlatList
        data={currentData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <NewItem top={item.top} down={item.down} image={item.image} />
        )}
        ListFooterComponent={() => {
          return isLoading ? (
            <View
              style={{
                marginTop: 10,
                alignContent: "center",
                justifyContent: "center",
                padding: 10,
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  color: "#0359e3",
                }}
              >
                Load More
              </Text>
              <ActivityIndicator size="large" color="#0359e3" />
            </View>
          ) : null;
        }}
        onEndReached={() => {
          setIsLoading(true);
          setTimeout(() => {
            setCurrentData(
              data.concat([
                {
                  id: "11",
                  name: "Item 11",
                  top: "13-DAY STREAK",
                  down: "1/13",
                  image: require("./emoji.png"),
                },
                {
                  id: "12",
                  name: "Item 12",
                  top: "14-DAY STREAK",
                  down: "1/14",
                  image: require("./emoji.png"),
                },
                {
                  id: "13",
                  name: "Item 13",
                  top: "15-DAY STREAK",
                  down: "1/15",
                  image: require("./emoji.png"),
                },
              ])
            );
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
  outItem: {
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    height: windowHeight * 0.15,
    width: windowWidth * 0.9,
  },
  item: {
    flexDirection: "row",
    height: windowHeight * 0.12,
    width: windowWidth * 0.8,
    margin: 5,
    borderRadius: 7,
  },
  shadowStyle: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  largeText: {
    color: "#fff",
    fontSize: 25,
  },
  smallText: {
    color: "#fff",
    fontSize: 15,
  },
  image: {
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
    width: windowWidth * 0.25 * 0.9,
    height: windowHeight * 0.135,
    borderRadius: 150 / 2,
    overflow: "hidden",
  },
});

export default AchieveScreen;
