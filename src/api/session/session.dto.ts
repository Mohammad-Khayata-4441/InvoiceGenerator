export interface GetSessionDto {
    id: string;
    sessionInfo: SessionInfo;
}

export interface SessionInfo {
    amount: Amount;
    merchant: Merchant;
    paymentType: string;
    merchantTransactionId: string;
    description: string;
    status: string;
}

export interface Merchant {
    name: string;
}

export interface Amount {
    amountInCents: string;
    currency: string;
}