import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ScreenWrapper from "../../components/screenWrapper";
import { commonStyles } from "../style";
import { Image } from "expo-image";
import colors from "../../utils/style";
import OutlinedButton from "../../components/buttons/OutlinedButton";
import PrimaryButton from "../../components/buttons/PrimaryButton";

const ProfileScreen = () => {
  const images = [
    "https://i.pinimg.com/736x/b9/f4/6f/b9f46fdb253ad697c573892332403d7e.jpg",
    "https://i.pinimg.com/736x/38/f4/95/38f49514a075755c8ac7d1bc848bd9fc.jpg",
    "https://i.pinimg.com/736x/f1/8f/20/f18f2023b950d14b64a6f7388ca93608.jpg",
    "https://i.pinimg.com/736x/45/57/a4/4557a48a8311719691489a862859ccf5.jpg",
    "https://i.pinimg.com/736x/d0/28/17/d028174d9c366ce45d82d2ff09c0c6d5.jpg",
    "https://i.pinimg.com/736x/8e/9b/de/8e9bde20bcde174b98bb3a84213d2fca.jpg",
  ];
  return (
    <ScreenWrapper scroll={true} avoidKeyboard={true}>
      <View style={styles.container}>
        <Image
          source={
            "https://i.pinimg.com/736x/a3/0f/48/a30f4802984c0c3f7488c6ed1846c3be.jpg"
          }
          style={styles.profileImage}
        />
        <View style={{ alignItems: "center", gap: 5 }}>
          <Text style={commonStyles.heading}>Anushka Shrestha</Text>
          <Text style={commonStyles.bio}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus
            quasi.
          </Text>
        </View>
        <View style={styles.statsContainer}>
          <View style={styles.statsItems}>
            <Text style={styles.statsText}>96</Text>
            <Text style={styles.statsSubText}>Posts</Text>
          </View>
          <View style={styles.statsItems}>
            <Text style={styles.statsText}>110</Text>
            <Text style={styles.statsSubText}>Followers</Text>
          </View>
          <View style={styles.statsItems}>
            <Text style={styles.statsText}>210</Text>
            <Text style={styles.statsSubText}>Following</Text>
          </View>
        </View>
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            gap: 10,
            // justifyContent: "space-between",
          }}
        >
          <OutlinedButton
            title="Message"
            onPress={() => console.log("Cancelled")}
          />
          <PrimaryButton
            title="Follow"
            onPress={() => console.log("Followed")}
          />
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 10,
            width: "100%",
          }}
        >
          {images.map((image, index) => (
            <Image
              key={index}
              source={image}
              style={{
                width: 100,
                height: 100,
                borderRadius: 10,
                marginVertical: 5,
              }}
            />
          ))}
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
    paddingTop: 50,
    gap: 18,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    alignSelf: "center",
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    paddingHorizontal: 20,
  },
  statsItems: { flex: 1, alignItems: "center", gap: 1 },
  statsText: { fontSize: 20, fontWeight: "700" },
  statsSubText: {
    fontSize: 10,
    color: colors.darkGrey,
  },
});
