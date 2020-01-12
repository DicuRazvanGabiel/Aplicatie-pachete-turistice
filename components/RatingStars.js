import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const RatingStars = () => {
  const [filledStars, setFilledStars] = useState(4);

  const numStars = 5;
  let stars = [];

  const createStar = filled => {
    return (
      <FontAwesome name={filled ? "star" : "star-o"} color="blue" size={30} />
    );
  };

  for (let i = 1; i <= numStars; i++) {
    if (i <= filledStars) {
      stars.push(
        <TouchableOpacity
          style={{ marginHorizontal: 10 }}
          key={i}
          onPress={() => setFilledStars(i)}
        >
          {createStar(true)}
        </TouchableOpacity>
      );
    } else {
      stars.push(
        <TouchableOpacity
          style={{ marginHorizontal: 10 }}
          key={i}
          onPress={() => setFilledStars(i)}
        >
          {createStar(false)}
        </TouchableOpacity>
      );
    }
  }

  return <View style={styles.container}>{stars}</View>;
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center"
  }
});

export default RatingStars;
