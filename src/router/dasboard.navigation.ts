
import {   HiOutlineHome, HiUser,  } from 'react-icons/hi2'
import { NavigationRecord } from '@/shared/types/navigation'
import { AdminPanelSettings, CreditCard, Money, Settings } from '@mui/icons-material';
import { FaQuestion } from 'react-icons/fa';
import { BiBuilding, BiMoney } from 'react-icons/bi';
import { BsBuilding } from 'react-icons/bs';
export const DashboardNavigationMain: NavigationRecord [] = [
    {
        text: "Dashboard",
        path: "/",
        icon: HiOutlineHome,
        module: 'Report',
     },
  

    // {
    //     text: "Payment Methods",
    //     path: "/payment-methods",
    //     icon: MdPayment,
    // module: 'payment'
    // },


]
 




export default DashboardNavigationMain;