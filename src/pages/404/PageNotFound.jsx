import { Alert, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";

const PageNotFound = () => {
  const { pathname } = useLocation();

  return (
    <>
      <Alert sx={{ display: "flex", justifyContent: "center" }} variant="outlined" severity="warning">
        <Typography textAlign="center" variant="h5" color="initial">
          <b>404</b> Page Not Found
          <Typography variant="h6" color="red">
            ({pathname})
          </Typography>
        </Typography>
      </Alert>
    </>
  );
};

export default PageNotFound;
