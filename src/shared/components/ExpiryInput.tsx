import { TextField, TextFieldProps } from '@mui/material';
import React, { useId } from 'react';

interface ExpiryInputProps {
    className?: string;
    delimiter?: string;
    placeholder?: string;
}

const ExpiryInput: React.FC<ExpiryInputProps & TextFieldProps> = React.forwardRef(({
    className,
    delimiter = '/',
    ...rest

}, ref) => {
    const maxLength = delimiter.length + 4;
    const id = useId();

    const correctInput = (event: React.KeyboardEvent<HTMLInputElement>) => {
        const target = event.target as HTMLInputElement;
        const value = target.value;
        const key = event.key;
        let typeKey: string;
        const monthMin = '01';
        const monthMax = '12';
        const yearMin = new Date().getFullYear() - 2000;
        const yearMax = yearMin + 25;




        if (
            /(\d|ArrowLeft|ArrowRight|Backspace|Delete|Tab)/.test(key)
        ) {
            if (/(\d)/.test(key)) {
                typeKey = 'number';
            } else {
                typeKey = 'specSymbol';
            }

            if (value.length === 0 && key > '1') {
                target.value = `0${key}${delimiter}`;
                event.preventDefault();
            }

            if (value.length === 1 && value[0] !== '0' && key > '2') {
                target.value = `${monthMax}${delimiter}`;
                event.preventDefault();
                return;
            }

            if (value.length === 1 && typeKey !== 'specSymbol') {
                target.value = `${target.value}${key}${delimiter}`;
                event.preventDefault();
            }

            if (value.length === 2 && typeKey !== 'specSymbol') {
                target.value = `${target.value}${delimiter}${key}`;
                event.preventDefault();
                return;
            }

            if (value === '0' && key === '0') {
                target.value = `${monthMin}${delimiter}`;
                event.preventDefault();
                return;
            }

            if (target.value.length + 1 === maxLength) {
                const arr = target.value.split(delimiter);

                if (arr[0].length === 2 && parseInt(arr[1]) + parseInt(key) < yearMin) {
                    target.value = `${arr[0]}${delimiter}${yearMin}`;
                    event.preventDefault();
                    return;
                }

                if (
                    arr[0].length === 2 &&
                    parseInt(arr[1]) + parseInt(key) > yearMax
                ) {
                    target.value = `${arr[0]}${delimiter}${yearMax}`;
                    event.preventDefault();
                    return;
                }
            }
        } else {
            event.preventDefault();
            return;
        }
    };

    return (
        <TextField
            ref={ref}
            {...rest}
            id={id}
            onKeyDown={correctInput}
            className={className}
            inputProps={
                {
                    maxLength: maxLength
                }
            }
            placeholder={'MM/YY'}
            type="text"
        />
    )
})

export default ExpiryInput