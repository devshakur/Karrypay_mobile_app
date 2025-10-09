import { Stack } from "expo-router";

export default function ProfileLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" options={{ title: "Profile" }} />
      <Stack.Screen
        name="profileSetting"
        options={{ title: "Profile Setting" }}
      />
      <Stack.Screen name="appSecurity" options={{ title: "App Security" }} />
      <Stack.Screen name="appSettings" options={{ title: "App Settings" }} />
    </Stack>
  );
}
