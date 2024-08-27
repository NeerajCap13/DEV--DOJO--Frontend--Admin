import React from 'react';
import { Box, Typography, Link, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material'; 

const AdminFooter = () => {
  return (
    <Box
      component={motion.footer}
      sx={{
        py: 6, 
        px: 3,
        mt: 'auto',
        backgroundColor: '#1a1a1a', 
        color: '#ffffff', 
        textAlign: 'center',
        position: 'relative',
        bottom: 0,
        width: '100%',
        boxShadow: '0 -2px 10px rgba(0, 0, 0, 0.5)', 
      }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Typography variant="h6" sx={{ mb: 2 }}>
        © {new Date().getFullYear()} Your Company Name
      </Typography>
      <Box
        component={motion.div}
        sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 2 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <Link href="#" underline="hover" color="inherit" sx={linkStyle}>
          Privacy Policy
        </Link>
        <Link href="#" underline="hover" color="inherit" sx={linkStyle}>
          Terms of Service
        </Link>
        <Link href="#" underline="hover" color="inherit" sx={linkStyle}>
          Contact Us
        </Link>
        <Link href="#" underline="hover" color="inherit" sx={linkStyle}>
          About Us
        </Link>
        <Link href="#" underline="hover" color="inherit" sx={linkStyle}>
          Careers
        </Link>
        <Link href="#" underline="hover" color="inherit" sx={linkStyle}>
          Blog
        </Link>
      </Box>
      <Box
        sx={{
          mt: 3,
          display: 'flex',
          justifyContent: 'center',
          gap: 2,
        }}
      >
        <IconButton
          component={motion.a}
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          sx={iconStyle}
          whileHover={{ scale: 1.2 }}
        >
          <Facebook />
        </IconButton>
        <IconButton
          component={motion.a}
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          sx={iconStyle}
          whileHover={{ scale: 1.2 }}
        >
          <Twitter />
        </IconButton>
        <IconButton
          component={motion.a}
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          sx={iconStyle}
          whileHover={{ scale: 1.2 }}
        >
          <Instagram />
        </IconButton>
        <IconButton
          component={motion.a}
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          sx={iconStyle}
          whileHover={{ scale: 1.2 }}
        >
          <LinkedIn />
        </IconButton>
      </Box>
      <Typography variant="body2" sx={{ mt: 2 }}>
        Built with ❤️ by Your Team
      </Typography>
    </Box>
  );
};

// Link styling with hover animation
const linkStyle = {
  transition: 'color 0.3s ease, transform 0.3s ease',
  '&:hover': {
    color: '#00bcd4', 
    transform: 'scale(1.1)', 
  },
};

// Icon button styling with hover animation
const iconStyle = {
  color: '#ffffff', 
  transition: 'color 0.3s ease, transform 0.3s ease',
  '&:hover': {
    color: '#00bcd4',
    transform: 'scale(1.2)', 
  },
};

export default AdminFooter;
