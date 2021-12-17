import React from "react";
import { View, Image, Text } from "react-native";
// import { tintColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes'
import { COLORS } from "../constants/theme";

const TabIcon = ({ focused, icon }) => {
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        height: 66,
        width: 50,
      }}
    >
      <Image
        source={icon}
        style={{
          width: 27,
          height: 27,
          tintColor: focused ? COLORS.darkGreen : COLORS.lightGreen1,
        }}
        resizeMode="contain"
      />
      {focused && (
        <View
          style={{
            position: "absolute",
            bottom: 0,
            right: 0,
            left: 0,
            backgroundColor: COLORS.darkGreen,
            height: 5,
            borderTopLeftRadius: 5,
            borderTopRightRadius: 5,
          }}
        ></View>
      )}
    </View>
  );
};

export default TabIcon;
