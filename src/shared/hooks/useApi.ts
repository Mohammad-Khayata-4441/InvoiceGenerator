import axios from "@/config/libs/axios";
import { AxiosError, type AxiosRequestConfig, type AxiosResponse, type Method } from "axios";
import type { SweetAlertOptions, SweetAlertResult } from "sweetalert2";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import useAuth from "@/shared/hooks/useAuth";

interface UseApiFeedback {
    successMessage?: string | boolean,
    errorMessage?: string | boolean,
    confirm?: SweetAlertOptions | null
}

const defaultFeedBack: UseApiFeedback = {
    confirm: null,
    errorMessage: true,
    successMessage: false,
}

export const useApi = async <RST, RQT = any>(type: Method, url: string, feedback: UseApiFeedback = defaultFeedBack, payload?: RQT, axiosConfig?: AxiosRequestConfig): Promise<AxiosResponse<RST> | undefined> => {

    feedback = {
        ...defaultFeedBack,
        ...feedback,
    }
    // const toast = useToast()
    let response: AxiosResponse<RST>;

    let result: Partial<SweetAlertResult<boolean>> = {
        isConfirmed: true,
    };

    if (feedback.confirm) {
        result = await Swal.fire({
            icon: 'warning',
            confirmButtonText: "Yes",
            confirmButtonColor: "red",
            cancelButtonText: "Cancel",
            showCancelButton: true,
            ...feedback.confirm
        })
    }

    try {
        if (result.isConfirmed) {
            switch (type) {
                case "GET" || "get":
                    response = await axios.get<RST>(url, axiosConfig)
                    break;
                case "DELETE" || "delete":
                    response = await axios.delete(url, axiosConfig)
                    break
                case "POST" || "post":
                    response = await axios.post<RST>(url, payload, axiosConfig)
                    break
                case "PUT" || "put":
                    response = await axios.put(url, payload, axiosConfig)
                    break
                default:
                    response = await axios.get<RST>(url, axiosConfig)
            }

            if (feedback.successMessage) {
                if (typeof feedback.successMessage == 'boolean') {
                    toast.success(defaultFeedBack.successMessage as string)
                }
                else if (typeof feedback.successMessage == 'string') {
                    toast.success(feedback.successMessage as string)
                }
            }

            return response;

        }
        

    }


    catch (er) {


        if (feedback.errorMessage) {

            if (typeof feedback.errorMessage === 'string') {

                toast.error(feedback.errorMessage)
            }

            else if (typeof feedback.errorMessage === 'boolean') {

                if (er instanceof AxiosError) {
                    if (er.response?.data && er.response.data.message) {
                        toast.error(`${er.response.data.message ?? JSON.stringify(er.response?.data)}`)
                    }
                    else if (er.response?.data && er.response.data.errorMessage) {
                        toast.error(`${er.response.data.errorMessage ??  JSON.stringify(er.response?.data)}`)
                    }
                }

            }
            else throw er;
        }

        console.groupEnd()
        throw(er)
    }






}