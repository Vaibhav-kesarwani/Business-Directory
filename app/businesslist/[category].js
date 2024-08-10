import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { useLocalSearchParams, useNavigation } from "expo-router";

export default function BusinessListByCategory() {
  const navigation = useNavigation();
  const { category } = useLocalSearchParams();

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: category,
    });
  });

  return (
    <View>
      <Text>{category}</Text>
    </View>
  );
}
