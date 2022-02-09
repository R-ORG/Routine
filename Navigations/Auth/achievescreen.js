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
          colors={["#0353D5", "#3A60ED", "#4B62E8"]}
          style={[styles.item, styles.shadowStyle]}
        >
          <View style={{ flex: 9 }}>
            <View style={{ flex: 1, marginLeft: 15, marginTop: 10 }}>
              <Text style={styles.largeText}>{props.top}</Text>
            </View>
            <View style={{ flex: 1, marginLeft: 15, marginTop: 0 }}>
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
  const data = [
    {
      id: "1",
      name: "Item 1",
      top: "3-DAY STREAK",
      down: "1/3",
      image: require("./emoji.png"),
    },
    {
      id: "2",
      name: "Item 2",
      top: "4-DAY STREAK",
      down: "1/4",
      image: require("./emoji.png"),
    },
    {
      id: "3",
      name: "Item 3",
      top: "5-DAY STREAK",
      down: "1/5",
      image: require("./emoji.png"),
    },
    {
      id: "4",
      name: "Item 4",
      top: "6-DAY STREAK",
      down: "1/6",
      image: require("./emoji.png"),
    },
    {
      id: "5",
      name: "Item 5",
      top: "7-DAY STREAK",
      down: "1/7",
      image: require("./emoji.png"),
    },
    {
      id: "6",
      name: "Item 6",
      top: "8-DAY STREAK",
      down: "1/8",
      image: require("./emoji.png"),
    },
    {
      id: "7",
      name: "Item 7",
      top: "9-DAY STREAK",
      down: "1/9",
      image: require("./emoji.png"),
    },
    {
      id: "8",
      name: "Item 8",
      top: "10-DAY STREAK",
      down: "1/10",
      image: require("./emoji.png"),
    },
    {
      id: "9",
      name: "Item 9",
      top: "11-DAY STREAK",
      down: "1/11",
      image: require("./emoji.png"),
    },
    {
      id: "10",
      name: "Item 10",
      top: "12-DAY STREAK",
      down: "1/12",
      image: require("./emoji.png"),
    },
  ];
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
    height: windowHeight * 0.1 + 22,
    width: windowWidth * 0.9,
    marginTop: 5,
  },
  item: {
    flexDirection: "row",
    height: windowHeight * 0.1,
    width: windowWidth * 0.8,
    margin: 5,
    borderRadius: 15,
  },
  shadowStyle: {
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 4,
  },
  largeText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  smallText: {
    color: "#fff",
    fontSize: 14,
  },
  image: {
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
    width: windowWidth * 0.25 * 0.95,
    height: windowWidth * 0.25 * 0.95,
    borderRadius: 150 / 2,
    overflow: "hidden",
  },
});

export default AchieveScreen;
