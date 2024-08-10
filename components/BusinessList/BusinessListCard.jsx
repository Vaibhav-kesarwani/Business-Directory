import React from "react";
import { Image, View } from "react-native";

export default function BusinessListCard() {
  return (
    <View>
      <Image
        source={{ uri: business.imageUrl }}
        style={{ width: 130, height: 130 }}
      />
    </View>
  );
}
