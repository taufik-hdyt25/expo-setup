import React, { ReactNode } from "react";
import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from "react-native";

type FontWeight = "regular" | "medium" | "semibold" | "bold";
type FontSize = "heading" | "sm" | "md" | "lg" | "xl";

interface ButtonProps {
  fw?: FontWeight;
  fz?: number;
  type?: FontSize;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  children: ReactNode;
  onPress?: () => void;
  disabled?: boolean;
  opacity?: number;
}

const FONT_MAP: Record<FontWeight, string> = {
  regular: "Poppins-Regular",
  medium: "Poppins-Medium",
  semibold: "Poppins-SemiBold",
  bold: "Poppins-Bold",
};

export const Button = ({
  fw = "medium",
  fz = 14,
  style,
  textStyle,
  children,
  onPress,
  opacity = 0.7,
  disabled = false,
}: ButtonProps) => {
  return (
    <TouchableOpacity
      activeOpacity={opacity}
      disabled={disabled}
      onPress={onPress}
      style={[styles.button, disabled && styles.disabled, style]}
    >
      <Text
        style={[
          styles.text,
          {
            fontFamily: FONT_MAP[fw],
            fontSize: fz,
          },
          textStyle,
        ]}
      >
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#007bff",
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
  },
  disabled: {
    backgroundColor: "#cccccc",
  },
});

export default Button;
