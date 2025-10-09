import { Stack } from "expo-router";

export default function CardLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" options={{ title: "Card" }} />
      <Stack.Screen name="viewCards" options={{ title: "ViewCards" }} />
    </Stack>
  );
}
