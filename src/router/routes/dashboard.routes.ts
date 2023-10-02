import Home from "@/app/home/home.page";
import { RouteRecord } from "@/shared/types/route";
import DashboardLayout from '@/layouts/dashboard/dashboard.layout'
 import FullScreenLayout from "@/layouts/fullscreen.layout";
import SignIn from "@/app/auth/login.page";
import PrintLayout from "@/layouts/print.layout";
import PublixTemplate from "@/app/templates/publix/publix.template";

export const DashboardRoutes: RouteRecord[] = [
    {
        layout: DashboardLayout,
        component: Home,
        path: '/',
        
    },
 
 
 
    {
        layout:FullScreenLayout,
        component:SignIn,
        path:'/login'
    },
 
 
  
    {
        layout: PrintLayout,
        component: PublixTemplate ,
        path: '/publix'
    },

]