import { saveToken } from "@/utils/secureStore";
import { useFormik } from "formik";
import React from "react";
import {
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
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
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ height }}
    >
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          paddingHorizontal: 20,
          justifyContent: "center",
        }}
        keyboardShouldPersistTaps="handled"
      >
        <Text style={{ fontSize: 40 }}>LOGIN</Text>

        <View style={{ gap: 10, marginTop: 20 }}>
          <TextInput
            mode="outlined"
            label="Email"
            placeholder="Input email"
            value={formik.values.email}
            onChangeText={formik.handleChange("email")}
          />

          <TextInput
            mode="outlined"
            label="Password"
            placeholder="Input password"
            secureTextEntry
            value={formik.values.password}
            onChangeText={formik.handleChange("password")}
          />
        </View>

        <TouchableOpacity
          onPress={() => formik.handleSubmit()}
          style={{
            backgroundColor: "blue",
            paddingVertical: 20,
            alignItems: "center",
            borderRadius: 10,
            marginTop: 20,
          }}
        >
          <Text style={{ fontSize: 14, color: "white" }}>Login</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Login;
