import {Box, Button, Input, Text} from 'native-base'

export default function Category(){
    return(
        <Box
        display="flex"
        flex={1}
        bg="white"
        px={3}
        py={5}
        w={"100%"}
        alignItems="center"
        >
            <Box display="flex" w={"90%"} mt={5}>
                <Text fontWeight="bold" fontSize={30}>
                Add Category
                </Text>
                <Box display="flex" w={"100%"} mt={5}>
                <Input
                    w={"100%"}
                    bg="muted.200"
                    placeholder="Name"
                    py={3}
                    fontSize={15}
                    borderRadius="sm"
                    borderColor="muted.500"
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
                >
                    Add Category
                </Button>
                </Box>
                <Text fontWeight="bold" fontSize={30} mt={30}>
                List Category
                </Text>

                <Box
                mt={5}
                display="flex"
                flexDirection="row"
                flex={1}
                w={"100%"}
                flexWrap={"wrap"}
                >
                    <Box
                        p={3}
                        borderRadius={10}
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        mr={2}
                        my={2}
                    >
                        <Text color="white" fontWeight="bold" fontSize={20}>
                        </Text>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}