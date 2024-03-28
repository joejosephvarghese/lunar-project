import axios from "axios";
const BASE_URL="http://localhost:5001/api/v1/"

const instance = axios.create({
    baseURL:BASE_URL
})


export const handleAuthentication = async (credentials) => {
   const {data} =  await instance.post('/auth/login', credentials)
   return data;
}


export const handleSignup= async (credentials) => {
    const {data} =  await instance.post('/auth/signup', credentials)
    return data;
 }
 