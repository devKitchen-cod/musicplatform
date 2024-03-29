import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import AppBar from "@mui/material/AppBar";
import { useRouter } from "next/router";
import { Button } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { authUser } from "../redux/usersSlice";
const menuItems = [
  { text: "Main Page", href: "/" },
  { text: "Track List", href: "/tracks" },
  { text: "Album List", href: "/albums" },
];

export default function Navbar() {
  const user = useAppSelector(authUser)
  const dispatch = useAppDispatch()
  const [open, setOpen] = React.useState(false);
  const router = useRouter();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <CssBaseline />
      <AppBar position='fixed' style={{display: 'flex'}}>
        <Toolbar style={{border: '1px solid red'}}>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            onClick={handleDrawerOpen}
            edge='start'>
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' noWrap component='div'  sx={{ flexGrow: 1 }}>
            Persistent drawer
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Drawer variant='persistent' anchor='left' open={open}>
        <div>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <List>
          {menuItems.map(({ text, href }, index) => (
            <ListItem button key={href} onClick={() => router.push(href)}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
}
