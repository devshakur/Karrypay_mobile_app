import React, { useState, useEffect } from "react";
import { Tabs, useRouter } from "expo-router";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  Image,
  useWindowDimensions,
  Pressable,
  Modal,
  Platform,
  StatusBar as RNStatusBar,
} from "react-native";
import * as NavigationBar from "expo-navigation-bar";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Ionicons from "@expo/vector-icons/Ionicons";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Feather from "@expo/vector-icons/Feather";
import Svg, { Path } from "react-native-svg";
import MaskedView from "@react-native-masked-view/masked-view";
import ModalItem from "@/components/modals/ModalItems";
import { useTheme } from "@/theme/ThemeProvider";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import AddMoney from "@/components/modals/addMoney";
import BillsModal from "@/components/modals/BillsModal";
import { LinearGradient } from "expo-linear-gradient";
import { BlurView } from "expo-blur";

const tabHeight = 95;
const fabSize = 65;

const hideOnScreens = [
  "home/sendmoney",
  "home/amountsection",
  "home/failed",
  "home/success",
  "home/airtime",
  "home/data",
  "home/electricitysuccess",
  "home/cablesuccess",
  "home/educationsuccess",
  "home/kycVerification",
  "home/kycOne",
  "home/kycTwo",
  "cards/viewCards",
  "home/passportScan",
  "home/kysSubmitted",
  "home/nin",
  "/savings/savingsSuccess",
  "/savings/savingsDetails",
  "/savings/autoSave",
  "/savings/changeDate",
  "/savings/flexSave",
  "/savings/lockedSave",
  "/profile/profileSetting",
  "/profile/appSecurity",
  "/profile/appSettings",
  "/profile/changePassword",
  "/profile/changePin",
  "/profile/prices",
  "/home/notifications",
];

