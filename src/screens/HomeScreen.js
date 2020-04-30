import React from "react";
import { View, StyleSheet } from "react-native";
import { Button, Text } from "react-native-elements";

function HomeScreen({ navigation }) {
  return (
    <View>
      <Text h3>Welcome To DJukebox</Text>
      <Button
        onPress={() => navigation.navigate("Admin")}
        title='Admin'
        type='solid'
      />
      <Button
        onPress={() => navigation.navigate("Guest")}
        title='Guest'
        type='outline'
      />
    </View>
  );
}

const styles = StyleSheet.create({});

export default HomeScreen;
