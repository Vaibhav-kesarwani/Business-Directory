import React from "react";
import { ScrollView, View } from "react-native";
import Header from "../../components/Home/Header";
import Slider from "../../components/Home/Slider";
import Category from "../../components/Home/Category";
import PopularBusiness from "../../components/Home/PopularBusiness";

export default function Home() {
  return (
    <ScrollView>
      {/* Header */}
      <Header />

      {/* Slider */}
      <Slider />

      {/* Category */}
      <Category />

      {/* Popular Business List */}
      <PopularBusiness />

      <View style={{ height: 20 }} />
    </ScrollView>
  );
}
