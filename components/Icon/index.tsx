/* eslint-disable prettier/prettier */
import React from "react";
import { StyleProp, TouchableOpacity, ViewStyle } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import Feather from "react-native-vector-icons/Feather";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
import Fontisto from "react-native-vector-icons/Fontisto";
import Foundation from "react-native-vector-icons/Foundation";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Octicons from "react-native-vector-icons/Octicons";

export const Icons = {
  MaterialCommunityIcons,
  MaterialIcons,
  Ionicons,
  Feather,
  FontAwesome,
  FontAwesome5,
  AntDesign,
  Entypo,
  Octicons,
  Foundation,
  EvilIcons,
  FontAwesome6,
  Fontisto,
};

type Props = {
  type: any;
  name: string;
  color?: string;
  size?: number;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
};
const Icon = ({ type, name, color, size = 24, onPress, style }: Props) => {
  //   const { colors } = useTheme();
  const Tag = type;
  return (
    <TouchableOpacity onPress={onPress} style={style}>
      {type && name && <Tag name={name} size={size} color={color ?? "black"} />}
    </TouchableOpacity>
  );
};

export default Icon;
