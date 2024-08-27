import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { motion } from 'framer-motion';

const FakeLandingPage = () => {
  // Variants for the hero text animations
  const textVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const textVariant1 = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, delay: 0.2, ease: "easeOut" } },
  };

  const textVariant2 = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, delay: 0.4, ease: "easeOut" } },
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '93vh',
        backgroundColor: '#3F51B5', // New color theme
        color: '#FFFFFF',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: { xs: '2rem 1rem', sm: '4rem 2rem' },
      }}
    >
      <Container maxWidth="lg">
        {/* Hero Text */}
        <motion.div
          variants={textVariants}
          initial="hidden"
          animate="visible"
          sx={{ mb: 4 }}
        >
          <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold', mb: 2 }}>
            Elevate Your Career with Cutting-Edge Tools
          </Typography>
          <motion.div variants={textVariant1} initial="hidden" animate="visible">
            <Typography variant="h6" component="p" sx={{ mb: 2 }}>
              Unlock the full potential of your interview preparation with our comprehensive admin dashboard.
            </Typography>
          </motion.div>
          <motion.div variants={textVariant2} initial="hidden" animate="visible">
            <Typography variant="body1" component="p" sx={{ mb: 4 }}>
              Gain access to powerful features, manage quizzes, track performance, and refine your skills like never before.
            </Typography>
          </motion.div>
        </motion.div>
        {/* Background Animation */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'radial-gradient(circle, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.4) 100%)',
            zIndex: -1,
            animation: 'pulse 20s infinite',
          }}
        />
      </Container>
      {/* Pulse Animation Effect */}
      <style>
        {`
          @keyframes pulse {
            0% { transform: scale(1); opacity: 0.6; }
            50% { transform: scale(1.1); opacity: 0.9; }
            100% { transform: scale(1); opacity: 0.6; }
          }
        `}
      </style>
    </Box>
  );
};

export default FakeLandingPage;
