import React from 'react';
import { Linking } from 'react-native';
import { Center, ScrollView, Box, Text, Image, Button, ButtonText } from "@gluestack-ui/themed";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const DetailScreen = ({route}) => {
  const{title,author,description,price,image,url} = route.params;
  return (
    <Center>
      <ScrollView>
        <Box justifyContent='space-evenly' marginTop={36}>
          <Center>
              <Image
              style ={{width:210 , height:300}}
              source = {{uri:image}}
              marginBottom={28}
              />
              <Text color="black" fontSize={24} fontFamily='Roboto_500Medium'>{title}</Text>
              <Text color="gray" fontSize={14} fontFamily='Roboto_400Regular'>{author}</Text>
              <Text 
                color="black" fontSize={14} fontFamily='Roboto_400Regular' width={320}  marginTop={16}
                height={72} 
              > {description} </Text>
              <Button mt="4" width={190} onpress={()=> Linking.openURL(url)} marginTop={28} >
                <ButtonText fontSize={14} fontFamily='Roboto_400Medium'>BUY NOW FOR ${price}</ButtonText>
              </Button> 
          </Center>
        </Box>
      </ScrollView>
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
