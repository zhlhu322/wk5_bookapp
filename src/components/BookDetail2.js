import React from "react";
import AppLoading from 'expo-app-loading';
import { useFonts,Roboto_500Medium } from '@expo-google-fonts/roboto';
import { Box, VStack, Text, Image, Pressable, HStack } from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const BookDetail2 = ({book}) => {
  const { navigate } = useNavigation();
  const starsArray = Array.from({ length : 5 }, (_, index) => (
    <MaterialCommunityIcons key={index} name="star"
     size={18} color={index < book.stars ? "#FFC41F" : "#EDEDEF"} />
  ));
  let [fontsLoaded] = useFonts({
    Roboto_500Medium
  });
  if(!fontsLoaded){
    return<AppLoading/>;
  }else{
    return (
      <Box width={140} height={400}
          elevation ={1} marginRight={16}
      >
        <Pressable onPress={() => navigate('Detail', book)}>
          <Image
            height={200} width={140}
            source={{uri:book.image}}
            alt="BookImage"
          />
        </Pressable>
        <HStack mt={16} >
        {starsArray}
        </HStack>
        <VStack height={56} justifyContent="space-evenly">
            <Text fontSize={16} fontFamily="Roboto_500Medium" color="black">{book.bookname}</Text>
            <Text fontSize={12} fontFamily="Roboto_500Medium" color="black" opacity={0.5}>{book.author}</Text>
        </VStack>
      </Box>
    );
  }
}

/*
const styles = StyleSheet.create({  
    imageStyle: {
        height:200,
        width: 140
    },
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

export default BookDetail2;