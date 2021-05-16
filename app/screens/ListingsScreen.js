import React from "react";
import { View, StyleSheet, FlatList } from "react-native";

import AppScreen from "../component/AppScreen";
import Card from "../component/Card";
import colors from "../config/colors";

const listings = [
  {
    id: 1,
    title: "Red Jacket for sale",
    price: 100,
    image: require("../assets/jacket.jpg"),
  },
  {
    id: 2,
    title: "couch in great condition",
    price: 1000,
    image: require("../assets/couch.jpg"),
  },
];

function ListingsScreen(props) {
  return (
    <AppScreen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            image={item.image}
          />
        )}
      />
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});

export default ListingsScreen;
