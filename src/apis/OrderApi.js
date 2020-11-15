import axiosClient from './AxiosClient'

export const orderApi = {
    addOrder:(order)=>{
        const url = "/orders/addOrder"
        return axiosClient.post(url,order);
    },
    getOrderNotActive:(params)=>{
       
        const url = "/orders/getOrderNotActive"
        return axiosClient.get(url,{params});

    },
    getOrderActivedNotFinish:(params)=>{
        const url = "/orders/getOrderActivedNotFinish"
        return axiosClient.get(url,{params});
    },

    finishOrder:(orderName)=>{
        const url = "/orders/finishOrder"
        return axiosClient.post(url,{
            orderName:orderName
        });
    }
} 