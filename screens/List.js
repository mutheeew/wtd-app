import {Box, Text, Input, Button, TextArea, Select, Item, Option} from 'native-base'
import { useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { API } from '../config/api'
export default function List(){
    const [getList, setList] = useState({
        name:"",
        categoryId:"",
        date:"",
        description:"",
    })

    const handleOnChange = (name, value) => {
        setList({
            ...getList,
            [name]:value,
        })
    }

    const [getCategoryId, setCategoryId] = useState([])
    let {data: category} = useQuery("categoryCaches", async ()=> {
        const categoryResponse = await API.get("/Category")
        return categoryResponse.data;
    })

    const handleList = useMutation(async (e) => {
        e.preventDefault()
        try{
            const response = await API.post("/List", getList)
            // console.log(response)
        } catch (error) {
            console.log(error)
            alert("Gagal menambahkan list")
        }

    })
    
    return(
        <Box display="flex" flex={1} bg="white" px={3} py={5} w={"100%"} alignItems="center">
            <Box display="flex" w={"90%"} mt={5}>
                <Text fontWeight="bold" fontSize={30}>
                    Add List
                </Text>
                <Box display="flex" w={"100%"} mt={5}>
                <Input name="name" value={getList.name} onChangeText={(value) => handleOnChange('name', value)} hw={"100%"} bg="muted.200" placeholder="Name" py={3} my={2} fontSize={15} borderRadius="sm" borderColor="muted.500"/>
                <Select name="categoryId"  selectedValue={getList.categoryId} onValueChange={(value) => handleOnChange('categoryId', value)} w={"100%"} bg="muted.200" placeholder="Category" py={3} my={2} fontSize={15} borderRadius="sm" borderColor="muted.500">
                    <Select.Item label='Category' value='' />
                    {category?.map((item) => (
                        <Select.Item label={item?.name} value={item?._id} />
                    ))}
                </Select>
                <Input name="date" value={getList.date} onChangeText={(value) => handleOnChange('date', value)} w={"100%"} bg="muted.200" placeholder="Choose Date" py={3} my={2} fontSize={15} borderRadius="sm" borderColor="muted.500"/>
                <TextArea name="description" value={getList.description} onChangeText={(value) => handleOnChange('description', value)} w={"100%"} bg="muted.200" placeholder="Description" py={3} my={2} fontSize={15} borderRadius="sm" borderColor="muted.500"/>
                <Button onPress={(e) => handleList.mutate(e)} w={"100%"} mt={5} bg="error.500" _hover={{ backgroundColor: "error.600" }} py={3} _text={{ fontSize: "md", fontWeight: "bold",}}>
                    Add List
                </Button>
                </Box>
            </Box>
        </Box>
    );
}