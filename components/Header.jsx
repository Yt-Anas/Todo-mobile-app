import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>My Todos</Text>
    </View>
  )
}

export default Header;

const styles = StyleSheet.create({
    header : {
        height : 70,
        paddingTop: 23,
        backgroundColor : 'coral',
    },
    title : {
        textAlign : 'center',
        color : '#fff',
        fontSize : 20,
        fontWeight : 'bold',
    }
})