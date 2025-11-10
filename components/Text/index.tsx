import React, { ReactNode } from "react";
import { Text as RNText, StyleProp, StyleSheet, TextStyle } from "react-native";

type FontWeight = "regular" | "medium" | "semibold" | "bold";
type FontSize = "heading" | "sm" | "md" | "lg" | "xl";

interface TextCustomProps {
  fw?: FontWeight;
  fz?: number;
  children: ReactNode;
  style?: StyleProp<TextStyle>;
  type?: FontSize;
}

const FONT_MAP: Record<FontWeight, string> = {
  regular: "Poppins-Regular",
  medium: "Poppins",
  semibold: "Poppins-SemiBold",
  bold: "Poppins-Bold",
};
const FONT_SIZE: Record<FontSize, number> = {
  heading: 24,
  lg: 16,
  md: 14,
  sm: 12,
  xl: 18,
};

export const Text = ({
  fw = "regular",
  fz,
  type = "md",
  style,
  children,
}: TextCustomProps) => {
  const textStyle: StyleProp<TextStyle> = [
    styles.base,
    {
      fontFamily: type === "heading" ? "Poppins-Bold" : FONT_MAP[fw],
      fontSize: fz ?? FONT_SIZE[type],
    },
    style,
  ];

  return <RNText style={textStyle}>{children}</RNText>;
};

export default Text;

const styles = StyleSheet.create({
  base: {
    color: "#000",
  },
});
