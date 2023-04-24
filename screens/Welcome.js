import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Center, Button} from 'native-base';

const Welcome = ({ navigation }) => {
  return (
    <>
    <View style={styles.container}>
        
        <Image source={require('../assets/welcome.png')} />
        <Image source={require('../assets/wtd.png')} />
        <Text>Write your activity and finish your activity. Fast, Simple and Easy to Use</Text>
    </View>
    <View>
        <Button colorScheme="secondary" ><Text>Login</Text></Button>
        <Button colorScheme="muted" onPress={() => navigate("Register")}><Text>Register</Text></Button>
    </View>
    </>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    marginBottom: 16,
  },
});

export default Welcome;