export default function TabLayout() {
  const { isDark } = useTheme();
  const [hasNavBar, setHasNavBar] = useState(false);

  const statusBarBg = isDark ? "#1F1F1F" : "#FFFFFF";
  const statusBarStyle = isDark ? "light" : "dark";
  const navBarBg = isDark ? "#000000" : "#FFFFFF";
  const navBarIcon = isDark ? "light" : "dark";

  useEffect(() => {
    if (Platform.OS === "android") {
      (async () => {
        try {
          const visibility = await NavigationBar.getVisibilityAsync();
          setHasNavBar(visibility !== "hidden");
          await NavigationBar.setBackgroundColorAsync(navBarBg);
          await NavigationBar.setButtonStyleAsync(navBarIcon);
          RNStatusBar.setBackgroundColor(statusBarBg, true);
          RNStatusBar.setBarStyle(
            isDark ? "light-content" : "dark-content",
            true
          );
        } catch (e) {
          console.log("NavigationBar check failed", e);
        }
      })();
    }
  }, [isDark]);

  return (
    <>
      {Platform.OS === "ios" && (
        <View style={{ height: 44, backgroundColor: statusBarBg }} />
      )}
      <StatusBar
        translucent={false}
        backgroundColor={statusBarBg}
        style={statusBarStyle}
      />

      <Tabs
        screenOptions={{ headerShown: false }}
        safeAreaInsets={{ bottom: hasNavBar ? 20 : 0 }}
        tabBar={(props) => <CustomTabBar {...props} hasNavBar={hasNavBar} />}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            tabBarIcon: ({ color }) => (
              <FontAwesome6 name="house" size={22} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="cards"
          options={{
            title: "Cards",
            tabBarIcon: ({ color }) => (
              <FontAwesome6 name="credit-card" size={22} color={color} />
            ),
          }}
        />
        <Tabs.Screen name="quicksend/index" options={{ href: null }} />
        <Tabs.Screen
          name="savings"
          options={{
            title: "Savings",
            tabBarIcon: ({ color }) => (
              <Ionicons name="wallet-outline" size={24} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            tabBarIcon: ({ color }) => (
              <AntDesign name="user" size={24} color={color} />
            ),
          }}
        />
      </Tabs>
    </>
  );
}

function normalizeName(n?: string) {
  if (!n) return "";
  return n.replace(/^\/+|\/+$/g, "").toLowerCase();
}

function CustomTabBar({ state, descriptors, navigation }: any) {
  const { isDark } = useTheme();
  const router = useRouter();
  const [visible, setVisible] = useState(false);
  const [addMoneyVisible, setAddMoneyVisible] = useState(false);
  const [billsModal, setBillsModal] = useState(false);
  const { width } = useWindowDimensions();

  const focusedRoute = state.routes[state.index];
  const baseTabName = focusedRoute.name.split("/")[0];
  const nestedRouteName =
    getFocusedRouteNameFromRoute(descriptors[focusedRoute.key].route) ??
    "index";
  const fullRouteName = `${baseTabName}/${nestedRouteName}`;

  const normalizedFull = normalizeName(fullRouteName);
  const normalizedNested = normalizeName(nestedRouteName);
  const normalizedBase = normalizeName(baseTabName);
  const hideSet = new Set(hideOnScreens.map((s) => normalizeName(s)));
  const shouldHide =
    hideSet.has(normalizedFull) ||
    hideSet.has(normalizedNested) ||
    hideSet.has(normalizedBase);

  if (shouldHide) return null;

  const centerX = width / 2;
  const cradleRadius = 17;
  const verticalOffset = 27;
  const cradleMargin = 13;
  const cradleWidth = fabSize + cradleMargin * 2;
  const cradleDepth = fabSize / 2 + verticalOffset;

  const tabPath = `M0 0
    H${centerX - cradleWidth / 2 - cradleRadius}
    Q${centerX - cradleWidth / 2} 0, ${
    centerX - cradleWidth / 2 + cradleRadius
  } ${verticalOffset}
    Q${centerX} ${cradleDepth}, ${
    centerX + cradleWidth / 2 - cradleRadius
  } ${verticalOffset}
    Q${centerX + cradleWidth / 2} 0, ${
    centerX + cradleWidth / 2 + cradleRadius
  } 0
    H${width}
    V${tabHeight}
    H0 Z`;

  return (
    <>
      <View
        style={{ position: "absolute", bottom: 0, width, height: tabHeight }}
      >
        {/* Masked Blur Background */}
        <MaskedView
          style={StyleSheet.absoluteFill}
          maskElement={
            <Svg width={width} height={tabHeight}>
              <Path d={tabPath} fill="black" />
            </Svg>
          }
        >
          <BlurView
            intensity={20}
            tint={isDark ? "dark" : "light"}
            style={StyleSheet.absoluteFill}
          >
            {/* <LinearGradient
              colors={["#241036AA", "#3D3D3DAA", "#240629"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={StyleSheet.absoluteFill}
            /> */}
          </BlurView>
        </MaskedView>

        {/* Tabs */}
        <View style={styles.tabRow}>
          {state.routes.map((route: any, index: number) => {
            if (route.name.includes("quicksend"))
              return <View key={route.key} style={{ flex: 1 }} />;

            const { options } = descriptors[route.key];
            const isFocused = state.index === index;
            const color = isFocused ? "#fff" : "rgba(255,255,255,0.6)";
            const icon =
              options.tabBarIcon && options.tabBarIcon({ color, size: 24 });

            return (
              <TouchableOpacity
                key={route.key}
                onPress={() => navigation.navigate(route.name)}
                style={styles.tabButton}
              >
                {icon}
                <Text style={[styles.label, { color }]}>{options.title}</Text>
              </TouchableOpacity>
            );
          })}
        </View>

        {/* FAB */}
        {/* <TouchableOpacity
          style={[
            styles.fab,
            {
              left: centerX - fabSize / 2,
              bottom: tabHeight - fabSize / 2,
              backgroundColor: "#6b5a94ff",
            },
          ]}
          onPress={() => setVisible(true)}
        >
          <Image
            source={require("@/assets/icons/scan.png")}
            style={{ width: 28, height: 28, tintColor: "#fff" }}
            resizeMode="contain"
          />
        </TouchableOpacity> */}
        <TouchableOpacity
          style={[
            styles.fabWrapper,
            {
              left: centerX - fabSize / 2,
              bottom: tabHeight - fabSize / 2,
            },
          ]}
          onPress={() => setVisible(true)}
        >
          <LinearGradient
            colors={["#000000", "#6B21A8"]} // black → purple gradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.fab}
          >
            <Image
              source={require("@/assets/icons/scan.png")}
              style={{ width: 28, height: 28, tintColor: "#fff" }}
              resizeMode="contain"
            />
          </LinearGradient>
        </TouchableOpacity>
      </View>

      {/* Modals */}
      {visible && (
        <Modal
          animationType="slide"
          transparent
          visible={visible}
          onRequestClose={() => setVisible(false)}
          statusBarTranslucent
        >
          <Pressable style={styles.overlay} onPress={() => setVisible(false)}>
            <Pressable style={styles.modalWrapper} onPress={() => {}}>
              {/* <BlurView
                intensity={20}
                tint={isDark ? "dark" : "light"}
                style={styles.modalBox}
              > */}
              <LinearGradient
                colors={["#000000", "#6B21A8"]} // black → purple
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.modalBox}
              >
                <ModalItem
                  icon={<Feather name="send" size={20} color="#5B2C6F" />}
                  label="Send Money"
                  closeModal={() => setVisible(false)}
                  onPress={() => router.push("/(tabs)/home/sendMoney")}
                />
                <ModalItem
                  icon={
                    <MaterialCommunityIcons
                      name="line-scan"
                      size={20}
                      color="#5B2C6F"
                    />
                  }
                  label="Quick Scan"
                  closeModal={() => setVisible(false)}
                />
                <ModalItem
                  icon={<AntDesign name="plus" size={20} color="#5B2C6F" />}
                  label="Add Money"
                  closeModal={() => setVisible(false)}
                  onPress={() => setAddMoneyVisible(true)}
                />
                <ModalItem
                  icon={<Feather name="phone" size={20} color="#5B2C6F" />}
                  label="Airtime"
                  closeModal={() => setVisible(false)}
                  onPress={() => router.push("/(tabs)/home/airtime")}
                />
                <ModalItem
                  icon={<Ionicons name="wifi" size={20} color="#5B2C6F" />}
                  label="Data"
                  closeModal={() => setVisible(false)}
                  onPress={() => router.push("/(tabs)/home/data")}
                />
                <ModalItem
                  icon={
                    <Ionicons
                      name="receipt-outline"
                      size={20}
                      color="#5B2C6F"
                    />
                  }
                  label="Pay Bills"
                  closeModal={() => setVisible(false)}
                  onPress={() => setBillsModal(true)}
                />
                {/* </BlurView> */}
              </LinearGradient>
            </Pressable>
          </Pressable>
        </Modal>
      )}

      {addMoneyVisible && (
        <AddMoney visible={addMoneyVisible} setVisible={setAddMoneyVisible} />
      )}
      {billsModal && (
        <BillsModal visible={billsModal} setVisible={setBillsModal} />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  tabRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: tabHeight,
    paddingHorizontal: 10,
  },
  tabButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    fontSize: 12,
    marginTop: 4,
    fontFamily: "ManropeMedium",
  },
  // fabWrapper: {
  //   position: "absolute",
  //   borderRadius: 40,
  //   overflow: "hidden", // ensures gradient respects the shape
  // },

  // fab: {
  //   position: "absolute",
  //   width: fabSize,
  //   height: fabSize,
  //   borderRadius: fabSize / 2,
  //   alignItems: "center",
  //   justifyContent: "center",
  //   shadowColor: "#000",
  //   shadowOpacity: 0.25,
  //   shadowOffset: { width: 0, height: 5 },
  //   shadowRadius: 5,
  //   elevation: 8,
  // },
  fabWrapper: {
    position: "absolute",
    width: fabSize,
    height: fabSize,
    borderRadius: fabSize / 2,
    overflow: "hidden", // ensures gradient respects circle shape
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 5,
    elevation: 8,
  },
  fab: {
    flex: 1, // gradient fills wrapper
    borderRadius: fabSize / 2,
    alignItems: "center",
    justifyContent: "center",
  },
  overlay: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,0.4)",
  },
  modalWrapper: {
    borderRadius: 20,
    marginBottom: 140,
    marginHorizontal: 10,
    overflow: "hidden",
  },
  modalBox: {
    borderRadius: 20,
    padding: 20,
  },
});
