import { useApi } from "@/shared/hooks/useApi";
import {ReportsRequestDto} from "./reports.dto";

export class ReportsActions {
    async getCardTransactions(payload: ReportsRequestDto) {
        try {

            const res = await useApi('POST', `http://localhost:9093/api/merchantPortal/v1/reports/getcardtransactionSummary`,{ errorMessage: true }, payload, {baseURL: import.meta.env.REACT_MERCHANT_PORTAL_API_URL})
            if (res?.status === 200)
                return res?.data

        }
        catch (er) {
            console.log('No Record Found')
            throw (er)
        }
    }
    async getTransactionSummary(payload: ReportsRequestDto) {
        try {

            const res = await useApi('POST', `http://localhost:9093/api/merchantPortal/v1/reports/gettransactionsummary`,{ errorMessage: true }, payload, {baseURL: import.meta.env.REACT_MERCHANT_PORTAL_API_URL})
            if (res?.status === 200)
                return res?.data

        }
        catch (er) {
            console.log('No Record Found')
            throw (er)
        }
    }
    async getSettlementReport(payload: ReportsRequestDto) {
        try {

            const res = await useApi('POST', `http://localhost:9093/api/merchantPortal/v1/reports/ftszlsettlementreportlist`,{ errorMessage: true }, payload, {baseURL: import.meta.env.REACT_MERCHANT_PORTAL_API_URL})
            if (res?.status === 200)
                return res?.data

        }
        catch (er) {
            console.log('No Record Found')
            throw (er)
        }
    }
    async getPosTransactionReport(payload: ReportsRequestDto) {
        try {

            const res = await useApi('POST', `http://localhost:9093/api/merchantPortal/v1/reports/getPosTransactionReport`,{ errorMessage: true }, payload, {baseURL: import.meta.env.REACT_MERCHANT_PORTAL_API_URL})
            if (res?.status === 200)
                return res?.data

        }
        catch (er) {
            console.log('No Record Found')
            throw (er)
        }
    }
}