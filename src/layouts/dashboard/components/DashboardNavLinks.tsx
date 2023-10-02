import List from "@mui/material/List";
import {Collapse, Typography} from '@mui/material'
import { NavLink } from "react-router-dom";
import { DashboardNavigationMain } from "@/router/dasboard.navigation";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import {useState} from "react";
import {ExpandLess, ExpandMore} from "@mui/icons-material";
import useAuth from "@/shared/hooks/useAuth";
import * as React from "react";
import { NavigationRecord } from "@/shared/types/navigation";
type Props = {
  isOpen: boolean;
};
export default function DashboardNavLinks(props: Props) {
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const toggleSubmenu = (menuName: string) => {
    if (openSubmenu === menuName) {
      setOpenSubmenu(null);
    } else {
      setOpenSubmenu(menuName);
    }
  };
  const RenderNavigationLinks = ({ navLinks }: { navLinks: NavigationRecord[] }) => {
    return navLinks.map((item) => (
        <React.Fragment key={item.path}>
       
              <NavLink className='no-underline hover:no-underline' to={{ pathname: item.path }} end key={item.path}>
                {({ isActive }) => (
                    <ListItem >
                      <ListItemButton
                          sx={({ palette }) => ({
                            py: 0.8,
                            px: 2,
                            minHeight: 45,
                            transition: '0.2s',
                            color:'text.primary',
                            borderRadius:'5px',

                            ":hover": {
                              background: 'transparent',
                              color: palette.primary.main,
                            },
                            "&.Mui-selected , &.Mui-selected:hover": {
                              backgroundColor: palette.primary.main,
                              color: palette.background.paper
                            },
                          })}
                          selected={isActive}
                      >
                        <ListItemIcon
                            sx={() => ({
                              minWidth: 40,
                              color: 'inherit'
                            })}
                        > <item.icon size={"1.4rem"} /> </ListItemIcon>
                        {props.isOpen && <ListItemText primary={item.text} />}
                      </ListItemButton>
                    </ListItem>
                )}
              </NavLink>
 
         
        </React.Fragment>
    ));
  };

  return (
      <List sx={{ p: 0 }}>
        <RenderNavigationLinks navLinks={DashboardNavigationMain} />
        {
          props.isOpen ?
              <ListItem className="text-white/40  text-sm font-bold " sx={{ my: 2, mx: 2 }}>Payment Collection</ListItem>
              : <div className="text-center text-white dark:text-white/40 mx-auto py-4 text-2xl">. . .</div>
        }
       </List>
  );
}
