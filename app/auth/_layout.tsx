import { Stack } from "expo-router";
import { StatusBar, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AuthLayout() {
  return (
    <>
      <StatusBar
        hidden={false}
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="login" />
        <Stack.Screen name="signup" options={{ headerShown: false }} />
        <Stack.Screen name="otp" options={{ headerShown: false }} />
      </Stack>
    </>
  );
}
