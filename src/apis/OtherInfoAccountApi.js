import axiosClient from './AxiosClient'

export const OtherInfoApi = {
    loadInfos :()=>{
        const url = "/otherinfor/getOtherInfo"
        return axiosClient.get(url);
    }
}