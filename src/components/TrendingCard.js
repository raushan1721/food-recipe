import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { COLORS, FONTS, icons, SIZES } from "../constants";
import { BlurView } from "expo-blur";

const RecipeCardDetail = ({ recipeItem }) => {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            width: "78%",
            color: COLORS.white,
            ...FONTS.h3,
            fontSize: 18,
          }}
          numberOfLines={2}
        >
          {recipeItem.name}
        </Text>
        <Image
          source={recipeItem.isBookmark ? icons.bookmarkFilled : icons.bookmark}
          style={{
            width: 22,
            height: 22,
            marginRight: SIZES.base,
            tintColor: COLORS.darkGreen,
          }}
        />
      </View>
    </View>
  );
};
const RecipeCardInfo = ({ recipeItem }) => {
  return (
    <BlurView tint="dark" intensity={85} style={styles.recipeCardContainer}>
      <RecipeCardDetail recipeItem={recipeItem} />
    </BlurView>
  );
};

const TrendingCard = ({ containerStyle, recipeItem, onPress }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={{
        height: 280,
        width: 220,
        marginTop: SIZES.radius,
        marginRight: 15,
        borderRadius: SIZES.radius,
        ...containerStyle,
      }}
      onPress={onPress}
    >
      <Image
        source={recipeItem.image}
        resizeMode="cover"
        style={{
          width: 220,
          height: 280,
          borderRadius: SIZES.radius,
        }}
      />
      <View
        style={{
          position: "absolute",
          top: 10,
          left: 10,
          paddingHorizontal: SIZES.radius,
          paddingVertical: 5,
          backgroundColor: COLORS.transparentGray,
          borderRadius: SIZES.radius,
        }}
      >
        <Text
          style={{
            color: COLORS.white,
            ...FONTS.h4,
          }}
        >
          {recipeItem.category}
        </Text>
      </View>
      <RecipeCardInfo recipeItem={recipeItem} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  recipeCardContainer: {
    position: "absolute",
    bottom: 8,
    left: 5,
    right: 5,
    height: 80,
    paddingVertical: SIZES.radius,
    paddingHorizontal: SIZES.base,
    borderRadius: SIZES.radius,
  },
});
export default TrendingCard;
