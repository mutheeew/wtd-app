import React, {useState} from 'react'
import {Image } from 'react-native';
import {Box, Text, Input, Button} from "native-base";
import { API } from '../config/api'
import { useMutation } from 'react-query'

export default function Login({navigation}) {
  const [form, setForm] = useState({
    email: '',
    password: '',
  })

  const handleOnChange = (name, value) =>{
    setForm({
      ...form,
      [name]:value,
    })
  }

  const handleLogin = useMutation(async (e) => {
    try {
      e.preventDefault()
      const response = await API.post('/auth/login', form)
      console.log(response)

      alert('Login Success')
      navigation.navigate("Todo")

    }catch(e){
      console.log(e)
      alert('Login Failed')
    }
  })
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
            value={form.email}
            onChangeText={(value) => handleOnChange('email', value)}
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
            value={form.password}
            onChangeText={(value) => handleOnChange('password', value)}
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
            onPress={(e) => handleLogin.mutate(e)}
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