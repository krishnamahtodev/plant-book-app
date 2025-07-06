// components/ScreenWrapper.tsx

import React, { ReactNode } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  ViewStyle,
  ScrollViewProps,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type Props = {
  children: ReactNode;
  avoidKeyboard?: boolean;
  scroll?: boolean;
  style?: ViewStyle;
  scrollProps?: ScrollViewProps;
};

const ScreenWrapper = ({
  children,
  avoidKeyboard = false,
  scroll = false,
  style,
  scrollProps,
}: Props) => {
  const content = scroll ? (
    <ScrollView
      contentContainerStyle={[{ flexGrow: 1, paddingBottom: 40 }, style]}
      keyboardShouldPersistTaps="handled"
      {...scrollProps}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    >
      {children}
    </ScrollView>
  ) : (
    children
  );

  const body = avoidKeyboard ? (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        {content}
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  ) : (
    content
  );

  return <SafeAreaView style={{ flex: 1 }}>{body}</SafeAreaView>;
};

export default ScreenWrapper;
