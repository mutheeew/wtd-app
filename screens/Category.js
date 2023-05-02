import {Box, Button, Input, Text} from 'native-base'
import {useState} from 'react'
import { useMutation, useQuery } from 'react-query'
import {API} from '../config/api'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function Category(navigation){
    const [getCategory, setCategory] = useState({
        name:"",
    })

    let { data : category, refetch} = useQuery("categoryCaches", async () => {
        let categoryResponse = await API.get("/Category")
        return categoryResponse.data;
    })

    const getToken = async () => {
        const token = await AsyncStorage.getItem("token")
        console.log(token)
        return token;
    }

    const handleOnChange = (name, value) =>{
        setCategory({
          ...getCategory,
          [name]:value,
        })
    }

    const categoryColor = [
        {
          index: 0,
          bgColor: "primary.400",
        },
        {
          index: 1,
          bgColor: "secondary.400",
        },
        {
          index: 2,
          bgColor: "tertiary.400",
        },
        {
          index: 3,
          bgColor: "danger.400",
        },
        {
          index: 4,
          bgColor: "warning.400",
        },
    ];

    console.log(getCategory)
    
    const handleCategory = useMutation(async (e) => {
        try {
        const response = await API.post("/Category", getCategory)
        console.log(response)
    
        alert('Add Category Success')
        refetch()
        }catch(e){
        console.log(e)
        alert('Add category Failed')
        }
    })


    return(
        <Box display="flex" flex={1} bg="white" px={3} py={5} w={"100%"} alignItems="center">
            <Box display="flex" w={"90%"} mt={5}>
                <Text fontWeight="bold" fontSize={30}>
                    Add Category
                </Text>
                <Box display="flex" w={"100%"} mt={5}>
                    <Input w={"100%"} bg="muted.200" placeholder="Name" py={3} fontSize={15} borderRadius="sm" borderColor="muted.500" value={getCategory.name} onChangeText={(value) => handleOnChange('name', value)}/>
                    <Button w={"100%"} mt={5} bg="error.500" _hover={{ backgroundColor: "error.600" }} py={3} _text={{ fontSize: "md", fontWeight: "bold",}} onPress={(e) => handleCategory.mutate(e)}>
                        Add Category
                    </Button>
                </Box>
                <Text fontWeight="bold" fontSize={30} mt={30}>
                    List Category
                </Text>
                <Box mt={5} display="flex" flexDirection="row" flex={1} w={"100%"} flexWrap={"wrap"}>
                    {category?.map((item, i) => {
                        return (
                            <Box p={3} borderRadius={10} display="flex" alignItems="center" justifyContent="center" mr={2} my={2} h={12} 
                                bg={
                                    categoryColor?.find(
                                        (item) =>
                                        item?.index === i % (categoryColor.length)
                                    ).bgColor
                                }
                                key={i}
                            >
                                <Text color="white" fontSize={20}>
                                    {item.name}
                                </Text>
                            </Box>
                        );
                    })}
                </Box>
            </Box>
        </Box>
    )
}