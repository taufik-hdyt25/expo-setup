import { useAuth } from "@/providers/AuthContext";
import { saveToken } from "@/utils/secureStore";
import { useFormik } from "formik";
import React from "react";
import {
  Dimensions,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const { height, width } = Dimensions.get("window");

const Login = () => {
  const { profile, token } = useAuth();
  console.log(token);

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
          <Text style={{ fontSize: 14 }}>Email</Text>
          <TextInput
            style={{
              borderWidth: 1,
              borderColor: "#ccc",
              padding: 12,
              borderRadius: 8,
              fontSize: 16,
            }}
            value={formik.values.email}
            onChangeText={formik.handleChange("email")}
            placeholder="Masukkan teks"
          />
        </View>
        <View>
          <Text style={{ fontSize: 14 }}>Password</Text>
          <TextInput
            style={{
              borderWidth: 1,
              borderColor: "#ccc",
              padding: 12,
              borderRadius: 8,
              fontSize: 16,
            }}
            value={formik.values.password}
            onChangeText={formik.handleChange("password")}
            placeholder="Masukkan teks"
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
