import React from 'react';
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { motion } from 'framer-motion';

const faqData = [
  { question: 'What is this application?', answer: 'This is an interview preparation dashboard designed to help users practice coding and track their progress.' },
  { question: 'How do I create an account?', answer: 'You can create an account by clicking on the "Register" button on the login page and filling out the registration form.' },
  { question: 'How can I reset my password?', answer: 'If you forget your password, click on the "Forgot Password" link on the login page, and follow the instructions to reset it.' },
  { question: 'What types of quizzes are available?', answer: 'We offer various types of quizzes including MCQ, Short Answer, and True/False to test your knowledge in different areas.' },
  { question: 'Can I track my progress over time?', answer: 'Yes, you can track your progress over time and see how many quizzes you have completed and your performance in each.' },
  { question: 'How do I provide feedback on the quizzes?', answer: 'You can provide feedback on quizzes through the feedback form available in the dashboard. Your input helps us improve the content.' },
  { question: 'How do I provide feedback on the quizzes?', answer: 'You can provide feedback on quizzes through the feedback form available in the dashboard. Your input helps us improve the content.' },
  { question: 'How do I provide feedback on the quizzes?', answer: 'You can provide feedback on quizzes through the feedback form available in the dashboard. Your input helps us improve the content.' },
  { question: 'How do I provide feedback on the quizzes?', answer: 'You can provide feedback on quizzes through the feedback form available in the dashboard. Your input helps us improve the content.' },
  
];

const Faq = () => {
  return (
    <Box
      component={motion.div}
      sx={{
        py: { xs: 4, sm: 6, md: 8 }, 
        px: { xs: 2, sm: 3 }, 
        backgroundColor: '#000000', 
        minHeight: '100vh',
        
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Box sx={{maxWidth:"1390px",
        margin:"0 auto",}}>
      <Typography
        variant="h4"
        sx={{
          mb: 4,
          textAlign: 'center',
          color: '#FFD700',
          fontSize: { xs: 'h5.fontSize', sm: 'h4.fontSize', md: 'h3.fontSize' }, 
        }}
      >
        Frequently Asked Questions
      </Typography>
      {faqData.map((item, index) => (
        <Accordion
          key={index}
          component={motion.div}
          sx={{ mb: 2 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.02 }} 
        >
          <AccordionSummary
            expandIcon={
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: 180 }}
                transition={{ duration: 0.3 }}
              >
                <ExpandMoreIcon />
              </motion.div>
            }
            sx={{
              backgroundColor: '#333333', 
              borderBottom: '1px solid #444444', 
              color: '#FFD700',
              transition: 'background-color 0.3s',
              '&:hover': {
                backgroundColor: '#555555', 
              },
            }}
          >
            <Typography variant="h6">{item.question}</Typography>
          </AccordionSummary>
          <AccordionDetails
            component={motion.div}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            transition={{ duration: 0.5 }}
            sx={{
              backgroundColor: '#222222', 
              color: '#FFD700', 
            }}
          >
            <Typography>{item.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}

      </Box>
     
    </Box>
  );
};

export default Faq;
