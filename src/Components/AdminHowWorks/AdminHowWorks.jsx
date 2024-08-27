import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { motion } from "framer-motion";
import createQuizzes from "../../Assets/quizzesCreate.jpg";
import trackProgress from "../../Assets/track-progress.svg";
import giveFeedback from "../../Assets/feedbackProvide.svg";
import manageUserData from "../../Assets/manage-user-data.svg";

const steps = [
  {
    title: "Create Quizzes",
    description:
      "Easily create and manage quizzes for users with various difficulty levels and topics.",
    image: createQuizzes,
  },
  {
    title: "Track User Progress",
    description:
      "Monitor user performance in real-time, analyzing their strengths and areas for improvement.",
    image: trackProgress,
  },
  {
    title: "Provide Feedback",
    description:
      "Give personalized feedback to users, helping them understand their mistakes and grow.",
    image: giveFeedback,
  },
  {
    title: "Manage User Data",
    description:
      "Access and manage user data securely, ensuring a smooth and efficient workflow.",
    image: manageUserData,
  },
];

const AdminHowWorks = () => {
  return (
    <Box
      sx={{
        p: 4,
        textAlign: "center",
        backgroundColor: "#f4f6f8",
        minHeight: "100vh",
        maxWidth: "1390px",
        margin: "0 auto",
      }}
    >
      <Typography variant="h3" component="h1" sx={{ mb: 4, color: "#3f51b5" }}>
        How It Works for Admins
      </Typography>

      <Grid container spacing={4}>
        {steps.map((step, index) => (
          <Grid item xs={12} md={6} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.3 }}
              whileHover={{ scale: 1.05 }}
            >
              <Box
                sx={{
                  mb: 4,
                  backgroundColor: "#fff",
                  borderRadius: "8px",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                  p: 2,
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Box
                  component="img"
                  src={step.image}
                  alt={step.title}
                  sx={{
                    width: "100%",
                    height: "220px",
                    objectFit: "cover",
                    borderRadius: "8px",
                    maxWidth: { xs: "100%", md: "50%" },
                  }}
                />
              </Box>
              <Typography
                variant="h5"
                component="h2"
                sx={{ mb: 2, color: "#3f51b5" }}
              >
                {step.title}
              </Typography>
              <Typography variant="body1" sx={{ mb: 2, color: "#6c757d" }}>
                {step.description}
              </Typography>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default AdminHowWorks;
