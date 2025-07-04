import axios from "axios";

//client

const client = axios.create({
 //  baseURL: "http://localhost:8000",
 baseURL: "https://tamil-roja-backend-five.vercel.app",
//  baseURL: "https://www.tamilroja.in",

});

export default client;
