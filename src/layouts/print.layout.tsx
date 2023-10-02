import PublixTemplate from '@/app/templates/publix/publix.template'
import React, { PropsWithChildren } from 'react'

export default function PrintLayout(props:PropsWithChildren) {
  return (
        <>
        {props.children}
        </>
    )
}
