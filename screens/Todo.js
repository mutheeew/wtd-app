import React from 'react';
import {Box, Button, Center, HStack, Image, Input, Select, Text, VStack} from "native-base";

export default function Todo(navigation){
    return (
        <Box display="flex" flex={1} alignItems="center">
            <Box display="flex" flexDirection="row" w={"85%"} mt={10} mb={5}>
                <Box flex={1} justifyContent="center" mx={2}>
                    <Text fontWeight="bold" fontSize={30}>
                        Hi Radif
                    </Text>
                    <Text fontSize={15} color="error.500">
                        200 Lists
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
                    <VStack>
                        <Center mt={10} w={"100%"} h={'24'} bg="info.100" rounded="md" shadow={3} />
                    </VStack>
                </Box>
            </Box>
        </Box>
    );
}
