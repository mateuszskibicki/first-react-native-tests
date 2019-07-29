import React from "react";
import { Text, Button, View } from "react-native";

const Navigation = props => {
  return (
    <View>
      <Button
        title="screen 1"
        color="red"
        onPress={() => props.navigation.navigate("Home")}
      />
      <Button
        title="screen 2"
        color="blue"
        secondary
        onPress={() =>
          props.navigation.navigate("SecondScreen", {
            itemId: Math.floor(Math.random() * 100)
          })
        }
      />
    </View>
  );
};

// const styles = StyleSheet.create({})

export default Navigation;
