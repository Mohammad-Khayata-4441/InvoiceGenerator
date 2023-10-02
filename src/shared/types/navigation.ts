import { IconProps } from "@mui/material";
import { FC } from "react";
import { IconBaseProps } from 'react-icons'

export interface NavigationSubItem {
    text: string;
    path: string;
    module?:string,
    subModule?:string,
}
export interface NavigationRecord {
    text: string,
    path: string,
    icon: FC<IconBaseProps | IconProps>,
    collapsible?: NavigationSubItem[]; // Optional collapsible property
    module?:string,
    subModule?:string,
}

export interface NavigationSubtitile {
    title: string
}


// export interface NavigationRecord {
//     [key: string]:Array<{
//         text: string,
//         path: string,
//         icon: FC<IconBaseProps | IconProps>,
//     }>
// }

// export interface NavigationSubtitile {
//     title: string
//     type: NavItemType
// }
