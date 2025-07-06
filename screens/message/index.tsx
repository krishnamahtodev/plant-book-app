import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ScreenWrapper from "../../components/screenWrapper";
import { commonStyles } from "../style";

const MessageScreen = () => {
  return (
    <ScreenWrapper scroll={true} avoidKeyboard={true}>
      <View style={commonStyles.innerContainer}>
        <Text style={commonStyles.heading}>Message Screen 📝</Text>
      </View>
    </ScreenWrapper>
  );
};

export default MessageScreen;

const styles = StyleSheet.create({});
