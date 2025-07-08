// import { StyleSheet, Text, View } from "react-native";
// import React from "react";
// import ScreenWrapper from "../../components/screenWrapper";
// import { Ionicons } from "@expo/vector-icons";
// import { Image } from "expo-image";
// import colors from "../../utils/style";

// const HomeScreen = () => {
const images = [
  "https://i.pinimg.com/736x/b9/f4/6f/b9f46fdb253ad697c573892332403d7e.jpg",
  "https://i.pinimg.com/736x/38/f4/95/38f49514a075755c8ac7d1bc848bd9fc.jpg",
  "https://i.pinimg.com/736x/f1/8f/20/f18f2023b950d14b64a6f7388ca93608.jpg",
  "https://i.pinimg.com/736x/45/57/a4/4557a48a8311719691489a862859ccf5.jpg",
  "https://i.pinimg.com/736x/d0/28/17/d028174d9c366ce45d82d2ff09c0c6d5.jpg",
  "https://i.pinimg.com/736x/8e/9b/de/8e9bde20bcde174b98bb3a84213d2fca.jpg",
  "https://i.pinimg.com/736x/ed/aa/ec/edaaec32a33753885531096192725d4c.jpg",
];

//   return (
//     <ScreenWrapper scroll avoidKeyboard={false}>
//       {images.map((img, index) => (
//         <View key={index} style={styles.card}>
//           {/* Header */}
//           <View style={styles.header}>
//             <View style={styles.userInfo}>
//               <Image
//                 source={require("../../assets/Avatar.png")}
//                 style={styles.avatar}
//                 contentFit="contain"
//                 transition={300}
//               />
//               <Text style={styles.username}>Krishna</Text>
//             </View>
//             <Ionicons name="ellipsis-horizontal" size={24} color="black" />
//           </View>

//           {/* Image */}
//           <Image
//             source={{ uri: img }}
//             style={styles.mainImage}
//             contentFit="cover"
//             transition={300}
//           />

//           {/* Reactions */}
//           <View style={styles.reactions}>
//             <View style={styles.reactionGroup}>
//               <View style={styles.reactionItem}>
//                 <Ionicons name="heart-outline" size={24} color="black" />
//                 <Text style={styles.reactionText}>123</Text>
//               </View>
//               <View style={styles.reactionItem}>
//                 <Ionicons name="chatbubble-outline" size={24} color="black" />
//                 <Text style={styles.reactionText}>45</Text>
//               </View>
//               <View style={styles.reactionItem}>
//                 <Ionicons name="paper-plane-outline" size={24} color="black" />
//                 <Text style={styles.reactionText}>67</Text>
//               </View>
//             </View>
//             <Ionicons name="bookmark-outline" size={24} color="black" />
//           </View>

//           {/* Caption */}
//           <Text style={styles.caption}>
//             Aqaba's Red Sea is one of the most attractive and rich areas of the
//             world for scuba diving.
//           </Text>
//           <Text style={styles.time}>10 hours ago</Text>
//         </View>
//       ))}
//     </ScreenWrapper>
//   );
// };

// export default HomeScreen;

// const styles = StyleSheet.create({
//   card: {
//     flex: 1,
//     marginBottom: 24,
//   },
//   header: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     paddingHorizontal: 16,
//     alignItems: "center",
//   },
//   userInfo: {
//     flexDirection: "row",
//     alignItems: "center",
//     gap: 9,
//   },
//   avatar: {
//     width: 30,
//     height: 30,
//     borderRadius: 15,
//   },
//   username: {
//     fontWeight: "700",
//     fontSize: 12,
//   },
//   mainImage: {
//     width: "100%",
//     height: 400,
//     borderRadius: 10,
//     marginTop: 10,
//   },
//   reactions: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     paddingHorizontal: 16,
//     marginTop: 10,
//   },
//   reactionGroup: {
//     flexDirection: "row",
//     gap: 16,
//   },
//   reactionItem: {
//     flexDirection: "row",
//     alignItems: "center",
//     gap: 5,
//   },
//   reactionText: {
//     fontWeight: "500",
//     lineHeight: 20,
//     letterSpacing: -0.4,
//   },
//   caption: {
//     paddingHorizontal: 16,
//     marginTop: 10,
//     fontWeight: "500",
//     fontSize: 14,
//     lineHeight: 20,
//   },
//   time: {
//     fontSize: 10,
//     fontWeight: "500",
//     color: colors.darkGrey,
//     paddingHorizontal: 16,
//     marginTop: 5,
//   },
// });

import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Share } from "react-native";
import ScreenWrapper from "../../components/screenWrapper";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import colors from "../../utils/style";

