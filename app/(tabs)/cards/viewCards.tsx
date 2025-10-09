import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import React, { useState } from "react";
import TransactionHistory from "@/components/TransactionHistory";
import PasswordAuthModal from "@/components/AuthModals/PswdAuthModal";
import CardDetails from "@/components/CardDetails";

export default function ViewCards() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showCardDetails, setShowCardDetails] = useState(false);

  const handleAuthSuccess = () => {
    setIsModalOpen(false);
    setShowCardDetails(true); // show details only after auth
  };

  const handleToggle = () => {
    if (showCardDetails) {
      // Already visible → just hide
      setShowCardDetails(false);
    } else {
      // Not visible → open modal for authentication
      setIsModalOpen(true);
    }
  };

  return (
    <LinearGradient
      colors={["#1F1F1F", "#1F1F1F"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>KarryCard</Text>
          <Ionicons name="settings-outline" size={24} color="white" />
        </View>

        {/* Card Image */}
        <View>
          <Image
            source={require("@/assets/images/karrycard.png")}
            style={{ width: "100%", height: 200 }}
            resizeMode="contain"
          />
        </View>

        {/* View Card Details Button */}
        <TouchableOpacity style={styles.button} onPress={handleToggle}>
          <View style={styles.content}>
            <Text style={styles.text}>
              {showCardDetails ? "Hide Card details" : "View Card details"}
            </Text>
            <FontAwesome
              name={showCardDetails ? "eye-slash" : "eye"}
              size={20}
              color="black"
            />
          </View>
        </TouchableOpacity>

        {/* Details + Transactions */}
        <View style={{ flex: 1, marginTop: 16 }}>
          {showCardDetails && <CardDetails />}
          <View style={{ marginTop: showCardDetails ? 20 : 0 }}>
            <TransactionHistory />
          </View>
        </View>

        {/* Modal for auth */}
        {isModalOpen && (
          <PasswordAuthModal
            visible={isModalOpen}
            setVisible={handleAuthSuccess} // closes modal & shows card details
          />
        )}
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    padding: 15,
    marginTop: 15,
  },
  header: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 15,
  },
  headerTitle: {
    fontSize: 24,
    fontFamily: "ManropeMedium",
    color: "#fff",
  },
  button: {
    backgroundColor: "#F9FAFB",
    paddingVertical: 13,
    paddingHorizontal: 16,
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  text: {
    fontSize: 16,
    fontFamily: "ManropeMedium",
    color: "#111827",
  },
});
