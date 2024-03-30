import React from "react";
import BookList from "../components/Booklist";
import BookList2 from "../components/Booklist2";
import { Box } from "@gluestack-ui/themed"
import { ScrollView } from "@gluestack-ui/themed";

const HomeScreen = () => {
  return (
    <ScrollView style={{ backgroundColor: "#FFF" }}>
      <Box style={{ backgroundColor: "#FFF" }}>
        <BookList />
        <BookList2 />
      </Box>
    </ScrollView>

  );
};

export default HomeScreen;