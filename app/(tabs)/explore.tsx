import Text from "@/components/Text";

import { Dimensions, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const { height } = Dimensions.get("window");

const TabExplore = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Text style={{ color: "black" }}>Custom Status Bar</Text>
      </View>
    </SafeAreaView>
  );
};
export default TabExplore;
