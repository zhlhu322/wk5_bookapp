import React from 'react';
import { Center, ScrollView, Box, Text, Image, Button, ButtonText, HStack } from "@gluestack-ui/themed";
import { useFonts, Roboto_500Medium, Roboto_400Regular } from '@expo-google-fonts/roboto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



const DetailScreen = ({ route }) => {
  const { title, author, description, price, image, stars} = route.params;
  const starsArray = Array.from({ length : 5 }, (_, index) => (
    <MaterialCommunityIcons key={index} name="star"
     size={18} color={index < stars ? "#FFC41F" : "#EDEDEF"} />
  ));
  let [fontsLoaded] = useFonts({
    Roboto_500Medium,
    Roboto_400Regular,
  });

  return (
    <Center backgroundColor='#FFF' flex={1}>
      <Box justifyContent='space-evenly' >
        <Center>
          <Image
            style={{ width: 210, height: 300 }}
            source={{ uri: image }}
            marginBottom={28}
            alt=''
          />
          <Text color="black" fontSize={24} fontFamily='Roboto_500Medium' mb={8}>{title}</Text>
          <Text color="#666666" fontSize={14} fontFamily='Roboto_400Regular' mb={8}>{author}</Text>
          <HStack alignItems="center" justifyContent="space-evenly" width={140}>
            {starsArray}
            <Text color="black" fontSize={14} fontFamily='Roboto_400Regular'>{stars}</Text>
            <Text color="#666666" fontSize={14} fontFamily='Roboto_400Regular'>/5.0</Text>
          </HStack>
          <Text
            color="black" fontSize={14} fontFamily='Roboto_400Regular' 
            lineHeight={24} textAlign='center' letterSpacing={0.2}
            height={72} width={320} marginTop={16}
          > {description} </Text>
          <Button mt="4" width={190} marginTop={28} backgroundColor="#6200EE" >
            <ButtonText fontSize={14} fontFamily='Roboto_400Regular' letterSpacing={0.8}>BUY NOW FOR ${price}</ButtonText>
          </Button>
        </Center>
      </Box>
    </Center>

  );
}

/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: 40,
    fontWeight: 'bold',
  }
});
*/

export default DetailScreen;
