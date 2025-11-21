import { saveToken } from "@/utils/secureStore";
import { useFormik } from "formik";
import React from "react";
import { Dimensions, Text, TouchableOpacity, View } from "react-native";
import { TextInput } from "react-native-paper";

const { height, width } = Dimensions.get("window");

const Login = () => {
  const formik = useFormik({
    initialValues: {
      password: "",
      email: "",
    },
    onSubmit: async (values) => {
      console.log(values);
      await saveToken("token", "ini_tokennyaaaaa");
    },
  });
  return (
    <View
      style={{
        height: height,
        paddingHorizontal: 20,
        justifyContent: "center",
      }}
    >
      <Text style={{ fontSize: 40 }}>LOGIN</Text>

      <View style={{ gap: 10, marginTop: 20 }}>
        <View>
          <TextInput
            mode="outlined"
            label="Email"
            placeholder="Input email"
            value={formik.values.email}
            onChangeText={formik.handleChange("email")}
            // right={<TextInput.Affix text="/100" />}
          />
        </View>
        <View>
          <TextInput
            mode="outlined"
            label="Password"
            placeholder="Input password"
            value={formik.values.password}
            onChangeText={formik.handleChange("password")}
            // right={<TextInput.Affix text="/100" />}
          />
        </View>
      </View>

      <TouchableOpacity
        onPress={() => formik.handleSubmit()}
        style={{
          backgroundColor: "blue",
          paddingVertical: 20,
          paddingHorizontal: 10,
          alignItems: "center",
          borderRadius: 10,
          marginTop: 20,
        }}
      >
        <Text style={{ fontSize: 14, color: "white" }}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
