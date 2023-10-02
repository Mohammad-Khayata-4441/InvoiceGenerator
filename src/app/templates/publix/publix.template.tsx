
import React, { useMemo } from 'react'
import { PUBLIX_SETTINGS } from '@/data/templates/Publix'
import '@/assets/_print.scss'
import { Product } from '@/shared/types/Product'
import { useSelector } from 'react-redux'
import { RootState } from '@/store'
import { shuffle } from 'lodash'



export default function PublixTemplate() {
    const products = useSelector<RootState, Product[]>(s => s.template.userForm.products)
    const fakeProducts = useSelector<RootState, Product[]>(s => s.template.fakeProducts)
    const fakeCount = useSelector<RootState, number>(s => s.template.fakeCount)
    const faked = useSelector<RootState, boolean>(s => s.template.fakedProducts)



    const productsResult = useMemo(() => {
        if (faked) {


            // Randomly select fakeCount items from fakeProducts
            const randomFakeProducts = shuffle(fakeProducts).slice(0, fakeCount > fakeProducts.length ? fakeProducts.length : fakeCount);

            // Merge them with userForm.products and shuffle the result
            return shuffle([...products, ...randomFakeProducts]);

        }
        return products
    }, [products, fakeProducts, fakeCount, faked])


    const { ml, mr, mb, mt, width, fonts, lineHeight } = PUBLIX_SETTINGS
    return (
        // minHeight: height 
        <div id='template-container-publix' style={{ width: width, paddingLeft: ml, paddingRight: mr, paddingTop: mt, paddingBottom: mb, }}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>

                <img style={{ height: '65px', width: '85%', margin: 'auto', objectFit: "cover", marginTop: '25px' }} src='images/templates/publix/logo.png'></img>
            </div>

            <p style={{ lineHeight, color: 'black', fontSize: fonts.heading.size, textAlign: 'center', fontFamily: fonts.heading.family }}>Hallandale Beach</p>
            <p style={{ lineHeight, color: 'black', fontSize: fonts.heading.size, textAlign: 'center', fontFamily: fonts.heading.family }}>1400 E .Hallandale Bch Blvd</p>
            <p style={{ lineHeight, color: 'black', fontSize: fonts.heading.size, textAlign: 'center', fontFamily: fonts.heading.family }}>Hallandale Beach, FL 33009</p>
            <p style={{ lineHeight, color: 'black', fontSize: fonts.heading.size, textAlign: 'center', fontFamily: fonts.heading.family }}>Store Manager: Jose Gotopo</p>
            <p style={{ lineHeight, color: 'black', fontSize: fonts.heading.size, textAlign: 'center', fontFamily: fonts.heading.family }}>954-454-6440</p>

            <div >
                <div className='list-none p-0 m-0'>

                    <>
                        {
                            productsResult.map((p, i) =>




                                <div key={i}>
                                    <div className='flex justify-between'>
                                        <p style={{ lineHeight, color: 'black', fontFamily: fonts.heading.family, fontSize: fonts.heading.size, whiteSpace: 'pre' }}>  {p.title}</p>
                                        {
                                            p.quantity == 1 &&
                                            <p style={{ lineHeight, color: 'black', fontFamily: fonts.heading.family, fontSize: fonts.heading.size, whiteSpace: 'pre' }}  >{p.price} t F</p>
                                        }

                                    </div>

                                    {
                                        p.quantity > 1 &&
                                        <div className='flex justify-between'>
                                            <p style={{ lineHeight, color: 'black', fontFamily: fonts.heading.family, fontSize: fonts.heading.size, whiteSpace: 'pre' }}>  {p.quantity} @ 1 FOR {p.price} </p>
                                            <p style={{ lineHeight, color: 'black', fontFamily: fonts.heading.family, fontSize: fonts.heading.size, fontWeight: 'bold' }}  >{Number(p.price) * Number(p.quantity)} t F</p>
                                        </div>
                                    }

                                    {
                                        p.promotion &&
                                        <div className='flex justify-between'>
                                            <p style={{ lineHeight, color: 'black', fontFamily: fonts.heading.family, fontSize: fonts.heading.size, whiteSpace: 'pre', fontWeight: 'bold' }}>     Promotion</p>
                                            <p style={{ lineHeight, color: 'black', fontFamily: fonts.heading.family, fontSize: fonts.heading.size, fontWeight: 'bold' }}  >-{p.promotion} t F </p>
                                        </div>
                                    }

                                </div>






                            )
                        }
                    </>


                </div>

                <p style={{ lineHeight, whiteSpace: 'pre' }} > </p>



                <div className='list-none  m-0'>

                    <div className='flex justify-between'>
                        <p style={{ lineHeight, color: 'black', fontFamily: fonts.heading.family, fontSize: fonts.heading.size, whiteSpace: 'pre' }}>    Order Total</p>
                        <p style={{ lineHeight, color: 'black', fontFamily: fonts.heading.family, fontSize: fonts.heading.size, whiteSpace: 'pre' }} >54.18    </p>
                    </div>


                    <div className='flex justify-between'>
                        <p style={{ lineHeight, color: 'black', fontFamily: fonts.heading.family, fontSize: fonts.heading.size, whiteSpace: 'pre' }}>      Sales Tax</p>
                        <p style={{ lineHeight, color: 'black', fontFamily: fonts.heading.family, fontSize: fonts.heading.size, whiteSpace: 'pre', }}  >3.70    </p>
                    </div>

                    <div className='flex justify-between'>
                        <p style={{ lineHeight, color: 'black', fontFamily: fonts.heading.family, fontSize: fonts.heading.size, whiteSpace: 'pre' }}>    Grand Total</p>
                        <p style={{ lineHeight, color: 'black', fontFamily: fonts.heading.family, fontSize: fonts.heading.size, whiteSpace: 'pre' }} >54.18    </p>
                    </div>


                    <div className='flex justify-between'>
                        <p style={{ lineHeight, color: 'black', fontFamily: fonts.heading.family, fontSize: fonts.heading.size, whiteSpace: 'pre', }}>  Cash</p>
                        <p style={{ lineHeight, color: 'black', fontFamily: fonts.heading.family, fontSize: fonts.heading.size, whiteSpace: 'pre' }}  >9.09 t F</p>
                    </div>


                    <div className='flex justify-between'>
                        <p style={{ lineHeight, color: 'black', fontFamily: fonts.heading.family, fontSize: fonts.heading.size, whiteSpace: 'pre', }}>  Change</p>
                        <p style={{ lineHeight, color: 'black', fontFamily: fonts.heading.family, fontSize: fonts.heading.size }}  >9.09 t F</p>
                    </div>

                </div>
                <p style={{ lineHeight: 0.8, color: 'black', fontFamily: fonts.heading.family, fontSize: fonts.heading.size, whiteSpace: 'pre', borderBottom: '2px solid black', width: 'max-content', marginTop: '2px', marginBottom: '4px', }} >Savings Summary</p>

                <div className='list-none p-0 m-0'>

                    <div className='flex justify-between'>
                        <p style={{ lineHeight, color: 'black', fontFamily: fonts.heading.family, fontSize: fonts.heading.size, whiteSpace: 'pre', }}>  Special Price Savings         </p>
                        <p style={{ lineHeight, color: 'black', fontFamily: fonts.heading.family, fontSize: fonts.heading.size, whiteSpace: 'pre' }} >21.18</p>
                    </div>


                </div>




                <p style={{ lineHeight, color: 'black', fontFamily: fonts.heading.family, fontSize: fonts.heading.size }} >**************************************</p>
                <p style={{ lineHeight, color: 'black', fontFamily: fonts.heading.family, fontWeight: '700', fontSize: fonts.heading.size, whiteSpace: 'pre' }}>*       Your Savings at Publix       *</p>
                <p style={{ lineHeight, color: 'black', fontFamily: fonts.heading.family, fontWeight: '700', fontSize: fonts.heading.size, whiteSpace: 'pre' }}>*                 6.19               *</p>
                <p style={{ lineHeight, color: 'black', fontFamily: fonts.heading.family, fontWeight: '700', fontSize: fonts.heading.size }} >**************************************</p>
                <p style={{ lineHeight, whiteSpace: 'pre' }} > </p>
                <p style={{ lineHeight, color: 'black', fontFamily: fonts.heading.family, fontSize: fonts.heading.size, whiteSpace: 'pre' }} >Your cashier was Amber S.</p>
                <p style={{ lineHeight, whiteSpace: 'pre' }} > </p>
                <p style={{ lineHeight, color: 'black', fontFamily: fonts.heading.family, fontSize: fonts.heading.size, whiteSpace: 'pre' }} >07/03/2022 20:56 S1376  R108 4754 C0109</p>
                <p style={{ lineHeight, whiteSpace: 'pre' }} > </p>




                <p style={{ lineHeight, color: 'black', fontFamily: fonts.heading.family, fontSize: fonts.heading.size, whiteSpace: 'pre', textAlign: 'center' }} >Join the Publix family!</p>
                <p style={{ lineHeight, color: 'black', fontFamily: fonts.heading.family, fontSize: fonts.heading.size, whiteSpace: 'pre', textAlign: 'center' }} >Apply today at apply.publix.jobs.</p>
                <p style={{ lineHeight, color: 'black', fontFamily: fonts.heading.family, fontSize: fonts.heading.size, whiteSpace: 'pre', textAlign: 'center' }} >We're an equal opportunity employer.</p>
                <p style={{ lineHeight, whiteSpace: 'pre' }} > </p>
                <p style={{ lineHeight, color: 'black', fontFamily: fonts.heading.family, fontSize: fonts.heading.size, whiteSpace: 'pre', textAlign: 'center' }} >Publix Super Markets, Inc.</p>





            </div>

        </div>

    )
}
