import { useApi } from "@/shared/hooks/useApi";
import {MerchantsRequestDto, SingleMerchantRequestDto} from "./merchants.dto";

export class MerchantsActions {
    async getMerchants(payload: MerchantsRequestDto) {
        try {

            const res = await useApi('GET', `/api/merchantPortal/v1/merchant`,{ errorMessage: true }, payload, {baseURL: import.meta.env.REACT_MERCHANT_PORTAL_API_URL})
            if (res?.status === 200)
                return res?.data

        }
        catch (er) {
            console.log('No Record Found')
            throw (er)
        }
    }
    async getSinleMerchant(payload: SingleMerchantRequestDto) {
        try {

            const res = await useApi('POST', `/api/merchantPortal/v1/merchant/single`,{ errorMessage: true }, payload, {baseURL: import.meta.env.REACT_MERCHANT_PORTAL_API_URL})
            if (res?.status === 200)
                return res?.data

        }
        catch (er) {
            console.log('No Record Found')
            throw (er)
        }
    }
}