/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";
import Page from "../../components/page/Page";
import { useEffect } from "react";
import { getAll } from "../../services/GraduateService";
import { Box, Button } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { dataGridStyles } from "../../components/mui/datagrid/DataGridStyle";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { FaFilePdf } from "react-icons/fa";
import { reporte } from "../../services/GraduateService";
import { useNavigate } from "react-router-dom";
const Graduate = () => {
  //const [request, setRequest] = useState(0);
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [keyDataGrid, setKeyDataGrid] = useState(Date.now());

  const navigate = useNavigate();

  useEffect(() => {
    //simulando el tiempo de respuesta de la api
    const getData = async () => {
      setLoading(true);
      let count = 0;

      try {
        const res = await getAll();
        if (res) {
          const dataRequest = res.data;
          const dataT = dataRequest.map((item) => {
            count++;
            return { ...item, id: count };
          });
          setData(dataT);
          setLoading(false);
        }
      } catch (error) {
        if (error.status === 403 || error.status === 401) {
          navigate("/logout", { replace: true });
        }
      }
     
    };

    getData();
  }, [keyDataGrid]);

  const handleReportButtom = async () => {
    await reporte();
  };

  const columns = [
    { field: "id", headerName: "ID", width: 150 },
    {
      field: "ci",
      headerName: "CI",
      width: 150,
    },
    {
      field: "direccion",
      headerName: "Address",
      width: 150,
    },
    // {
    //   field: "grade",
    //   headerName: "Grado",
    //   width: 150,
    // },
    {
      field: "apellidos",
      headerName: "Apellidos",
      width: 150,
    },
    {
      field: "nombre",
      headerName: "Nombre",
      width: 150,
    },
    {
      field: "nodematricula",
      headerName: "No Matricula",
      width: 150,
    },
    {
      field: "sexo",
      headerName: "Genero",
      width: 150,
    },
    { field:"fechagraduacion",
      headerName:"Graduacion",
      width: 150,
     },
     { field:"carrera",
      headerName:"Carrera",
      width: 150,
     },
     { field:"notaescalafon",
      headerName:"Nota Escalafon",
      width: 150,
     },
  ];

  return (
    <Page title="Graduado">
      <Box>
        <Grid container spacing={3} sx={{ mt: 1 }}>
          <Grid
            xs={12}
            display="flex"
            justifyContent="flex-end"
            sx={{ mx: 10 }}
          >
            <Button
              variant="contained"
              startIcon={<FaFilePdf />}
              onClick={handleReportButtom}
            >
              Reporte
            </Button>


          </Grid>
          
          <Grid xs={12}>
            <DataGrid
              key={keyDataGrid}
              rows={data}
              columns={columns}
              columnVisibilityModel={{
                id: false,
                password: false,
              }}
              initialState={{
                dataSet: "Commodity",
                maxColumns: 6,
                pagination: { paginationModel: { pageSize: 5 } },
                sorting: {
                  sortModel: [{ field: "ci", sort: "desc" }],
                },
              }}
              pageSizeOptions={[5, 10, 25]}
              sx={dataGridStyles}
              loading={loading}
              disableDensitySelector
              disableColumnSelector
              slotProps={{
                toolbar: {
                  csvOptions: { disableToolbarButton: true },
                  printOptions: { disableToolbarButton: true },
                  // Agrega más opciones de exportación si es necesario
                },
              }}
              slots={{
                toolbar: GridToolbar,
              }}
            />
          </Grid>
        </Grid>
      </Box>
    </Page>
  );
};

export default Graduate;
