import { Box, Typography, useTheme } from "@mui/material";
const Footer = () => {
  const theme = useTheme();

  return (
    <Box bgcolor={theme.palette.primary.dark} sx={{ display: "flex", alignItems: "center", justifyContent: "center", py: "20px" }}>
      <Typography color={"white"}>©️Copyright Marvel 2023</Typography>
    </Box>
  );
};

export default Footer;
