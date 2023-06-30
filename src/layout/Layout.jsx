import "../services/api";

// components
import { Footer, Header } from "../components";

// router
import Router from "../router/Router";

const Layout = () => {
  return (
    <>
      <Header />
      <main className="main-content">
        <Router />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
