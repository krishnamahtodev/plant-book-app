import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ScreenWrapper from "../../components/screenWrapper";
import { commonStyles } from "../style";

const HomeScreen = () => {
  return (
    <ScreenWrapper>
      <View style={commonStyles.innerContainer}>
        <Text style={commonStyles.heading}>Home Screen 🏠</Text>
      </View>
    </ScreenWrapper>
  );
};

export default HomeScreen;
