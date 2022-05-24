import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Scheduled } from "../screens/scheduled";
import { Home } from "../screens/Home";

export type AppRoutes = {
  Home: undefined;
  Scheduled: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends AppRoutes {}
  }
}

const Stack = createStackNavigator();

export function AppStackRoutes() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Scheduled" component={Scheduled} />
    </Stack.Navigator>
  );
}
