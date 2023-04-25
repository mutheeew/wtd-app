import React, {useState} from 'react'
import {Image} from 'react-native';
import {Box, Text, Input, Button} from "native-base";
import { API } from '../config/api'
import { useMutation } from 'react-query'

export default function Register({navigation}) {
  const [form, setForm] = useState({
    firstName: '',
    email: '',
    password: '',
  })

  const handleOnChange = (name, value) =>{
    setForm({
      ...form,
      [name]:value,
    })
  }

  const handleRegister = useMutation(async (e) => {
    try {
      e.preventDefault()
      const response = await API.post('/auth/register', form)
      console.log(response)

      alert('Registration Success')
      navigation.navigate("Login")

    }catch(e){
      console.log(e)
      alert('Registration Failed')
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
          Register
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
            name="email"
            value={form?.email}
            onChangeText={(value) => handleOnChange('email', value)}
          />
          <Input
            w={"100%"}
            bg="muted.200"
            placeholder="Name"
            py={3}
            mt={5}
            fontSize={15}
            borderRadius="sm"
            borderColor="muted.500"
            name="firstName"
            value={form?.firstName}
            onChangeText={(value) => handleOnChange('firstName', value)}
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
            name="password"
            value={form?.password}
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
            onPress={(e) => handleRegister.mutate(e)}
          >
            Register
          </Button>
          <Text mt={3}>
            Joined us before? {" "}
            <Text
              color="danger.500"
              fontWeight="bold"
              mx={2}
              onPress={() => navigation.navigate("Login")}
            >
              Login
            </Text>
          </Text>
        </Box>
      </Box>
    </Box>
  );
}