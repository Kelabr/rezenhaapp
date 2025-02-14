import React from "react";
import { View, Text, Button } from "react-native";
import { signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";

export default function HomeScreen() {
  return (
    <View>
      <Text>Bem-vindo ao Rezenhar!</Text>
      <Button title="Sair" onPress={() => signOut(auth)} />
    </View>
  );
}
