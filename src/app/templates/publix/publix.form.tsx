import { Product, ProductItem } from '@/shared/types/Product'
import { AppDispatch, RootState } from '@/store'
import { Add, Delete } from '@mui/icons-material'
import { Box, Button, IconButton, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { FaRandom } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { setFakeCount, setFakedProducts } from '../template.reducer'

interface Props {
  onProductsChange: (prods: Product[]) => void
}

export default function PublixForm(props: Props) {
  const initialProduct = { ...new ProductItem() }
  const [products, setProducts] = useState<Product[]>([{ ...initialProduct }])

  const handleProductChange = (index: number, field: string, value: any) => {
    setProducts((prevProducts) => {
      const newProducts = [...prevProducts]
      newProducts[index] = { ...newProducts[index], [field]: value }
      return newProducts
    })
  }

  const handleDeleteProduct = (index: number) => {
    setProducts((prevProducts) => {
      const newProducts = [...prevProducts]
      newProducts.splice(index, 1)
      return newProducts
    })
  }



  useEffect(() => {
    props.onProductsChange(products)
  }, [JSON.stringify(products)])


  const fakeCount = useSelector<RootState, number>((s) => s.template.fakeCount)
  const dispatch = useDispatch<AppDispatch>()
  return (
    <Box sx={{ p: 2 }}>
      <Typography variant='h5'>Enter Invoice Information</Typography>

      <form className='mt-2'>
        <Box display='flex' alignItems='center' justifyContent='space-between'>
          <Typography variant='h6'>Products</Typography>
          <Box className='space-x-4'>
            <TextField sx={{ width: 100 }} value={fakeCount} onChange={(e) => dispatch(setFakeCount(Number(e.target.value)))} type='number' inputProps={{ max: 5 }} label='Count'></TextField>
            <Button color='primary' size='small' onClick={() => !!fakeCount && dispatch(setFakedProducts(true))} endIcon={<FaRandom />} >Random</Button>
            <Button color='error' variant='outlined' size='small'  onClick={() => dispatch(setFakedProducts(false))} endIcon={<FaRandom />} >Clear Random</Button>
            <IconButton color='primary' onClick={() => setProducts((prevProducts) => ([...prevProducts, { ...initialProduct }]))}><Add /></IconButton>
          </Box>
        </Box>
        <Box className='space-y-4 mt-8'>
          {
            products.map((p, index) => (
              <div key={index} className="grid grid-cols-12 gap-4">
                <div className="col-span-5">
                  <TextField
                    value={p.title}
                    label='Title'
                    fullWidth
                    onChange={(e) => handleProductChange(index, 'title', e.target.value)}
                  />
                </div>
                <div className="col-span-2">
                  <TextField
                    value={p.price}
                    label='Price'
                    onChange={(e) => handleProductChange(index, 'price', e.target.value)}
                  />
                </div>
                <div className="col-span-2">
                  <TextField
                    value={p.promotion}
                    label='Promotion'
                    onChange={(e) => handleProductChange(index, 'promotion', e.target.value)}
                  />
                </div>
                <div className="col-span-2">
                  <TextField
                    value={p.quantity}
                    label='Quantity'
                    onChange={(e) => handleProductChange(index, 'quantity', e.target.value)}
                  />
                </div>
                <div className="col-span-1">
                  <IconButton color='error' onClick={() => handleDeleteProduct(index)}  ><Delete></Delete></IconButton>
                </div>
              </div>
            ))
          }
        </Box>
      </form>
    </Box>
  )
}