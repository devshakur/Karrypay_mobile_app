import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import { LinearGradient } from "expo-linear-gradient";

const transactions = [
  {
    id: "1",
    name: "Netflix",
    description: "Subscription",
    amount: "₦8,500",
    time: "20 mins ago",
  },
  {
    id: "2",
    name: "Spotify",
    description: "Subscription",
    amount: "₦4,500",
    time: "1 hour ago",
  },
  {
    id: "3",
    name: "Netflix",
    description: "Subscription",
    amount: "₦8,500",
    time: "20 mins ago",
  },
  {
    id: "4",
    name: "ArewaFlix",
    description: "Subscription",
    amount: "₦4,500",
    time: "1 hour ago",
  },
  // Add more transactions here
];

const TransactionItem = ({ item }) => {
  return (
    <View style={styles.container}>
      {/* Icon Box */}
      <View style={styles.iconBox}>
        <EvilIcons name="credit-card" size={32} color="#4B5563" />
      </View>

      {/* Name and Description */}
      <View style={styles.details}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>

      {/* Amount and Time */}
      <View style={styles.right}>
        <Text style={styles.amount}>{item.amount}</Text>
        <Text style={styles.time}>{item.time}</Text>
      </View>
    </View>
  );
};

const TransactionHistory = () => {
  return (
    <LinearGradient
      colors={["#241036", "#3D3D3D", "#5B2C6F"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={{
        flexDirection: "column",
        marginTop: 20,

        padding: 12,
        borderRadius: 10,
      }}
    >
      <View>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Transaction History</Text>
          <Text style={styles.headerAction}>See All</Text>
        </View>

        {/* Transactions List */}
        <FlatList
          data={transactions}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <TransactionItem item={item} />}
          contentContainerStyle={{ paddingTop: 8 }}
        />
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",

    alignItems: "center",
    marginBottom: 12,
  },
  headerTitle: {
    fontSize: 18,
    fontFamily: "ManropeMedium",
    color: "#fff",
  },
  headerAction: {
    fontSize: 14,
    fontFamily: "ManropeMedium",
    color: "#3B82F6", // blue link
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 8,
    marginBottom: 15, // space between items
  },

  iconBox: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#E6E7FA",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  details: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontFamily: "ManropeMedium",
    color: "#fff",
  },
  description: {
    fontSize: 12,
    color: "#6B7280",
    marginTop: 2,
  },
  right: {
    alignItems: "flex-end",
  },
  amount: {
    fontSize: 16,
    fontFamily: "ManropeSemiBold",
    color: "#fff",
  },
  time: {
    fontSize: 12,
    color: "#6B7280",
    marginTop: 2,
  },
});

export default TransactionHistory;
