import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { AppStackRoutes } from "./app.stack.routes";
import { useTheme } from "styled-components";

import { Home } from '../screens/Home';

import { Platform, View, StyleSheet } from "react-native";
import { AntDesign, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Scheduled } from "../screens/scheduled";

const Tab = createBottomTabNavigator();
const { Screen } = createBottomTabNavigator();

export function AppTabRoutes() {
  const theme = useTheme()
  return(
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.blue_text_light,
        tabBarInactiveTintColor: theme.colors.background_button,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 65,
          paddingVertical: Platform.OS === "ios" ? 20 : 0,
        },
      }}
    >
      <Screen
        name="AppStackRoutes"
        component={AppStackRoutes}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <Screen
        name="Search"
        component={Home}
        options={{
          tabBarIcon: ({ size, color }) => (
            <AntDesign name="search1" size={size} color={color} />
          ),
        }}
      />
      <Screen
        name="Scheduled"
        component={Scheduled}
        options={{
          tabBarIcon: ({ size }) => (
            <View style={styles.icon}>
              <AntDesign name="calendar" size={size} color="#FFF" />
            </View>
          ),
        }}
      />
      <Screen
        name="Menu"
        component={Home}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="md-menu" size={size} color={color} />
          ),
        }}
      />

      <Screen
        name="Profile"
        component={Home}
        options={{
          tabBarIcon: ({ size, color }) => (
            <AntDesign name="user" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  icon: {
    width: 65,
    height: 65,
    backgroundColor: '#333',
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40
  }
});