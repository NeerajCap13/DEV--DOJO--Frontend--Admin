import React from 'react';
import { Box, Typography, Container, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import featureImage1 from '../../Assets/quiz.svg'; // Update with your image path
import featureImage2 from '../../Assets/frontend.svg'; // Update with your image path
import featureImage3 from '../../Assets/problem-of-the-day.svg'; // Update with your image path

const AdminFeature = () => {
  // Animation variants for the text and images
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const featureVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        background: '#f5f5f5',
        padding: { xs: '2rem', sm: '4rem', md: '6rem' },
        position: 'relative',
      }}
    >
      <Container>
        {/* Hero Section */}
        <Box
          sx={{
            textAlign: 'center',
            mb: 6,
          }}
        >
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontWeight: 'bold',
              mb: 2,
              fontSize: { xs: '2rem', sm: '3rem', md: '4rem' },
              color: '#333',
            }}
          >
            Explore Our Amazing Features
          </Typography>
          <Typography
            variant="h5"
            component="p"
            sx={{
              mb: 4,
              fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' },
              color: '#666',
            }}
          >
            Discover the powerful tools and features that make managing your dashboard a breeze. Let's dive into the amazing functionalities designed just for you!
          </Typography>
        </Box>

        {/* Features Section */}
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <motion.div
              variants={featureVariants}
              initial="hidden"
              animate="visible"
            >
              <Paper elevation={3} sx={{ borderRadius: '8px', overflow: 'hidden', height: '100%' }}>
                <img
                  src={featureImage1}
                  alt="Feature 1"
                  style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                />
                <Box sx={{ p: 3, height: 'calc(100% - 200px)' }}>
                  <Typography variant="h6" component="h3" sx={{ mb: 2, fontWeight: 'bold' }}>
                    Quiz Creation
                  </Typography>
                  <Typography variant="body1">
                    Description of feature 1. Explain what makes it outstanding and how it benefits the admin.
                  </Typography>
                </Box>
              </Paper>
            </motion.div>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <motion.div
              variants={featureVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.2 }}
            >
              <Paper elevation={3} sx={{ borderRadius: '8px', overflow: 'hidden', height: '100%' }}>
                <img
                  src={featureImage2}
                  alt="Feature 2"
                  style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                />
                <Box sx={{ p: 3, height: 'calc(100% - 200px)' }}>
                  <Typography variant="h6" component="h3" sx={{ mb: 2, fontWeight: 'bold' }}>
                    Frontend Practice
                  </Typography>
                  <Typography variant="body1">
                    Description of feature 2. Explain its key points and how it enhances the admin experience.
                  </Typography>
                </Box>
              </Paper>
            </motion.div>
          </Grid>

          <Grid item xs={12} sm={6} md={4} >
            <motion.div
              variants={featureVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.4 }}
            >
              <Paper elevation={3} sx={{ borderRadius: '8px', overflow: 'hidden', height: '100%' }}>
                <img
                  src={featureImage3}
                  alt="Feature 3"
                  style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                />
                <Box sx={{ p: 3, height: 'calc(100% - 200px)' }}>
                  <Typography variant="h6" component="h3" sx={{ mb: 2, fontWeight: 'bold' }}>
                    Daily Problems
                  </Typography>
                  <Typography variant="body1">
                    Description of feature 3. Highlight its significance and the advantages it brings to the admin.
                  </Typography>
                </Box>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AdminFeature;
