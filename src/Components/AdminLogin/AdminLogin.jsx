import React from "react";
import { Box, TextField, Button, Typography, Link as MuiLink } from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // Import Link from React Router Dom

export default function AdminLogin() {
  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #000000, #434343)",
        minHeight: "93vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: { xs: "20px", md: "0" },
      }}
    >
      <Box
        component={motion.div}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        sx={{
          p: 4,
          borderRadius: 2,
          bgcolor: "rgba(255, 255, 255, 0.1)",
          boxShadow: 3,
          maxWidth: "400px",
          width: "100%",
        }}
      >
        <Typography variant="h4" sx={{ mb: 2, color: "white" }}>
          Login
        </Typography>
        <TextField
          fullWidth
          label="Email"
          variant="outlined"
          sx={{
            mb: 2,
            input: { color: "white" },
            label: { color: "white" },
            fieldset: { borderColor: "white" },
            "&:hover fieldset": { borderColor: "#FFD700" },
          }}
        />
        <TextField
          fullWidth
          label="Password"
          type="password"
          variant="outlined"
          sx={{
            mb: 2,
            input: { color: "white" },
            label: { color: "white" },
            fieldset: { borderColor: "white" },
            "&:hover fieldset": { borderColor: "#FFD700" },
          }}
        />
        <Button
          component={motion.button}
          whileHover={{ scale: 1.1 }}
          fullWidth
          variant="contained"
          sx={{
            bgcolor: "#FFD700",
            color: "black",
            mt: 2,
            py: 1,
            "&:hover": {
              bgcolor: "#FFDD00",
            },
          }}
        >
          Log In
        </Button>
        <Box sx={{ mt: 2, display: "flex", justifyContent: "space-between" }}>
          <MuiLink
            component={Link}
            to="/reset-password"
            sx={{
              color: "#FFD700",
              textDecoration: "underline",
              "&:hover": { textDecoration: "none" },
            }}
          >
            Forgot Password?
          </MuiLink>
          <Typography variant="body2" sx={{ color: "white" }}>
            Don't have an account?{" "}
            <MuiLink
              component={Link}
              to="/register"
              sx={{
                color: "#FFD700",
                textDecoration: "underline",
                "&:hover": { textDecoration: "none" },
              }}
            >
              Sign Up
            </MuiLink>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
