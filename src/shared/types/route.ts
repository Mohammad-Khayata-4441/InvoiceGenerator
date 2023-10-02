import { PropsWithChildren } from 'react'
export interface RouteRecord {
    path: string,
    component: React.FC,
    layout: React.FC<PropsWithChildren>,
    name?: string,
    props?: any,
}