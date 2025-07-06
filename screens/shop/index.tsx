import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ScreenWrapper from "../../components/screenWrapper";
import { commonStyles } from "../style";

const ShopScreen = () => {
  return (
    <ScreenWrapper scroll={true} avoidKeyboard={true}>
      <View style={commonStyles.innerContainer}>
        <Text style={commonStyles.heading}>Shop Screen 🛍️</Text>
      </View>
    </ScreenWrapper>
  );
};

export default ShopScreen;

const styles = StyleSheet.create({});
