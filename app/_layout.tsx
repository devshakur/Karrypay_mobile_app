import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { StatusBar } from "react-native";
import { useTheme, ThemeProvider } from "@/theme/ThemeProvider";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    ManropeRegular: require("../assets/fonts/static/Manrope-Regular.ttf"),
    ManropeMedium: require("../assets/fonts/static/Manrope-Medium.ttf"),
    ManropeSemiBold: require("../assets/fonts/static/Manrope-SemiBold.ttf"),
    ManropeBold: require("../assets/fonts/static/Manrope-Bold.ttf"),
  });

  // Handle errors from font loading
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  // Hide splash once fonts are ready
  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    // ⬅️ wrap everything with ThemeProvider
    <ThemeProvider>
      <RootLayoutNav />
    </ThemeProvider>
  );
}

function RootLayoutNav() {
  const { theme } = useTheme(); // ⬅️ get active theme

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="onboarding" />

        <Stack.Screen name="auth" />
        <Stack.Screen name="setup" />
        <Stack.Screen name="logins" />
        <Stack.Screen
          name="(modals)/bottomModal"
          options={{ presentation: "transparentModal" }}
        />
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="modal" options={{ presentation: "modal" }} />
      </Stack>
    </GestureHandlerRootView>
  );
}
