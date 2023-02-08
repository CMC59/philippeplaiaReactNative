import * as React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CharactersFeedScreen } from "../screens/CharactersFeedScreen";
import { CharacterDetail } from "../screens/CharacterDetail";
/*import { Login } from "../screens/LoginScreen";*/

import { Routes } from "./Routes";

const Stack = createNativeStackNavigator();

export function Navigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name={Routes.CHARACTERS_SCREEN}
                component={CharactersFeedScreen}
            />
            <Stack.Screen
                name={Routes.CHARACTER_SCREEN_DETAIL}
                component={CharacterDetail}
            />
        </Stack.Navigator>
    );
}