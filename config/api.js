import axios from "axios"

export const API = axios.create({
            baseURL: "https://api.kontenbase.com/query/api/v1/fb32f9b7-44e6-4209-9d61-8b744db766a3"  
})
export function setAuthorization(token){
    if(!token){
        delete API.defaults.headers.common
        return
    }
    API.defaults.headers.common["Authorization"] = `Bearer ${token}`
}