import { useEffect } from "react";
import "./App.css";
import AppRoutes from "./routes/AppRoutes";
import { LocalStorageInit } from "./utils/LocalStorage";

function App() {
  useEffect(() => {
    LocalStorageInit();
  }, []);
  return (
    <>
      <AppRoutes />
    </>
  );
}

export default App;
