import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const { height } = Dimensions.get("window");

const TabExplore = () => {
  return (
    <SafeAreaView>
      <ThemedView
        style={{ backgroundColor: "rgba(0,0,0,0.3)", height: height }}
      >
        <ThemedText>Hello</ThemedText>
      </ThemedView>
    </SafeAreaView>
  );
};
export default TabExplore;
