export interface CreatePaymentDto {
  amount: Amount;
  paymentMethod: PaymentMethod;
  paymentType: string;
  merchantTransactionId: string;
  description: string;
}

export interface PaymentMethod {
  card: Card;
  type: string;
}

export interface Card {
  pan: string;
  ccv: string;
  expiry: string;
  name: string;
  brand: string;
  is3DSEnabled: boolean;
}

export interface Amount {
  amountInCents: string;
  currency: string;
}