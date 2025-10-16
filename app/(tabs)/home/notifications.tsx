import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function Notifications() {
  const router = useRouter();

  const notifications = [
    {
      id: 1,
      type: "success",
      title: "Payment Successful",
      description: "You sent ₦15,000 to Chidi Okafor. Ref: 8392FJ.",
      time: "3m ago",
      logo: "card-outline",
    },
    {
      id: 2,
      type: "failed",
      title: "Payment Failed",
      description: "Your transfer of ₦8,000 to Tobi Ade failed. Ref: 9402KD.",
      time: "10m ago",
      logo: "close-circle-outline",
    },
    {
      id: 3,
      type: "success",
      title: "Payment Successful",
      description: "You sent ₦2,500 to Amina Yusuf. Ref: 7348HJ.",
      time: "1h ago",
      logo: "checkmark-circle-outline",
    },
    {
      id: 4,
      type: "success",
      title: "Payment Successful",
      description: "You sent ₦12,500 to Salami Yusuf. Ref: 7348HJ.",
      time: "11h ago",
      logo: "checkmark-circle-outline",
    },
    {
      id: 5,
      type: "failed",
      title: "Payment Failed",
      description:
        "Your transfer of ₦80,000 to Adekunle Gold failed. Ref: 9402KD.",
      time: "4days ago",
      logo: "close-circle-outline",
    },
  ];

  return (
    <LinearGradient
      colors={["#1F1F1F", "#1F1F1F", "#1F1F1F"]}
      locations={[0, 0.45, 1]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={[styles.container]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* Header */}
          <View style={styles.header}>
            <Ionicons
              onPress={() => router.back()}
              name="chevron-back"
              size={24}
              color="#fff"
            />
            <Text style={[styles.skipText, { color: "#fff" }]}>
              Notifications
            </Text>
          </View>

          {/* Notifications List */}
          <View style={styles.list}>
            {notifications.map((item) => (
              <View key={item.id} style={[styles.card]}>
                <View style={styles.cardContent}>
                  {/* Logo/Icon */}
                  <View style={styles.iconContainer}>
                    <Ionicons
                      name={item.logo}
                      size={28}
                      color={item.type === "success" ? "#00C851" : "#ff4444"}
                    />
                  </View>

                  {/* Text Info */}
                  <View style={{ flex: 1, marginLeft: 10 }}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.description}>{item.description}</Text>
                  </View>

                  {/* Time */}
                  <Text style={styles.time}>{item.time}</Text>
                </View>
              </View>
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    padding: 15,
    paddingVertical: "15%",
    paddingBottom: 100,
  },
  header: {
    width: "90%",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 18,
  },
  skipText: {
    width: "100%",
    fontFamily: "ManropeSemiBold",
    fontSize: 16,
    textAlign: "center",
  },
  list: {
    gap: 15,
    marginTop: 10,
  },
  card: {
    backgroundColor: "#2A2A2A",
    borderRadius: 10,
    padding: 12,
  },
  cardContent: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#1F1F1F",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "#fff",
    fontSize: 15,
    fontFamily: "ManropeSemiBold",
  },
  description: {
    color: "#ccc",
    fontSize: 13,
    marginTop: 4,
    fontFamily: "ManropeRegular",
  },
  time: {
    color: "#aaa",
    fontSize: 12,
    fontFamily: "ManropeRegular",
    alignSelf: "flex-start",
  },
});
