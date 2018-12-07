import React, { Component } from "react";
import { View, Image, Text, StyleSheet } from "react-native";
export default class Header extends Component {
  render() {
    return (
      <View style={styles.headerContainer}>
        <Image
          style={styles.Image}
          flexDirection="row"
          resizeMode="cover"
          source={require("../assets/logo.png")}
        />
    
        <Text style={styles.title}> News Appliction 
    
</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  headerContainer: {
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    textAlign:"left",
    backgroundColor: "blue",
    fontWeight: "bold",
  
     fontSize: 30,
  },
  Image: { height: 50, width: 50,flexDirection:"row" },
 title: { marginTop: 10,flexDirection:"column-reverse" }

});
