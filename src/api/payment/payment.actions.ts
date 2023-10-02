import { useApi } from "@/shared/hooks/useApi";
import { CreatePaymentDto } from "./payment.dto";

export class PaymentAcions {
    static async CreatePayment(sessionId: string, payload: CreatePaymentDto) {
        try {

            const res = await useApi('POST', `${sessionId}/payments`, { confirm: { title: 'Create Payment', text: `Create payment with value ${payload.amount.amountInCents} ${payload.amount.currency} , using ${payload.paymentMethod.card.brand}` }, errorMessage: false, successMessage: 'Payment completed successfully', }, payload)
            if (res?.status === 200)
                return res?.data

        }
        catch (er) {
            console.log('error catched')
            throw (er)
        }
    }
}