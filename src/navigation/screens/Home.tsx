import { HeaderTitle, Text } from '@react-navigation/elements';
import React, { useState, useSyncExternalStore } from 'react';
import { GestureResponderEvent, Pressable, SafeAreaView, StyleSheet, TextInput, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { FlatList, Button } from "react-native";


import ShopInputForm from "./components/ShopInputForm";
import UserInputExample from './components/examples/UserInputExample';



const exampleList = [];

export function Home() {
  return (
    <View style={styles.container}>
      <Text>Welcome! 👋</Text>
      <Text>Ready to transform your dieting life? ✅</Text>
      <Text>Get started below! ✅</Text>
      {/* TextInput where the user enters shops they frequent.*/}
      <ShopInputForm />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    gap: 10,
    fontSize: 25,
  },

});
