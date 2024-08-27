import React from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Link as MuiLink,
} from "@mui/material";
import { motion } from "framer-motion";
import registerImage from "../../Assets/admin-register.jpg";
import { Link } from "react-router-dom";

export default function AdminRegister() {
  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #000000, #434343)",
        minHeight: "93vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: { xs: "20px", md: "0" },
        flexDirection: { xs: "column", md: "row" },
      }}
    >
      <Box
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        sx={{
          display: { xs: "none", md: "block" },
          mr: 5,
          maxWidth: "400px",
        }}
      >
        <motion.img
          src={registerImage}
          alt="Register"
          initial={{ scale: 0.9, rotate: -10 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, yoyo: Infinity, ease: "easeInOut" }}
          style={{
            maxWidth: "100%",
            borderRadius: "10px",
            boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.5)",
          }}
        />
      </Box>
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
          Register
        </Typography>
        <TextField
          fullWidth
          label="Name"
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
          label="Phone Number"
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
        <TextField
          fullWidth
          label="Confirm Password"
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
          Register
        </Button>
        <Typography variant="body2" sx={{ mt: 2, color: "white" }}>
          Already have an account?{" "}
          <MuiLink
            component={Link}
            to="/login"
            sx={{
              color: "#FFD700",
              textDecoration: "underline",
              "&:hover": { textDecoration: "none" },
            }}
          >
            Login
          </MuiLink>
        </Typography>
      </Box>
    </Box>
  );
}
