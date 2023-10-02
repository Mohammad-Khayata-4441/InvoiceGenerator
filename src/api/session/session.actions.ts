import { useApi } from "@/shared/hooks/useApi"
import { SESSION_ENDPOINTS } from "./sessions.endponts"
import { type GetSessionDto } from './session.dto'
import { AxiosError } from "axios"
import Swal from "sweetalert2"
export class SessionActions {


    static async CreateSession() {
        return 0
    }

    static async GetSession(sessionId: string) {
        try {

            const res = await useApi<{ data: GetSessionDto }>('GET', SESSION_ENDPOINTS.BASE + `/${sessionId}`, { confirm: null, errorMessage: true, successMessage: false })
            return res?.data.data
        }
        catch (er) {
            console.log('GET SESSION ERROR', er)
            if (er instanceof AxiosError) {
                if (er.response?.status === 403) {
                    Swal.fire("Session Expired", er.response.data.error.message, 'error').then(() => {
                        history.back()
                    })
                }

                else {
                    Swal.fire("Session Expired", er.response?.data.error.message, 'error')
                }
            }
        }
    }


}