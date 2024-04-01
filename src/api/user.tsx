import axios from "axios";
import { toast } from "react-toastify";
import { IUser } from "../interfaces/User";
import instance from "./config";

export const signUp = async (user: IUser) => {
    try {
        await axios.post(`http://localhost:3000/signup`, user);
    } catch (error: string | any) {
        toast.error(error.response.data);
        console.log("Error:", error.response.data);
    }
};

export const signIn = async (user: IUser) => {
    try {
        const { data } = await instance.post("/signin", user);
        localStorage.setItem("user", JSON.stringify(data));
        return data;
    } catch (error) {
        console.log(error);
    }
};

export const updateUser = async (user: IUser) => {
    try {
        const { data } = await instance.put(`/users/${user.id}`, user);
        return data;
    } catch (error) {
        console.log(error);
    }
};

export const getAllUser = async () => {
    try {
        const { data } = await instance.get(`/users`);
        return data;
    } catch (error) {
        console.log(error);
    }
};

export const getUserById = async (id: Number | String) => {
    try {
        const { data } = await instance.get(`/users/${id}`);
        return data;
    } catch (error) {
        console.log(error);
    }
};
