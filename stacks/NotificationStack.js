import { Dimensions, FlatList, Image, Pressable, StyleSheet, Text, View, ActivityIndicator } from "react-native";
import { useState, useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
import NotificationScreen from "../screens/appScreens/NotificationScreen";


const win = Dimensions.get("window");

function NotificationStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="notificationscreen" component={NotificationScreen} />


        </Stack.Navigator>
    )
}

export default NotificationStack