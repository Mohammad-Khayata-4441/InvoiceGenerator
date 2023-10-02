import { Product } from "@/shared/types/Product";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { shuffle } from "lodash";

interface TemplateState {
    userForm: {
        products: Product[],
    },
    fakeProducts : Product[],
    fakedProducts: boolean,
    fakeCount:number,
}

const initialState: TemplateState = {
    userForm: {
        products: []
    },
    fakedProducts:false,
    fakeCount:0,
    fakeProducts:[
        {
            title:'PHILIPS SONICARE PRO 4100',
            price:12.68,
            promotion:null,
            quantity:1
        },
        {
            title:'YOUTHEORY POWDER 6.7OZ',
            price:5.55,
            promotion:null,
            quantity:1
        },
        {
            title:'PBX SLIDER ORTB CH',
            price:4.99,
            promotion:null,
            quantity:1
        },
        {
            title:'WTF PRODUCT TEST',
            price:3.99,
            promotion:null,
            quantity:1
        },
        {
            title:'ANOTHER  FOR TEST 223Z',
            price:1.50,
            promotion:null,
            quantity:1
        },
        {
            title:'PBX TEST FOR A204',
            price:2.42,
            promotion:null,
            quantity:1
        },
    ]
}

const TemplateSlice = createSlice({
    name: 'template',
    initialState,
    reducers: {
        setUserFormProducts: (state, action: PayloadAction<Product[]>) => {
            state.userForm = { ...state.userForm, products: action.payload }
        },
        setFakeCount: (state, action: PayloadAction<number>) => {
            state.fakeCount = action.payload
        },
        setFakedProducts:(state,action:PayloadAction<boolean>)=>{
            console.log('set faked', action.payload)
            state.fakedProducts = action.payload
        }

    }
})


export default TemplateSlice.reducer;

export const { setUserFormProducts ,setFakeCount , setFakedProducts} = TemplateSlice.actions