import { StyleSheet } from "react-native";
import colors from "../utils/style";

export const commonStyles = StyleSheet.create({
  innerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    color: colors.black,
    fontSize: 16,
    fontWeight: "500",
  },
  bio: {
    color: colors.darkGrey,
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    paddingHorizontal: 40,
  },
});
