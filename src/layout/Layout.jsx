import "../services/api";

// components
import { Footer, Header } from "../components";

// router
import Router from "../router/Router";
import { Box } from "@mui/material";

const Layout = () => {
  return (
    <>
      <Header />
      <main className="main-content">
        <Box mx="auto" py="30px" maxWidth={{ sm: "98%", lg: "95%" }}>
          <Router />
        </Box>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
