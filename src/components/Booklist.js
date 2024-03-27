import React from "react";
import { SectionList} from "react-native";
import AppLoading from 'expo-app-loading';
import { useFonts,Roboto_500Medium } from '@expo-google-fonts/roboto';
import { Box, Text} from "@gluestack-ui/themed";

import BookDetail from "./BookDetail";
import bookData from "../json/bookData.json";

const Booklist = () => {
    const renderItem = ({ item }) => < BookDetail book={item}/>
    let [fontsLoaded] = useFonts({
      Roboto_500Medium
    });
    if(!fontsLoaded){
      return<AppLoading/>;
    }else{
      return (
        <Box marginLeft={16} marginBottom={16}>
          <Text fontSize={24} fontFamily="Roboto_500Medium" color="black" marginBottom={16}> Popular Books</Text>
          <SectionList
            sections = {bookData}
            renderItem = {renderItem}
            keyExtractor={ item => item.title }
            horizontal = {true}
          />
        </Box>
      );
    }
};

export default Booklist;