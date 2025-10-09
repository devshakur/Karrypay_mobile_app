import { Stack } from "expo-router";

export default function SavingsLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" options={{ title: "Savings" }} />
      <Stack.Screen
        name="savingsDetails"
        options={{ title: "Savings Details" }}
      />
      <Stack.Screen
        name="savingsSuccess"
        options={{ title: "Savings Success" }}
      />
      <Stack.Screen name="autoSave" options={{ title: "Auto Save " }} />
      <Stack.Screen name="flexSave" options={{ title: "Flex Save " }} />
      <Stack.Screen name="lockedSave" options={{ title: "Locked Save " }} />
    </Stack>
  );
}
