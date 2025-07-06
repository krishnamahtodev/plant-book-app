import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React from "react";
import PasswordInputField from "../components/inputFields/PasswordInputField";
import { Formik } from "formik";
import { SignupSchema } from "../utils/schema";
import PrimaryButton from "../components/buttons/PrimaryButton";
import { Image } from "expo-image";
import CustomInputField from "../components/inputFields/CustomInputField";

const Signup = () => {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.innerContainer}>
            <Image
              source={require("../assets/banner.gif")}
              style={styles.bannerImage}
            />
            <Text style={styles.heading}>Sign in to your account</Text>

            <Formik
              initialValues={{
                name: "",
                email: "",
                password: "",
                confirmPassword: "",
              }}
              validationSchema={SignupSchema}
              onSubmit={(values) => {
                console.log("Form submitted:", values);
              }}
            >
              {({ handleChange, handleSubmit, values, errors, touched }) => (
                <View style={styles.form}>
                  <CustomInputField
                    value={values.name}
                    onChangeText={handleChange("name")}
                    placeholder="Enter name"
                    label="Name"
                    error={errors.name}
                    touched={touched.name}
                  />

                  <CustomInputField
                    value={values.email}
                    onChangeText={handleChange("email")}
                    placeholder="Enter email"
                    label="Email Address"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    error={errors.email}
                    touched={touched.email}
                  />

                  <PasswordInputField
                    value={values.password}
                    onChangeText={handleChange("password")}
                    placeholder="Enter password"
                    label="Password"
                    error={errors.password}
                    touched={touched.password}
                  />

                  <PasswordInputField
                    value={values.confirmPassword}
                    onChangeText={handleChange("confirmPassword")}
                    placeholder="Confirm password"
                    label="Confirm Password"
                    error={errors.confirmPassword}
                    touched={touched.confirmPassword}
                  />

                  <PrimaryButton title="Sign Up" onPress={handleSubmit} />
                </View>
              )}
            </Formik>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF", // Optional: set background color
  },
  scrollContent: {
    flexGrow: 1,
    paddingTop: 70,
    paddingBottom: 40,
    justifyContent: "center",
  },
  innerContainer: {
    paddingHorizontal: 30,
    alignItems: "center",
    backgroundColor: "#FFFFFF", // Optional: set background color
    color: "#000000", // Optional: set text color
  },
  bannerImage: {
    width: 100,
    height: 100,
  },
  heading: {
    color: "#000000",
    fontSize: 20,
    marginTop: 20,
    marginBottom: 20,
    fontWeight: "600",
  },
  form: {
    width: "100%",
    gap: 10,
  },
});
