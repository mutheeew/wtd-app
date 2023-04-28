import {Box, Text, Input, Button, TextArea} from 'native-base'
export default function List(){
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
                Add List
                </Text>
                <Box display="flex" w={"100%"} mt={5}>
                <Input
                    w={"100%"}
                    bg="muted.200"
                    placeholder="Name"
                    py={3}
                    my={2}
                    fontSize={15}
                    borderRadius="sm"
                    borderColor="muted.500"
                />
                <Input
                    w={"100%"}
                    bg="muted.200"
                    placeholder="Category"
                    py={3}
                    my={2}
                    fontSize={15}
                    borderRadius="sm"
                    borderColor="muted.500"
                />
                <Input
                    w={"100%"}
                    bg="muted.200"
                    placeholder="Choose Date"
                    py={3}
                    my={2}
                    fontSize={15}
                    borderRadius="sm"
                    borderColor="muted.500"
                />
                <TextArea
                    w={"100%"}
                    bg="muted.200"
                    placeholder="Description"
                    py={3}
                    my={2}
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
                    Add List
                </Button>
                </Box>
            </Box>
        </Box>
    );
}