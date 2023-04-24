import React from 'react';
import { Text, Image } from 'react-native';
import { Button, Box} from 'native-base';

function Welcome ({ navigation }) {
  return (
    <Box
      display="flex"
      flex={1}
      alignItems="center"
      justifyContent="center"
      bg="white"
    >
      <Image source={require('../assets/welcome.png')} />
      <Image source={require('../assets/wtd.png')}/>
      <Text  marginTop={10}>Write your activity and finish your activity. Fast, Simple and Easy to Use</Text>
      <Box marginTop={20} width="80%">
        <Button onPress={() => navigation.navigate("Login")}
          bg="error.500"
          py={3}
          _text={{
            fontSize: "md",
            fontWeight: "bold",
          }}>
            Login
        </Button>
        <Button onPress={() => navigation.navigate("Register")}
          bg="muted.400"
          width="100%"
          py={3}
          _text={{
            fontSize: "md",
            fontWeight: "bold",
          }}
          marginTop={4}>
            Register
        </Button>
      </Box>
    </Box>
    
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   text: {
//     fontSize: 24,
//     marginBottom: 16,
//   },
// });

export default Welcome;
