import {
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  SafeAreaView,
  StatusBar,
  ImageSourcePropType,
  Animated,
} from "react-native";
import React, { useRef, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import Carousel from "@/components/Carousel";
import { BlurView } from "expo-blur";
import { useTheme } from "@/theme/ThemeProvider";
import { useRouter } from "expo-router";
import PrimaryButton from "@/components/screens/ui/buttons/PrimaryButton";
import SecondaryButton from "@/components/screens/ui/buttons/SecondaryButton";

const { width } = Dimensions.get("window");

const onboardingSteps = [
  {
    image: require("../../assets/images/splash1.png"),
    title: "Africa’s First Biometric Payment",
    subtitle:
      "Send and receive money in seconds using your face, fingerprint, or a simple ID.",
  },
  {
    image: require("../../assets/images/splash2.png"),
    title: "Secure Transactions",
    subtitle:
      "Experience fast and encrypted transactions, built with your safety in mind.",
  },
  {
    image: require("../../assets/images/splash3.png"),
    title: "Pay Bills Seamlessly",
    subtitle:
      "Settle your electricity, water, and more—all in one place, effortlessly.",
  },
  {
    image: require("../../assets/images/splash4.png"),
    title: "Instant Wallet Top-up",
    subtitle: "Fund your wallet in seconds—anytime, anywhere, without stress.",
  },
];

type OnboardingItem = {
  image: ImageSourcePropType;
  title: string;
  subtitle: string;
};

const OnboardingItem = ({ item, index, scrollX }: any) => {
  const { theme } = useTheme();
  const inputRange = [(index - 1) * width, index * width, (index + 1) * width];

  const scale = scrollX.interpolate({
    inputRange,
    outputRange: [0.9, 1, 0.9],
    extrapolate: "clamp",
  });

  const opacity = scrollX.interpolate({
    inputRange,
    outputRange: [0.6, 1, 0.6],
    extrapolate: "clamp",
  });

  return (
    <Animated.View style={[styles.slide, { transform: [{ scale }], opacity }]}>
      <Image source={item.image} style={styles.image} resizeMode="contain" />
      <Text style={[styles.title, { color: theme.accessibleText }]}>
        {item.title}
      </Text>
      <Text style={[styles.subtitle, { color: theme.accessibleTextSecondary }]}>
        {item.subtitle}
      </Text>
    </Animated.View>
  );
};

export default function OnboardingScreen() {
  const { theme } = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<any>(null);
  const scrollX = useRef(new Animated.Value(0)).current;
  const router = useRouter();

  const onViewableItemsChanged = useRef(({ viewableItems }: any) => {
    if (viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index);
    }
  }).current;

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
  }).current;

  const handleCarouselChange = (index: number) => {
    flatListRef.current?.scrollToIndex({ animated: true, index });
  };

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex =
          prevIndex === onboardingSteps.length - 1 ? 0 : prevIndex + 1;
        flatListRef.current?.scrollToIndex({
          animated: true,
          index: nextIndex,
        });
        return nextIndex;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <LinearGradient
      colors={["#241036", "#13031a", "#241036"]}
      locations={[0, 0.45, 1]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <StatusBar hidden />
      <View style={styles.content}>
        <Animated.FlatList
          ref={flatListRef}
          data={onboardingSteps}
          renderItem={({ item, index }) => (
            <OnboardingItem item={item} index={index} scrollX={scrollX} />
          )}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onViewableItemsChanged={onViewableItemsChanged}
          viewabilityConfig={viewabilityConfig}
          keyExtractor={(_, index) => index.toString()}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: true }
          )}
          scrollEventThrottle={16}
        />

        <View style={styles.indicatorWrapper}>
          <Carousel
            total={onboardingSteps.length}
            current={currentIndex}
            onChange={handleCarouselChange}
            activeColor={theme.colors.primary}
            inactiveColor={"rgba(255,255,255,0.06)"}
          />
        </View>

        <View style={styles.buttonWrapper}>
          <PrimaryButton
            title="Create Account"
            onPress={() => router.push("/auth/signup")}
          />
          <SecondaryButton
            title="I have an account already"
            onPress={() => router.push("/logins/facelogin")}
            style={{ marginTop: 15 }}
          />
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 20,
  },
  slide: {
    width: width,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  image: {
    width: width * 1,
    height: width * 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 40,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    paddingHorizontal: 20,
  },
  buttonWrapper: {
    paddingBottom: 40,
    alignItems: "center",
    paddingTop: 12,
  },
  indicatorWrapper: {
    marginTop: width > 650 ? "10%" : "20%",
    marginBottom: 6,
    alignItems: "center",
    justifyContent: "center",
  },
});
