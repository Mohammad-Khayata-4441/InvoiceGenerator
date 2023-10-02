import { Box, Button, Dialog, DialogActions, DialogContent, DialogProps, DialogTitle, IconButton, Typography } from '@mui/material'
import React, { FormEvent, PropsWithChildren } from 'react'
import { IoClose } from 'react-icons/io5'
interface FormProps {
    onSubmit?: (e: FormEvent) => void,
    submitBtnText?: string
    cancelBtnText?: string
    formActions?: React.ReactNode
}
export default function DialogForm({ children, onSubmit, submitBtnText = 'submit', cancelBtnText = 'cancel', formActions, ...dialogProps }: PropsWithChildren<DialogProps & FormProps>) {


    const closeDialog = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        dialogProps.onClose?.(e, 'escapeKeyDown')
    }

    return (



        <Dialog fullWidth  {...dialogProps}>
            <form onSubmit={onSubmit}>

                <Box display={'flex'} alignItems='center' justifyContent={'space-between'} px={2.5} pt={2.5}>
                    <Typography color={t => t.palette.secondary.main} variant='h6' fontWeight={'600'}>{dialogProps.title}</Typography>
                    <IconButton  onClick={(e) => closeDialog(e)}>
                        <IoClose className='text-3xl'></IoClose>
                    </IconButton>
                </Box>
                <DialogContent>
                    {children}
                </DialogContent>
                <DialogActions>

                    {
                        formActions ? formActions : <>
                            <Button variant='text' color='secondary' onClick={(e) => closeDialog(e)}>{cancelBtnText}</Button>
                            <Button type='submit'>{submitBtnText}</Button>
                        </>
                    }
                </DialogActions>
            </form>
        </Dialog>
    )
}
