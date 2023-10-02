import PublixTemplate from '@/app/templates/publix/publix.template'
import React, { PropsWithChildren, useEffect } from 'react'

export default function PrintLayout(props:PropsWithChildren) {
  useEffect(()=>{
    window.print()
  }, [])
  return (
        <>
        {props.children}
        </>
    )
}
