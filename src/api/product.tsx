import { IProduct } from "../interfaces/Product";
import instance from "./config";

export const getProducts = async () => {
    try {
        const { data } = await instance.get("/products");
        return data;
    } catch (error) {
        console.log(error);
    }
};
export const getProductById = async (id: Number | String) => {
    try {
        const { data } = await instance.get(`/products/${id}`);
        return data;
    } catch (error) {
        console.log(error);
    }
};
export const removeProductById = async (id: Number | String) => {
    try {
        const { data } = await instance.delete(`/products/${id}`);
        return data;
    } catch (error) {
        console.log(error);
    }
};
export const addProduct = async (product: IProduct) => {
    try {
        const { data } = await instance.post("/products", product);
        return data;
    } catch (error) {
        console.log(error);
    }
};
export const updateProduct = async (product: IProduct) => {
    try {
        const { data } = await instance.put(`/products/${product.id}`, product);
        return data;
    } catch (error) {
        console.log(error);
    }
};