const postData = Array.from({ length: 20 }, (_, i) => ({
  id: i.toString(),
  author: [
    "Aaradhya",
    "Meera",
    "Ananya",
    "Saanvi",
    "Ira",
    "Diya",
    "Myra",
    "Avni",
    "Kriti",
    "Naira",
    "Kiara",
    "Rhea",
    "Tara",
    "Ishita",
    "Anvi",
    "Mira",
    "Sasha",
    "Pari",
    "Ruhi",
    "Vanya",
  ][i],
  avatarUri: images[Math.floor(Math.random() * images.length)],
  imageUri: images[Math.floor(Math.random() * images.length)],
  likes: Math.floor(Math.random() * 450) + 50,
  comments: Math.floor(Math.random() * 90) + 10,
  caption: [
    "Green therapy 🌿",
    "Sunlight and smiles 🌞🌱",
    "Nurturing nature one leaf at a time 🍀",
    "Growing together 🌱❤️",
    "Plant love is real love 🌼",
    "Living in bloom 🌸",
    "Weekend vibes with my green gang 🌿🪴",
    "Plants & peace 🌾🧘‍♀️",
    "Rooting for you 🌱",
    "Little jungle, big joy 🌴",
    "Oxygen is my love language 🌬️",
    "Me and my chlorophyll crew 🌿",
    "Flourish with me 🌻",
    "Girl meets green 🌱✨",
    "Nature is the new luxury 🌾",
    "Friends in pots 🪴❤️",
    "Breathe in nature, breathe out peace 🌬️🌿",
    "Happy plant, happy me 😊🌿",
    "Every leaf tells a story 🍃",
    "Plant mom diaries 🌱📔",
  ][i],
  timestamp: `${Math.floor(Math.random() * 23) + 1} hours ago`,
  liked: false,
  saved: false,
}));

const Post = ({
  post,
  onToggleLike,
  onToggleSave,
  onShare,
}: {
  post: any;
  onToggleLike: (id: string) => void;
  onToggleSave: (id: string) => void;
  onShare: (post: any) => void;
}) => (
  <View style={styles.card}>
    <View style={styles.header}>
      <View style={styles.userInfo}>
        <Image
          source={{ uri: post.avatarUri }}
          style={styles.avatar}
          contentFit="cover"
        />
        <Text style={styles.username}>{post.author}</Text>
      </View>
      <Ionicons name="ellipsis-horizontal" size={24} color="black" />
    </View>
    <Image
      source={{ uri: post.imageUri }}
      style={styles.mainImage}
      contentFit="cover"
    />
    <View style={styles.reactions}>
      <View style={styles.reactionGroup}>
        <TouchableOpacity
          style={styles.reactionItem}
          onPress={() => onToggleLike(post.id)}
        >
          <Ionicons
            name={post.liked ? "heart" : "heart-outline"}
            size={24}
            color={post.liked ? "red" : "black"}
          />
          <Text style={styles.reactionText}>{post.likes}</Text>
        </TouchableOpacity>
        <View style={styles.reactionItem}>
          <Ionicons name="chatbubble-outline" size={24} />
          <Text style={styles.reactionText}>{post.comments}</Text>
        </View>
        <TouchableOpacity
          style={styles.reactionItem}
          onPress={() => onShare(post)}
        >
          <Ionicons name="paper-plane-outline" size={24} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => onToggleSave(post.id)}>
        <Ionicons
          name={post.saved ? "bookmark" : "bookmark-outline"}
          size={24}
        />
      </TouchableOpacity>
    </View>
    <Text style={styles.caption}>{post.caption}</Text>
    <Text style={styles.time}>{post.timestamp}</Text>
  </View>
);

export default function HomeScreen() {
  const [posts, setPosts] = useState(postData);

  const toggleLike = (id: any) => {
    setPosts((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              liked: !item.liked,
              likes: item.liked ? item.likes - 1 : item.likes + 1,
            }
          : item
      )
    );
  };

  const toggleSave = (id: any) => {
    setPosts((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, saved: !item.saved } : item
      )
    );
  };

  const sharePost = async (post: any) => {
    try {
      await Share.share({
        message: `${post.caption}\n${post.imageUri}`,
      });
    } catch (error) {
      console.error("Error sharing post:", error);
    }
  };

  return (
    <ScreenWrapper scroll avoidKeyboard={false}>
      {posts.map((post) => (
        <Post
          key={post.id}
          post={post}
          onToggleLike={toggleLike}
          onToggleSave={toggleSave}
          onShare={sharePost}
        />
      ))}
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  card: { marginBottom: 24 },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    alignItems: "center",
  },
  userInfo: { flexDirection: "row", alignItems: "center" },
  avatar: { width: 30, height: 30, borderRadius: 15 },
  username: {
    fontSize: 12,
    fontWeight: "700",
    marginLeft: 8,
  },
  mainImage: {
    width: "100%",
    height: 400,
    borderRadius: 10,
    marginTop: 10,
  },
  reactions: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    marginTop: 10,
    alignItems: "center",
  },
  reactionGroup: {
    flexDirection: "row",
  },
  reactionItem: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 16,
  },
  reactionText: {
    fontWeight: "500",
    lineHeight: 20,
    letterSpacing: -0.4,
    marginLeft: 4,
  },
  caption: {
    paddingHorizontal: 16,
    marginTop: 10,
    fontWeight: "500",
    fontSize: 14,
    lineHeight: 20,
  },
  time: {
    fontSize: 10,
    fontWeight: "500",
    color: colors.darkGrey,
    paddingHorizontal: 16,
    marginTop: 5,
  },
});
