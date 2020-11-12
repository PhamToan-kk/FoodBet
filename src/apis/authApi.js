import axiosClient from "./AxiosClient";


export const authApi = {
    login :(username,password)=>{
        const url = "/authen/login"
        return axiosClient.post(url,{
            username:username,
            password:password
        });
    },
    register :(username,password,phone)=>{
        const url = "/authen/register"
        return axiosClient.post(url,{
            username:username,
            password:password,
            phone:phone,
            role:'customer'
        });
    },

}