import { useEffect, useState } from "react";
import Page from "../../components/page/Page";
import { getEscalafon } from "../../services/StudentsService";
import { Box, Button } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { FaFilePdf, FaSitemap } from "react-icons/fa";
import ModalMUI from "../../components/mui/modal/Modal";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { dataGridStyles } from "../../components/mui/datagrid/DataGridStyle";

const Ladder = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  //Modal Otorgamiento
  const [openOtorgM, setOpenOtorgM] = useState(false);
  const handleOpenOtorgM = () => setOpenOtorgM(true);
  const handleCloseOtorgM = () => setOpenOtorgM(false);

  useEffect(() => {
    //simulando el tiempo de respuesta de la api
    const getData = async () => {
      setLoading(true);
      let count = 0;
      const res = await getEscalafon();
      if (res) {
        const dataRequest = res.data;
        const dataT = dataRequest.map((item) => {
          count++;
          return {
            id: count,
            lugar: item.lugar,
            promedio: item.promedio,
            ci: item.estudiante.ci,
            name: item.estudiante.name,
            lastName: item.estudiante.lastName,
          };
        });
        setData(dataT);
        setLoading(false);
      }
    };

    getData();
  }, []);

  const columns = [
    { field: "id", headerName: "ID", width: 150 },
    {
      field: "lugar",
      headerName: "Lugar",
      width: 150,
    },
    {
      field: "promedio",
      headerName: "Promedio",
      width: 150,
    },
    {
      field: "ci",
      headerName: "CI",
      width: 150,
    },
    {
      field: "name",
      headerName: "Nombre",
      width: 150,
    },
    {
      field: "lastName",
      headerName: "Apellido",
      width: 150,
    },
  ];
  return (
    <Page title="Escalafón">
      <Box>
        <Grid container spacing={3} sx={{ mt: 1 }}>
          <Grid
            xs={12}
            display="flex"
            justifyContent="flex-end"
            sx={{ mx: 10 }}
            gap={2}
          >
            <Button
              variant="contained"
              startIcon={<FaSitemap />}
              onClick={handleOpenOtorgM}
            >
              Realizar Otorgamiento
            </Button>

            <Button
              variant="contained"
              startIcon={<FaFilePdf />}
              //onClick={handleOpenAddM}
            >
              Reporte
            </Button>

            <ModalMUI
              open={openOtorgM}
              handleClose={handleCloseOtorgM}
              title="Eliminar Usuario"
            >
              <p>dsad</p>
            </ModalMUI>
          </Grid>
          <Grid xs={12}>
            <DataGrid
              //key={keyDataGrid}
              rows={data}
              columns={columns}
              columnVisibilityModel={{
                //id: false,
                password: false,
              }}
              initialState={{
                dataSet: "Commodity",
                maxColumns: 6,
                pagination: { paginationModel: { pageSize: 5 } },
                sorting: {
                  sortModel: [{ field: "id", sort: "desc" }],
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

export default Ladder;
