import axios from "axios";


const baseUrl="https://dummyjson.com/products";

const fetchDataFromApi = async(url)=>{
    const{data} =await axios.get(`${baseUrl}/${url}`);
    return data;
}

export default fetchDataFromApi;