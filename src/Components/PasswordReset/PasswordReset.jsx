import React from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import { motion } from "framer-motion";

export default function PasswordReset() {
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
          Reset Password
        </Typography>
        <TextField
          fullWidth
          label="New Password"
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
          Reset Password
        </Button>
      </Box>
    </Box>
  );
}
