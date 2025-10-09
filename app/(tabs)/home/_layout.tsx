import { Stack } from "expo-router";

export default function HomeLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" options={{ title: "Dashboard" }} />
      <Stack.Screen name="sendmoney" options={{ title: "Send Money" }} />
      <Stack.Screen name="airtime" options={{ title: "Airtime" }} />
    </Stack>
  );
}
