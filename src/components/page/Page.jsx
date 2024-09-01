/* eslint-disable react/prop-types */
import { Box } from "@mui/material";
import "./Page.css";

const Page = ({ children, title }) => {
  return (
    <Box className="page">
      <h1>{title}</h1>
      {children}
    </Box>
  );
};

export default Page;
