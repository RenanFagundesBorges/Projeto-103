import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feed from "./screens/Feed";
import Home from "./screens/Home";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    
    const [fontsLoaded] = useFont({
        "Bubblegum-Sans-Regular":require("./assets/fonts/Bubblegum-Sans-Regular.ttf")
    });

    useEffect(() =>{}
    )
        >
            <Tab.Screen name="Feed" component={Feed} />
            <Tab.Screen name="Início" component={Home} />
        </Tab.Navigator>
    </NavigationContainer>
  );
}

