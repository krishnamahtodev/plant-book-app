import React, { useState } from "react";
import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import { Image } from "expo-image";
import PrimaryButton from "../components/buttons/PrimaryButton";
import TextButton from "../components/buttons/TextButton";
import colors from "../utils/style";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AuthStackParamList } from "../routes/Navigation";

type VerifyOTPScreenRouteProp = RouteProp<AuthStackParamList, "VerifyOTP">;
const CELL_COUNT = 4;

const VerifyOTPScreen = () => {
  const route = useRoute<VerifyOTPScreenRouteProp>();
  const { email, mode } = route.params;
  const navigation =
    useNavigation<NativeStackNavigationProp<AuthStackParamList>>();

  const [value, setValue] = useState("");
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const handleVerify = () => {
    if (value.length < CELL_COUNT) {
      Alert.alert("Invalid OTP", "Please enter the full 4-digit code.");
      return;
    }
    // Proceed to Reset Password or Next Step
    Alert.alert("Success", "OTP Verified Successfully!");
    if (mode === "login") {
      // navigation.navigate("Login");
      navigation.navigate("ResetPassword", {
        email: "krishnamahto@gmail.com",
      });
    } else if (mode === "signup") {
      navigation.navigate("Home");
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
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

              <Text style={styles.heading}>Verify OTP</Text>

              <TextButton
                label="Please enter the OTP code sent to"
                actionText={email}
                onPress={() => {}}
                textStyle={{ textAlign: "center" }}
                containerStyle={{ paddingVertical: 20 }}
              />

              <CodeField
                ref={ref}
                {...props}
                value={value}
                onChangeText={setValue}
                cellCount={CELL_COUNT}
                rootStyle={styles.codeFieldRoot}
                keyboardType="number-pad"
                textContentType="oneTimeCode"
                renderCell={({ index, symbol, isFocused }) => (
                  <Text
                    key={index}
                    style={[styles.cell, isFocused && styles.focusCell]}
                    onLayout={getCellOnLayoutHandler(index)}
                  >
                    {symbol || (isFocused ? <Cursor /> : null)}
                  </Text>
                )}
              />
              <PrimaryButton
                title="Verify OTP"
                onPress={handleVerify}
                style={{ width: "100%", marginTop: 10 }}
                disabled={value.length < CELL_COUNT}
              />
              <TextButton
                label="Didn't receive the code?"
                actionText="Resend"
                onPress={() => Alert.alert("Resent", "OTP has been resent.")}
                containerStyle={{ marginTop: 20 }}
              />
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default VerifyOTPScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
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
  },
  bannerImage: {
    width: 100,
    height: 100,
  },
  heading: {
    color: "#000000",
    fontSize: 20,
    marginTop: 20,
    marginBottom: 10,
    fontWeight: "600",
  },
  subheading: {
    color: "#666",
    fontSize: 14,
    marginBottom: 20,
    textAlign: "center",
  },
  codeFieldRoot: {
    marginBottom: 24,
    width: "100%",
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  cell: {
    width: 55,
    height: 55,
    lineHeight: 48,
    fontSize: 24,
    borderWidth: 2,
    borderColor: colors.borderGrey,
    display: "flex",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    backgroundColor: "#f5f5f5",
    color: "#000",
  },
  focusCell: {
    borderColor: colors.primary,
    backgroundColor: colors.background,
  },
});
