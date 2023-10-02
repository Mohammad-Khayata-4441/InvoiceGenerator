import { styled } from "@mui/material/styles";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { Avatar, Badge, Box, Paper, IconButton, InputAdornment, TextField, Tooltip, Typography, Slide } from "@mui/material";
import { IoMenu, IoMenuOutline, IoNotificationsOutline, IoSearchOutline } from "react-icons/io5";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";
import { useDarkMode } from "usehooks-ts";
import { BsChevronCompactRight, BsMenuApp } from 'react-icons/bs'
import React, { useState } from "react";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import useAuth from "@/shared/hooks/useAuth";
interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

interface Props {
  drawerWidth: number;
  drawerOpen: boolean;
  onMobileDrawerOpen: (e: any) => void;
  onOpen: (e: any) => void;
}
export default function Navbar({
  drawerWidth,
  onOpen,
  drawerOpen,
  onMobileDrawerOpen
}: Props) {

  const { toggle, isDarkMode } = useDarkMode(false);


  const handleOpenUserMenu = () => {
    console.log('wtf')
  }

  interface Props {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window?: () => Window;
    children: React.ReactElement;
  }

  function HideOnScroll(props: Props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
      target: window ? window() : undefined,
      threshold: 50
    });

    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
  }
  const {logOut}= useAuth()
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
  })<AppBarProps>(({ theme, open: drawerOpen }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(drawerOpen && {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));






  return (

    <HideOnScroll>
      <AppBar position="sticky" color="transparent" sx={{ p: '24px', border: 0 }} >

        <Paper sx={{ p: 3 }}>
          <Box display={'flex'} alignItems={'center'} gap={2} justifyContent={'space-between'} width={'100%'}>
            <Box className="left" display={'flex'} gap={2} alignItems={'center'} justifyContent={'center'}>
              {
                !drawerOpen &&
                (

                  <IconButton
                    size="small"
                    color="inherit"
                    aria-label="open drawer"
                    onClick={onOpen}
                    edge="start"
                    sx={{
                      height: 35,
                      width: 35,
                      display: {
                        xs: "none",
                        md: 'block'
                      }
                    }}

                  >
                    <BsChevronCompactRight />
                  </IconButton>
                )

              }


              <IconButton
                onClick={onMobileDrawerOpen}
                size="large"
                color="inherit"
                aria-label="open drawer"
                edge="start"
                sx={{
                  display: {
                    md: 'none',
                  }
                }}

              >
                <IoMenuOutline />
              </IconButton>

              <TextField
                sx={{
                  width: {
                    sm: 300,
                    md: 400,
                    lg: 600
                  }
                }}
                size="small"
                variant="outlined"
                placeholder="Search For Some Thing"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <IoSearchOutline />
                    </InputAdornment>
                  ),
                }}

              />






            </Box>
            <Box className="right relative">

              <Box sx={{ flexGrow: 0, alignItems: 'center' }} display={'flex'} gap={{
                md: 3,
                xs: 1
              }}>



                <IconButton onClick={() => toggle()}  >
                  {
                    isDarkMode ?
                      <HiOutlineSun />
                      :
                      <HiOutlineMoon />
                  }
                </IconButton>

                <Badge variant="standard" color="error" badgeContent={5}>
                  <IconButton  >
                    <IoNotificationsOutline></IoNotificationsOutline>
                  </IconButton>

                </Badge>








                <Box position={'relative'}>

                  <Tooltip title="Account settings">
                    <IconButton
                      onClick={handleClick}
                      size="small"
                      sx={{ ml: 2 }}
                      aria-controls={open ? 'account-menu' : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? 'true' : undefined}
                    >
                      <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
                    </IconButton>
                  </Tooltip>
                  <Menu
                    sx={{
                      '& .MuiMenu-paper': {
                        right: '60px !important',
                        left: 'unset !important',
                        top:'100px !important'
                      }
                    }}
                    anchorEl={anchorEl}
                    id="account-menu"
                    open={open}
                    onClose={handleClose}
                    onClick={handleClose}
                    PaperProps={{
                      elevation: 0,
                      sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        right: '10px !important',
                        top: 0,
                        width: 'max-content',

                        '& .MuiAvatar-root': {
                          width: 32,
                          height: 32,
                          ml: -0.5,
                          right: 0,
                          top: 0,
                          mr: 1,
                        },
                        '&:before': {
                          content: '""',
                          display: 'block',
                          position: 'absolute',
                          top: 0,
                          right: 14,
                          width: 10,
                          height: 10,
                          bgcolor: 'background.paper',
                          transform: 'translateY(-50%) rotate(45deg)',
                          zIndex: 0,
                        },
                      },
                    }}
                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                  >
                   
                    <MenuItem onClick={handleClose}>
                      <Avatar /> My account
                    </MenuItem>
                    <Divider />
    
                    <MenuItem onClick={handleClose}>
                      <ListItemIcon>
                        <Settings fontSize="small" />
                      </ListItemIcon>
                      Settings
                    </MenuItem>
                    <MenuItem onClick={logOut}>
                      <ListItemIcon>
                        <Logout fontSize="small" />
                      </ListItemIcon>
                      Logout
                    </MenuItem>
                  </Menu>
                </Box>












                {/* <Box sx={{
                    display: {
                      xs: 'none',
                      md: 'flex'
                    },
                    flexDirection: 'column'
                  }}>
                    <Typography>User Name</Typography>
                    <Typography fontSize={10} color='GrayText' >Admin</Typography>
                  </Box> */}

              </Box>


            </Box>


          </Box>
        </Paper>

      </AppBar >

    </HideOnScroll >
  );
}
