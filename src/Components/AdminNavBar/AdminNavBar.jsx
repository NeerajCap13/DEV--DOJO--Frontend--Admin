import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Box, Button, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import MenuIcon from '@mui/icons-material/Menu';
import { motion } from 'framer-motion';

const AdminNavbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true); // Change this as needed

  // Color theme variables
  const primaryColor = '#0D47A1';  // Deep Blue
  const accentColor = '#FF7043';   // Vibrant Orange
  const textColor = '#FFFFFF';     // White for text

  // Variants for the buttons to enhance animation effects
  const buttonVariants = {
    hover: {
      scale: 1.1,
      textShadow: "0px 0px 8px rgb(255,255,255)",
      boxShadow: "0px 0px 8px rgb(255,255,255)",
      transition: {
        duration: 0.3,
        yoyo: 5,
      },
    },
  };

  // Variants for the initial entrance animations
  const logoVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  const navItemVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: primaryColor , height:"7vh"}}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        {/* Logo */}
        <motion.div
          variants={logoVariants}
          initial="hidden"
          animate="visible"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Typography variant="h6" component="div" sx={{ color: textColor }}>
            Interview Prep
          </Typography>
        </motion.div>

        {/* Tabs */}
        {isLogin && !isMobile && (
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <motion.div variants={buttonVariants} whileHover="hover">
              <Button sx={{ color: textColor, '&:hover': { color: accentColor } }}>Dashboard</Button>
            </motion.div>
            <motion.div variants={buttonVariants} whileHover="hover">
              <Button sx={{ color: textColor, '&:hover': { color: accentColor } }}>Resources</Button>
            </motion.div>
          </Box>
        )}

        {/* Login/Register */}
        {(isLogin || !isLogin) && !isMobile && (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <motion.div
              variants={navItemVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Button sx={{ color: textColor, '&:hover': { color: accentColor } }}>Login</Button>
            </motion.div>
            <motion.div
              variants={navItemVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Button sx={{ color: textColor, '&:hover': { color: accentColor } }}>Register</Button>
            </motion.div>
          </Box>
        )}

        {/* Hamburger Menu for Mobile */}
        {(isLogin || !isLogin) && isMobile && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <IconButton
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer(true)}
                sx={{ ml: 'auto', color: textColor }}
              >
                <MenuIcon />
              </IconButton>
            </motion.div>
            <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
              <Box
                sx={{ width: 250, backgroundColor: primaryColor, height: '100%', color: textColor }}
                role="presentation"
                onClick={toggleDrawer(false)}
                onKeyDown={toggleDrawer(false)}
              >
                <List>
                  {isLogin && (
                    <>
                      <ListItem button sx={{ '&:hover': { backgroundColor: accentColor } }}>
                        <ListItemText primary="Dashboard" />
                      </ListItem>
                      <ListItem button sx={{ '&:hover': { backgroundColor: accentColor } }}>
                        <ListItemText primary="Resources" />
                      </ListItem>
                    </>
                  )}
                  <ListItem button sx={{ '&:hover': { backgroundColor: accentColor } }}>
                    <ListItemText primary="Login" />
                  </ListItem>
                  <ListItem button sx={{ '&:hover': { backgroundColor: accentColor } }}>
                    <ListItemText primary="Register" />
                  </ListItem>
                </List>
              </Box>
            </Drawer>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default AdminNavbar;
