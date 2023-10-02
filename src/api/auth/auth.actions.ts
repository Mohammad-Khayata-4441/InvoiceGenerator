import { useApi } from "@/shared/hooks/useApi";
import { LoginDto, LoginResponseDto } from "./auth.dto";

export class AuthActions {
    static async LoginMerchantGroup(dto: LoginDto) {
        try {
            const res = await useApi<LoginResponseDto>('POST', 'api/merchantPortal/v1/auth/group/authenticate', { errorMessage: true }, dto, { baseURL: import.meta.env.REACT_MERCHANT_PORTAL_API_URL });
            if (res?.status === 200)
                return res?.data
        }

        catch (er) {
            console.log(er)
            throw (er)
        }
    }
    static async LoginMerchant(dto: LoginDto) {
        try {

            const res = await useApi<LoginResponseDto>('POST', 'api/merchantPortal/v1/auth/merchant/authenticate', { errorMessage: true }, dto, { baseURL: import.meta.env.REACT_MERCHANT_PORTAL_API_URL });
            if (res?.status === 200)
                return res?.data
        }

        catch (er) {
            console.log(er)
            throw (er)
        }
    }
}