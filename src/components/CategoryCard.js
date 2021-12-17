import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { SIZES } from "../constants";
import { COLORS, FONTS } from "../constants/theme";

const CategoryCard = ({ containerStyle, categoryItem, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        marginTop: 10,
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.gray2,
        ...containerStyle,
      }}
      onPress={onPress}
    >
      <Image
        source={categoryItem.image}
        resizeMode="cover"
        style={{
          width: 100,
          height: 100,
          borderRadius: SIZES.radius,
        }}
      />
      <View style={{ width: "72%", paddingHorizontal: 20 }}>
        <Text style={{ flex: 1, ...FONTS.h2, fontWeight: "bold" }}>
          {categoryItem.name}
        </Text>
        <Text
          style={{
            colors: COLORS.gray,
            ...FONTS.body4,
          }}
        >
          {categoryItem.duration} | {categoryItem.serving} Serving
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CategoryCard;
