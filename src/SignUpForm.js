import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  TextField,
  Button,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Typography,
  Box,
} from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

// Define the color theme
const theme = createTheme({
  palette: {
    primary: {
      main: "#6A1B9A", // Purple
    },
    secondary: {
      main: "#FFA726", // Orange/Yellow
    },
    success: {
      main: "#43A047", // Green
    },
  },
  typography: {
    fontFamily: "Poppins, sans-serif",
  },
});

const SignUpForm = () => {
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      gender: "",
      class: "",
      section: "",
      emergencyContact: "",
    },
    validationSchema: Yup.object({
      fullName: Yup.string().required("Full Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      phoneNumber: Yup.string()
        .matches(/^\d{10}$/, "Phone number must be exactly 10 digits")
        .required("Phone Number is required"),
      gender: Yup.string().required("Gender is required"),
      class: Yup.string().required("Class is required"),
      section: Yup.string().required("Section is required"),
      emergencyContact: Yup.string()
        .matches(/^\d{10}$/, "Emergency Contact must be exactly 10 digits")
        .required("Emergency Contact is required"),
    }),
    onSubmit: (values) => {
      console.log("Form Data", values);
      alert("Form submitted successfully!");
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          background: "linear-gradient(135deg, #f3e5f5, #ede7f6)", // Subtle gradient
          padding: "32px",
          borderRadius: "16px", // Rounded corners
          maxWidth: "450px",
          margin: "auto",
          boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Typography
          variant="h5"
          color="primary"
          align="center"
          gutterBottom
          sx={{ fontWeight: "bold" }}
        >
          Sign Up
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          align="center"
          gutterBottom
        >
          Fill in the details below to create your account.
        </Typography>

        <form onSubmit={formik.handleSubmit}>
          {/* Full Name */}
          <TextField
            fullWidth
            margin="normal"
            id="fullName"
            name="fullName"
            label="Full Name"
            value={formik.values.fullName}
            onChange={formik.handleChange}
            error={formik.touched.fullName && Boolean(formik.errors.fullName)}
            helperText={formik.touched.fullName && formik.errors.fullName}
            sx={{
              borderRadius: "8px", // Rounded inputs
            }}
          />

          {/* Email */}
          <TextField
            fullWidth
            margin="normal"
            id="email"
            name="email"
            label="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            sx={{
              borderRadius: "8px",
            }}
          />

          {/* Phone Number */}
          <TextField
            fullWidth
            margin="normal"
            id="phoneNumber"
            name="phoneNumber"
            label="Phone Number"
            value={formik.values.phoneNumber}
            onChange={formik.handleChange}
            error={
              formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)
            }
            helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
            sx={{
              borderRadius: "8px",
            }}
          />

          {/* Gender */}
          <FormControl fullWidth margin="normal">
            <InputLabel id="gender-label">Gender</InputLabel>
            <Select
              id="gender"
              name="gender"
              labelId="gender-label"
              value={formik.values.gender}
              onChange={formik.handleChange}
              error={formik.touched.gender && Boolean(formik.errors.gender)}
              sx={{
                borderRadius: "8px",
              }}
            >
              <MenuItem value="Male">Male</MenuItem>
              <MenuItem value="Female">Female</MenuItem>
              <MenuItem value="Other">Other</MenuItem>
            </Select>
          </FormControl>

          {/* Class and Section in one line */}
          <Box sx={{ display: "flex", gap: "16px", marginTop: "8px" }}>
            <TextField
              id="class"
              name="class"
              label="Class"
              value={formik.values.class}
              onChange={formik.handleChange}
              error={formik.touched.class && Boolean(formik.errors.class)}
              helperText={formik.touched.class && formik.errors.class}
              sx={{ flex: 1, borderRadius: "8px" }}
            />

            <TextField
              id="section"
              name="section"
              label="Section"
              value={formik.values.section}
              onChange={formik.handleChange}
              error={formik.touched.section && Boolean(formik.errors.section)}
              helperText={formik.touched.section && formik.errors.section}
              sx={{ flex: 1, borderRadius: "8px" }}
            />
          </Box>

          {/* Emergency Contact */}
          <TextField
            fullWidth
            margin="normal"
            id="emergencyContact"
            name="emergencyContact"
            label="Emergency Contact"
            value={formik.values.emergencyContact}
            onChange={formik.handleChange}
            error={
              formik.touched.emergencyContact &&
              Boolean(formik.errors.emergencyContact)
            }
            helperText={
              formik.touched.emergencyContact &&
              formik.errors.emergencyContact
            }
            sx={{
              borderRadius: "8px",
            }}
          />

          {/* Submit Button */}
          <Button
            variant="contained"
            color="primary"
            type="submit"
            fullWidth
            sx={{
              marginTop: "24px",
              padding: "12px",
              fontWeight: "bold",
              borderRadius: "24px", // Circular button
              textTransform: "none",
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "#512da8", // Slightly darker purple
              },
            }}
          >
            Sign Up
          </Button>
        </form>
      </Box>
    </ThemeProvider>
  );
};

export default SignUpForm;
