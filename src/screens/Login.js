import React from "react";
import {
  View,
  Text,
  ImageBackground,
  StatusBar,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { images, COLORS, SIZES, FONTS } from "../constants";
import { CustomeButton } from "../components";
const Login = ({ navigation }) => {
  const renderHeader = () => {
    return (
      <View style={{ height: SIZES.height > 700 ? "60%" : "55%" }}>
        <ImageBackground
          source={images.loginBackground}
          style={{ flex: 1, justifyContent: "flex-end" }}
          resizeMode="cover"
        >
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            colors={[COLORS.transparent, COLORS.black]}
            style={{
              height: 200,
              justifyContent: "flex-end",
              paddingHorizontal: SIZES.padding,
            }}
          >
            <Text
              style={{
                flex: 1,
                color: COLORS.white,
                ...FONTS.largeTitle,
                fontWeight: "bold",
                lineHeight: 50,
              }}
            >
              Cooking a Delicious Food Easily
            </Text>
          </LinearGradient>
        </ImageBackground>
      </View>
    );
  };
  const renderDetail = () => {
    return (
      <View style={{  paddingHorizontal: SIZES.padding }}>
        <Text
          style={{
            color: "#cfcfcf",
            marginTop: SIZES.radius,
            ...FONTS.body3,
          }}
        >
          Discover more than 1200 food recipes in your hands and cooking it
          easily
        </Text>
      </View>
    );
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.black,
      }}
    >
      <StatusBar barStyle="light-content" />
      {/* header */}
      {renderHeader()}
      {renderDetail()}
      <View style={{ flex: 1,justifyContent: "center" ,paddingHorizontal: 8}}>
        <CustomeButton
          buttonText="Login"
          colors={[COLORS.darkGreen, COLORS.lime]}
          onPress={() => navigation.replace("Home")}
          buttonContainerStyle={{
            paddingVertical: 12,
            borderRadius: 10,
          }}
        />
        <CustomeButton
          buttonText="Sign up"
          colors={[]}
          buttonContainerStyle={{
            marginTop: 13,
            borderRadius: 10,
            paddingVertical: 12,
            borderRadius: 10,
            borderColor: "#fff",
            borderWidth:1
          }}
        />
      </View>
    </View>
  );
};

export default Login;
