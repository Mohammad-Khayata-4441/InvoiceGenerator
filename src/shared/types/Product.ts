export interface Product {
    title: string;
    promotion: null | number
    quantity: number
    price: number
}

export class ProductItem implements Product {
    title = ''
    promotion = null
    quantity = 1
    price =0
}