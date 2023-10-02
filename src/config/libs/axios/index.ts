import axios, { AxiosError, type AxiosInterceptorManager, type AxiosRequestConfig, type AxiosResponse, type InternalAxiosRequestConfig } from 'axios'
import { API_URL } from '@/api/api.config'
import useAuth from '@/shared/hooks/useAuth'
// import { useAppStore } from '@/app/app.store'
// import { useAuth } from '@/shared/composables/useAuth'
// import router from '@/router'




const axiosInstance = axios.create({
    baseURL: API_URL,
})

axiosInstance.interceptors.response.use((response: AxiosResponse) => {
    // const appStroe = useAppStore();
    // appStroe.$patch({
    //     isLoading: false
    // })
    return response
}, (er) => {
    if (er instanceof AxiosError) {
        if (er.response?.status && +er.response?.status === 401) {
            // router.push('/login')
        }

        throw er
    }
})



axiosInstance.interceptors.request.use((config: InternalAxiosRequestConfig) => {
    // const {token} = useAuth()
    const token = localStorage.getItem('access_token')
    // const appStroe = useAppStore();
    // const { token, tokenType } = useAuth();
    // appStroe.$patch({
    //     isLoading: true
    // })

    if(token)
    config.headers.Authorization = "Bearer "+token

    return config
})

export default axiosInstance