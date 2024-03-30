import React from "react";
import AppLoading from 'expo-app-loading';
import { useFonts, Roboto_500Medium } from '@expo-google-fonts/roboto';
import { Box, VStack, Text, Image, Pressable, HStack } from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";


const BookDetail = ({ book }) => {
  const { navigate } = useNavigation();
  let [fontsLoaded] = useFonts({
    Roboto_500Medium
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  
  return (
    <Box
      width={140} height={256} elevation={1}
      marginRight={16}
    >
      <VStack justifyContent="space-around">
        <Pressable onPress={() => navigate('Detail', book)}>
          <Image
            width={140} height={200}
            source={{ uri: book.image }}
            alt="BookImage"
          />
        </Pressable>
        <VStack height={56} justifyContent="space-evenly">
          <Text fontSize={16} fontFamily="Roboto_500Medium" color="black">{book.bookname}</Text>
          <Text fontSize={12} fontFamily="Roboto_500Medium" color="black" opacity={0.5}>{book.author}</Text>
        </VStack>

      </VStack>

    </Box>
  );
}



/*
const styles = StyleSheet.create({  
    cardContainerStyle: {
        height:256,
        width:140,
        elevation: 1,
        display:"flex",
        flexDirection:"column",
        justifyContent:"space-around",
        marginRight:16
    },
    bookname:{
      fontSize:16,
      fontWeight:'700',
      fontFamily:'Roboto_500Medium'
    },
    author:{
      fontSize:12,
      fontWeight:'500',
      color:"#666666",
      opacity:50,
      fontFamily:'Roboto_500Medium'
    },

});
*/

export default BookDetail;