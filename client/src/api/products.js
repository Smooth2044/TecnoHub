import axios from "./axios";

export const getProductRequest = async () => axios.get("/product");