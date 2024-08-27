import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Box, Button, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import MenuIcon from '@mui/icons-material/Menu';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

// Import your logo image
import logoImage from '../../Assets/logo-image.png'; // Replace with the path to your logo image

const AdminNavbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true); // Change this as needed

  // Color theme variables
  const primaryColor = '#000000';  // Deep Blue
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
    <AppBar position="static" sx={{ backgroundColor: primaryColor, height: "7vh" }}>
      <Toolbar sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
        {/* Logo */}
        <motion.div
          variants={logoVariants}
          initial="hidden"
          animate="visible"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
            <img
              src={logoImage}
              alt="Logo"
              style={{ width: '40px', height: '40px', borderRadius: '50%' }} // Adjust size and style as needed
            />
            <Typography variant="h6" component="div" sx={{ color: textColor, ml: 1 }}>
              Interview Prep
            </Typography>
          </Link>
        </motion.div>

        {/* Desktop Tabs */}
        {isLogin && !isMobile && (
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <motion.div variants={buttonVariants} whileHover="hover">
              <Button
                component={Link}
                to="/dashboard" // Adjust the path as needed
                sx={{ color: textColor, '&:hover': { color: accentColor } }}
              >
                Dashboard
              </Button>
            </motion.div>
            <motion.div variants={buttonVariants} whileHover="hover">
              <Button
                component={Link}
                to="/resources" // Adjust the path as needed
                sx={{ color: textColor, '&:hover': { color: accentColor } }}
              >
                Resources
              </Button>
            </motion.div>
          </Box>
        )}

        {/* Login/Register or Logout */}
        {isLogin ? (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <motion.div
              variants={navItemVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Button
                onClick={() => setIsLogin(false)} // Handle logout logic here
                sx={{ color: textColor, '&:hover': { color: accentColor } }}
              >
                Logout
              </Button>
            </motion.div>
          </Box>
        ) : (
          !isMobile && (
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <motion.div
                variants={navItemVariants}
                initial="hidden"
                animate="visible"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Button
                  component={Link}
                  to="/login"
                  sx={{ color: textColor, '&:hover': { color: accentColor } }}
                >
                  Login
                </Button>
              </motion.div>
              <motion.div
                variants={navItemVariants}
                initial="hidden"
                animate="visible"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Button
                  component={Link}
                  to="/register"
                  sx={{ color: textColor, '&:hover': { color: accentColor } }}
                >
                  Register
                </Button>
              </motion.div>
            </Box>
          )
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
                  {isLogin ? (
                    <>
                      <ListItem button component={Link} to="/dashboard" sx={{ '&:hover': { backgroundColor: accentColor } }}>
                        <ListItemText primary="Dashboard" />
                      </ListItem>
                      <ListItem button component={Link} to="/resources" sx={{ '&:hover': { backgroundColor: accentColor } }}>
                        <ListItemText primary="Resources" />
                      </ListItem>
                      <ListItem button onClick={() => setIsLogin(false)} sx={{ '&:hover': { backgroundColor: accentColor } }}>
                        <ListItemText primary="Logout" />
                      </ListItem>
                    </>
                  ) : (
                    <>
                      <ListItem button component={Link} to="/login" sx={{ '&:hover': { backgroundColor: accentColor } }}>
                        <ListItemText primary="Login" />
                      </ListItem>
                      <ListItem button component={Link} to="/register" sx={{ '&:hover': { backgroundColor: accentColor } }}>
                        <ListItemText primary="Register" />
                      </ListItem>
                    </>
                  )}
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
