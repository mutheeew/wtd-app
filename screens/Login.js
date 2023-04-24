import * as React from "react";
import {Image } from 'react-native';
//Import Component Native Base
// import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  Box,
  Text,
  Input,
  Button,
} from "native-base";

export default function Login({navigation}) {
  return (
    <Box display="flex" flex={1} alignItems="center" bg="white" justifyContent="center">
      <Image
        source={require('../assets/auth.png')} 
        width={275}
        height={275}
        resizeMode="contain"
      />
      <Box display="flex" w={"90%"}>
        <Text fontWeight="bold" fontSize={30}>
          Login
        </Text>
        <Box display="flex" w={"100%"} mt={5} alignItems="center">
          <Input
            w={"100%"}
            bg="muted.200"
            placeholder="Email"
            py={3}
            keyboardType={"email-address"}
            fontSize={15}
            borderRadius="sm"
            borderColor="muted.500"
            // onChangeText={(value) => handleChangeText("email", value)}
            // value={dataRegister?.email}
          />
          <Input
            w={"100%"}
            bg="muted.200"
            placeholder="Password"
            py={3}
            mt={5}
            fontSize={15}
            secureTextEntry={true}
            borderRadius="sm"
            borderColor="muted.500"
            // onChangeText={(value) => handleChangeText("password", value)}
            // value={dataRegister?.password}
          />
          <Button
            w={"100%"}
            mt={5}
            bg="error.500"
            _hover={{ backgroundColor: "error.600" }}
            py={3}
            _text={{
              fontSize: "md",
              fontWeight: "bold",
            }}
            // onPress={(e) => handleSubmit.mutate(e)}
          >
            Login
          </Button>
          <Text mt={3}>
            New Users? {" "}
            <Text
              color="danger.500"
              fontWeight="bold"
              mx={2}
              onPress={() => navigation.navigate("Register")}
            >
              Register
            </Text>
          </Text>
        </Box>
      </Box>
    </Box>
  );
}