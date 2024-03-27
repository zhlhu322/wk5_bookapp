import React from "react";
import BookList from "../components/Booklist";
import BookList2 from "../components/Booklist2";
import { Box } from "@gluestack-ui/themed"


const HomeScreen = () => {
  return (
    <Box>
      <BookList/>
      <BookList2/>
    </Box>
  );
};

export default HomeScreen;