import {
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
  GestureResponderEvent,
} from "react-native";
import React from "react";
import colors from "../../utils/style";

type TextButtonProps = {
  label?: string; // Static message like "Don't have an account?"
  actionText: string; // Clickable text like "Create account"
  onPress: (event: GestureResponderEvent) => void;
  containerStyle?: ViewStyle;
  textStyle?: TextStyle;
  actionTextStyle?: TextStyle;
};

const TextButton: React.FC<TextButtonProps> = ({
  label = "",
  actionText,
  onPress,
  containerStyle,
  textStyle,
  actionTextStyle,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={[styles.label, textStyle]}>
        {label}
        <Text style={[styles.actionText, actionTextStyle]} onPress={onPress}>
          {" "}
          {actionText}
        </Text>
      </Text>
    </View>
  );
};

export default TextButton;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  label: {
    fontSize: 14,
    color: "#666",
  },
  actionText: {
    color: colors.primary,
    fontWeight: "500",
    marginLeft: 4,
  },
});
