import axiosClient from './AxiosClient'

export const foodApi = {
    loadFoods :()=>{
        const url = "/foods/getFoods"
        return axiosClient.get(url);
    }
}