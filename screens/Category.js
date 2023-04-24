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
                    // value={dataCategory.name}
                    // onChangeText={(value) => handleChangeText("name", value)}
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
                {/* {category?.map((item, i) => { */}
                    {/* return ( */}
                    <Box
                        p={3}
                        borderRadius={10}
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        // key={i}
                        mr={2}
                        my={2}
                        // bg={
                        // // categoryColor?.find(
                        // //     (item) =>
                        // //     item.index === i % (Object.keys(categoryColor).length - 1)
                        // // ).bgColor
                        // }
                    >
                        <Text color="white" fontWeight="bold" fontSize={20}>
                        {/* {item.name} */}
                        </Text>
                    </Box>
                    {/* ); */}
                </Box>
            </Box>
        </Box>
    )
}