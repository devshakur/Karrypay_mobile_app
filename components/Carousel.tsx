import React from "react";
import { View, StyleSheet, Pressable, Animated } from "react-native";
import { BlurView } from "expo-blur";

type Props = {
  total: number; // total steps (e.g. 3)
  current: number; // current active step (0-based index)
  onChange?: (index: number) => void; // callback when user taps
  activeColor?: string;
  inactiveColor?: string;
};

export default function ProgressIndicator({
  total,
  current,
  onChange,
  activeColor = "#2E358F",
  inactiveColor = "#ccc",
}: Props) {
  return (
    <View style={styles.container}>
      {Array.from({ length: total }).map((_, index) => {
        const isActive = index === current;
        const width = isActive ? 34 : 20;
        const opacity = isActive ? 1 : 0.5;

        return (
          <Pressable
            key={index}
            onPress={() => onChange && onChange(index)}
            style={styles.itemWrapper}
            hitSlop={6}
          >
            <BlurView
              intensity={50}
              tint="light"
              style={[
                styles.pill,
                {
                  width,
                },
              ]}
            >
              <Animated.View
                style={[
                  styles.pill,
                  {
                    width,
                    opacity,
                    backgroundColor: isActive
                      ? activeColor
                      : "rgba(255,255,255,0.06)",
                    borderColor: isActive
                      ? "rgba(255,255,255,0.12)"
                      : "rgba(255,255,255,0.04)",
                  },
                ]}
              />
            </BlurView>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 10,
  },
  itemWrapper: {
    marginHorizontal: 6,
    alignItems: "center",
    justifyContent: "center",
  },
  pill: {
    height: 8,
    borderRadius: 12,
    borderWidth: 1,
    // glassy effect
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
    overflow: "hidden",
    // subtle inner shine via transparent overlay on the background color is handled inline
  },
});
