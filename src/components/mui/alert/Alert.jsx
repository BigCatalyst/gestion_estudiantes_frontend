/* eslint-disable react/prop-types */
import { Alert as AlerMUI, AlertTitle, Divider } from "@mui/material";
import { useEffect, useState } from "react";
//severity: error | info | success | warning
const Alert = ({ title, message, severity }) => {
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setHidden(false);
    }, 2000);
    return () => {
      clearTimeout(timeOut);
    };
  }, []);

  return (
    <>
      {hidden && (
        <div style={{ marginBottom: 21 }}>
          <AlerMUI variant="filled" severity={severity} sx={{ width: 300 }}>
            <div className="alert-title">
              <AlertTitle>{title}</AlertTitle>
              <Divider
                orientation="horizontal"
                variant="fullWidth"
                sx={{
                  mb: 1,
                  borderColor: "rgb(255 255 255 / 58%)",
                  width: 150,
                }}
              />
            </div>
            {message}
          </AlerMUI>
        </div>
      )}
    </>
  );
};

export default Alert;
