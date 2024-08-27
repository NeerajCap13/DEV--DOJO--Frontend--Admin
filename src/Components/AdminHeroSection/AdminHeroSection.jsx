import React from 'react';
import { Box, Typography, Container, Grid, Button } from '@mui/material';
import { motion } from 'framer-motion';
import adminSuccessImage from "../../Assets/hero-section.svg"

const AdminHeroSection = () => {
  // Animation variants for the text and images
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '93vh',
        background: 'linear-gradient(to right, #4CAF50, #2C6B43)', // Gradient background
        color: '#FFFFFF',
        textAlign: 'center',
        padding: { xs: '2rem', sm: '4rem', md: '6rem' },
        overflow: 'hidden',
      }}
    >
      <Container>
        <Grid container spacing={4} justifyContent="center">
          {/* Text Section */}
          <Grid item xs={12} md={6}>
            <motion.div
              variants={textVariants}
              initial="hidden"
              animate="visible"
            >
              <Typography
                variant="h2"
                component="h1"
                sx={{
                  fontWeight: 'bold',
                  mb: 2,
                  fontSize: { xs: '2rem', sm: '3rem', md: '2.53rem', lg:"3.5" }, // Responsive font size
                  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', // Text shadow
                }}
              >
                Congratulations, Admin!
              </Typography>
              <Typography
                variant="h5"
                component="p"
                sx={{
                  mb: 2,
                  fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' }, // Responsive font size
                  textShadow: '1px 1px 3px rgba(0, 0, 0, 0.5)', // Text shadow
                }}
              >
                You've successfully set up your admin dashboard. You now have the power to manage and oversee all aspects with precision and ease.
              </Typography>
              <Typography
                variant="h6"
                component="p"
                sx={{
                  mb: 4,
                  fontSize: { xs: '0.875rem', sm: '1rem', md: '1.2rem' }, // Responsive font size
                  textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)', // Text shadow
                }}
              >
                Your tools are now at your fingertips. Enjoy the full control and insights that come with being an admin. Let’s make great things happen!
              </Typography>
              {/* Call-to-Action Button */}
              <Button
                variant="contained"
                color="secondary"
                size="large"
                sx={{
                  borderRadius: '8px',
                  padding: '0.75rem 2rem',
                  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)',
                  '&:hover': {
                    backgroundColor: '#FF7043', // Accent color on hover
                    boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.3)',
                  },
                }}
              >
                Explore Dashboard
              </Button>
            </motion.div>
          </Grid>

          {/* Image Section */}
          <Grid item xs={12} md={6}>
            <motion.div
              variants={imageVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.05 }} // Subtle zoom effect on hover
            >
              <img
                src={adminSuccessImage} // Placeholder image URL
                alt="Admin Success"
                style={{
                  width: '100%',
                  borderRadius: '8px',
                  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
                }}
              />
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AdminHeroSection;
