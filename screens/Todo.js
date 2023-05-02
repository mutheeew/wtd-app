import React from 'react';
import {Box, Button, HStack, Image, Input, Select, Text, ScrollView, Pressable} from "native-base";
import { useQuery } from 'react-query';
import { API } from '../config/api'

export default function Todo({navigation}){
    let { data: list, refetch} = useQuery(
        "listCaches",
        async () => {
          let listResponse = await API.get("/List");
          refetch()
          return listResponse.data;
        }
      );


    const todoColor = [
        {
          index: 0,
          bgColor: "primary.300",
        },
        {
          index: 1,
          bgColor: "secondary.300",
        },
        {
          index: 2,
          bgColor: "tertiary.300",
        },
        {
          index: 3,
          bgColor: "danger.300",
        },
        {
          index: 4,
          bgColor: "warning.300",
        },
    ];
// console.log(list.length)

    return (
        <Box display="flex" flex={1} alignItems="center">
            <Box display="flex" flexDirection="row" w={"85%"} mt={10} mb={5}>
                <Box flex={1} justifyContent="center" mx={2}>
                    <Text fontWeight="bold" fontSize={30}>
                        Hi Mute
                    </Text>
                    <Text fontSize={15} color="error.500">
                        {list.length} Lists
                    </Text>
                </Box>
                <Box flex={1} justifyContent="center" alignItems="flex-end" mx={2}>
                    <Button variant="ghost">
                        <Image
                            source={require('../assets/profile.png')}
                            w={50}
                            h={50}
                        />
                    </Button>
                </Box>
            </Box>
            <Box display="flex" w={"85%"} flexDirection="column">
                <Box display="flex" flexDirection="row" w={"100%"}>
                    <Input w={"100%"} bg="muted.200" placeholder="Search List..." py={3} fontSize={15} borderRadius="sm" borderColor="muted.500"
                    />
                </Box>
                <Box display="flex">
                    <HStack space={3}>
                        <Input bg="muted.200" placeholder="Choose Date" h={50} mt={2} py={3} flex={1} fontSize={15} borderRadius="sm" borderColor="muted.500"/>
                        <Select placeholder="Category" h={50} mt={2} py={3} flex={1} bg="muted.200" fontSize={15} borderRadius="sm" borderColor="muted.500"></Select>
                        <Select placeholder="Status" h={50} bg="muted.200" py={3} mt={2} flex={1} fontSize={15} borderRadius="sm" borderColor="muted.500"></Select>
                    </HStack>
                </Box>
                <Box>
                {/* <Pressable onPress={() =>  refetch()}><Text>refresh</Text></Pressable> */}
                    <ScrollView h="70%">
                        {list?.map((item, i) => {
                            return (
                                <Box>
                                <Box p={3} borderRadius={10} mr={2} mt={5} h={24} 
                                    bg={
                                        todoColor?.find(
                                            (item) =>
                                            item?.index === i % (todoColor.length)
                                        ).bgColor
                                    }
                                >
                                    <Box flexDirection="row" alignItems="center" justifyContent="space-between" >
                                        <Text bold color="black" fontSize={18} onPress={() => navigation.navigate("Detail")}>
                                            {item.name}
                                        </Text>
                                        <Text>Category</Text>
                                    </Box>
                                    <Text color="grey" fontSize={14} >
                                        {item.description}
                                    </Text>
                                    <Text color="grey" fontSize={12} pt={2} >
                                        {item.date}
                                    </Text>
                                </Box>
                                </Box>
                            );
                        })}
                    </ScrollView>
                </Box>
            </Box>
        </Box>
    );
}
