import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { motion } from 'framer-motion';
import aboutBackgroundImage from "../../Assets/about-background.jpg";
import aboutUsImage from "../../Assets/about-us-main.png";

// Define animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } },
};

const textVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 1, delay: 0.5 } },
};

const imageVariants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 1, delay: 0.5 } },
};

const About = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: `url(${aboutBackgroundImage}) no-repeat center center fixed`,
        backgroundSize: 'cover',
        color: '#fff',
        py: { xs: 4, sm: 6, md: 8 }, // Responsive padding
        px: { xs: 2, sm: 4, md: 6 },
        textAlign: 'center',
      }}
      component={motion.div}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <Container>
        <Box
          component={motion.div}
          variants={imageVariants}
          initial="hidden"
          animate="visible"
          sx={{
            mb: 4,
            overflow: 'hidden',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
          }}
        >
          <motion.img
            src={aboutUsImage}
            alt="About Us"
            style={{ width: '100%', maxWidth: '600px', height: 'auto' }}
            whileHover={{ scale: 1.05 }} // Slightly enlarge the image on hover
            transition={{ duration: 0.3 }}
          />
        </Box>
        <Box
          component={motion.div}
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          <Typography
            component={motion.div}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            variant="h3"
            sx={{ mb: 4, fontWeight: 'bold', fontSize: { xs: 'h4.fontSize', sm: 'h3.fontSize', md: 'h2.fontSize' } }}
          >
            About Us
          </Typography>
          <Typography
            component={motion.div}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            variant="body1"
            sx={{ mb: 2, fontSize: { xs: 'body2.fontSize', sm: 'h5.fontSize' }, lineHeight: 1.6 }}
          >
            Welcome to our application! We are dedicated to providing the best interview preparation tools to help you excel in your career. Our platform offers a variety of quizzes, resources, and tracking tools to ensure that you are well-prepared for your interviews.
          </Typography>
          <Typography
            component={motion.div}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            variant="body1"
            sx={{ fontSize: { xs: 'body2.fontSize', sm: 'h6.fontSize' }, lineHeight: 1.6 }}
          >
            Our team is passionate about helping you succeed and we are constantly working to improve and expand our offerings. Thank you for choosing us as your partner in preparing for your interviews!
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
