import { Colors } from "@/constants/Colors";
import { vh } from "@/constants/Window";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs 
    
    safeAreaInsets={{bottom: 0, top: 0}}
    screenOptions={{tabBarStyle: { height: 8 * vh }, tabBarLabelStyle: {fontSize: 10, fontFamily: 'NunitoEBold', padding: 0, margin: 0}, tabBarActiveTintColor: Colors.primary, headerShown: false, tabBarInactiveBackgroundColor: Colors.darkBackground, tabBarActiveBackgroundColor: Colors.darkBackground,  }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="home" color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="games"
        options={{
          title: "Games",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="gamepad" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="food"
        options={{
          title: "FoodBuddy",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="spoon" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="bot"
        options={{ headerShown: false,
          title: "Bot",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="comment" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="user"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="user" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
