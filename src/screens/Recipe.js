import React, { useState, useEffect, useRef } from "react";
import { View, Text, Animated, Image } from "react-native";
import { COLORS, FONTS, SIZES, icons } from "../constants";
import { BlurView } from "expo-blur";
import { TouchableOpacity } from "react-native";
import Viewers from "../components/Viewers";

const HEADER_HEIGHT = 350;
const Recipe = ({ navigation, route }) => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  // const scrollY = useRef(Animated.Value).current;
  // console.log(scrollY);
  useEffect(() => {
    let { recipe } = route.params;
    setSelectedRecipe(recipe);
  }, []);

  const renderRecipeInfo = (selectedRecipe) => {
    return (
      <View
        style={{
          flexDirection: "row",
          height: 130,
          width: SIZES.width,
          paddingHorizontal: 30,
          paddingVertical: 20,
          alignItems: "center",
        }}
      >
        <View
          style={{
            flex: 1.5,
            justifyContent: "center",
          }}
        >
          <Text style={{ ...FONTS.h2 }}>{selectedRecipe?.name}</Text>
          <Text
            style={{
              marginTop: 5,
              ...FONTS.body4,
              color: COLORS.lightGray2,
            }}
          >
            {selectedRecipe?.duration} | {selectedRecipe?.serving} Serving
          </Text>
        </View>
        <Viewers ViewersList={selectedRecipe?.viewers} />
      </View>
    );
  };
  const renderHeaderBar = () => {
    return (
      <View
        style={{
          position: "absolute",
          top: 10,
          left: 0,
          right: 0,
          flexDirection: "row",
          alignItems: "flex-end",
          justifyContent: "space-between",
          marginHorizontal: SIZES.padding,
          paddingBottom: 10,
        }}
      >
        <TouchableOpacity
          style={{
            alignItems: "center",
            justifyContent: "center",
            height: 35,
            width: 35,
            borderRadius: 18,
            borderWidth: 1,
            borderColor: COLORS.lightGray,
            backgroundColor: COLORS.transparentBlack5,
          }}
          onPress={() => navigation.goBack()}
        >
          <Image
            source={icons.back}
            style={{
              width: 15,
              height: 15,
              tintColor: COLORS.lightGray,
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            alignItems: "center",
            justifyContent: "center",
            height: 35,
            width: 35,
          }}
        >
          <Image
            source={icons.bookmark}
            style={{
              width: 30,
              height: 30,
              tintColor: COLORS.darkGreen,
            }}
          />
        </TouchableOpacity>
      </View>
    );
  };

  const renderRecipeCardHeader = () => {
    return (
      <View
        style={{
          alignItems: "center",
        }}
      >
        <Animated.Image
          source={selectedRecipe?.image}
          resizeMode="contain"
          style={{
            height: HEADER_HEIGHT,
            // width: "200 %",
            // transform: [
            //   {
            //     translateY: scrollY.interpolate({
            //       inputRange: [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
            //       outputRange: [-HEADER_HEIGHT / 2, 0, HEADER_HEIGHT * 0.75],
            //     }),
            //   },
            // ],
          }}
        />
        <Animated.View
          style={{
            position: "absolute",
            bottom: 10,
            left: 30,
            right: 30,
            height: 80,
          }}
        >
          <RecipeCreatorCardInfo selectedRecipe={selectedRecipe} />
        </Animated.View>
      </View>
    );
  };

  const renderIngredientHeader = (totalIngredients) => {
    console.log(selectedRecipe)
    return (
      <View
        style={{
          flexDirection: "row",
          paddingHorizontal: 30,
          marginTop: SIZES.radius,
          marginBottom: SIZES.padding,
        }}
      >
        <Text
          style={{
            flex: 1,
            ...FONTS.h3,
          }}
        >
          Ingredients
        </Text>
        <Text
          style={{
            ...FONTS.body4,
            color: COLORS.gray,
          }}
        >
          {totalIngredients} items
        </Text>
      </View>
    );
  };
  const RecipeCardDetail = ({ selectedRecipe }) => {
    return (
      <View style={{ flex: 1, alignItems: "center", flexDirection: "row" }}>
        <View style={{ width: 40, height: 40, marginLeft: 20 }}>
          <Image
            source={selectedRecipe?.author?.profilePic}
            style={{
              width: 40,
              height: 40,
              borderRadius: 20,
            }}
          />
        </View>
        <View style={{ flex: 1, marginHorizontal: 20 }}>
          <Text style={{ color: COLORS.lightGray, ...FONTS.body4 }}>
            Recipe by:
          </Text>
          <Text style={{ color: COLORS.white, ...FONTS.h3 }}>
            {selectedRecipe?.author?.name}
          </Text>
        </View>
        <TouchableOpacity
          style={{
            width: 30,
            height: 30,
            alignItems: "center",
            justifyContent: "center",
            marginRight: 20,
            borderRadius: 5,
            borderWidth: 1,
            borderColor: COLORS.lightGreen,
          }}
        >
          <Image
            source={icons.rightArrow}
            style={{
              width: 15,
              height: 15,
              tintColor: COLORS.lightGreen1,
            }}
          />
        </TouchableOpacity>
      </View>
    );
  };
  const RecipeCreatorCardInfo = ({ selectedRecipe }) => {
    return (
      <BlurView
        style={{ flex: 1, borderRadius: SIZES.radius }}
        tint="dark"
        intensity={80}
      >
        <RecipeCardDetail selectedRecipe={selectedRecipe} />
      </BlurView>
    );
  };
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
      <Animated.FlatList
        data={selectedRecipe?.ingredients}
        keyExtractor={(item) => `${item.id}`}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View>
            {renderRecipeCardHeader()}
            {renderRecipeInfo(selectedRecipe)}
            <View
              style={{
                height: 2,
                backgroundColor: COLORS.lightGreen1,
                marginHorizontal: SIZES.padding,
                marginBottom: SIZES.radius,
              }}
            ></View>
            {renderIngredientHeader(selectedRecipe?.ingredients.length)}
          </View>
        }
        scrollEventThrottle={16}
        // onScroll={Animated.event([
        //   { nativeEvent: { contentOffset: { y: scrollY } } },
        //   { useNativeDriver: true },
        // ])}
        renderItem={({ item }) => (
          <View
            style={{
              flexDirection: "row",
              paddingHorizontal: 30,
              marginVertical: 5,
            }}
          >
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                height: 50,
                width: 50,
                borderRadius: 5,
                backgroundColor: COLORS.lightGreen,
              }}
            >
              <Image
                source={item.icon}
                style={{
                  height: 40,
                  width: 40,
                }}
              />
            </View>
            <View
              style={{
                flex: 1,
                paddingHorizontal: 20,
                justifyContent: "center",
              }}
            >
              <Text style={{ ...FONTS.body3 }}>{item.description}</Text>
            </View>
            <View style={{ justifyContent: "center" }}>
              <Text style={{ ...FONTS.body3 }}>{item.quantity}</Text>
            </View>
          </View>
        )}
        ListFooterComponent={<View style={{ marginTop: 20 }}></View>}
      />
      {renderHeaderBar()}
    </View>
  );
};

export default Recipe;
