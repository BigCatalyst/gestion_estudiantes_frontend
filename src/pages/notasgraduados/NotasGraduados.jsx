import { Autocomplete, TextField } from "@mui/material";
import Page from "../../components/page/Page";

const NotasGraduados = () => {
  const haddleChange=({target})=>{

  }
  return (
    <Page title="Notas de los Graduados">
      <Autocomplete
        disablePortal
        options={["asd", "qwe", "123"]}
        sx={{ width: 300 }}
        renderInput={(params) => (
          <TextField name="op1"  {...params} label="Movie" />
        )}
      />
      <Autocomplete
        disablePortal
        options={["asd", "qwe", "123"]}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Movie" />}
      />
      <Autocomplete
        disablePortal
        options={["asd", "qwe", "123"]}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Movie" />}
      />
      <Autocomplete
        disablePortal
        options={["asd", "qwe", "123"]}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Movie" />}
      />
    </Page>
  );
};

export default NotasGraduados;
