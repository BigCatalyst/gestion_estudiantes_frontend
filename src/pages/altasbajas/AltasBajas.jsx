/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Page from "../../components/page/Page";
import {
  getAll,
  reporte,
  reportemensual,
} from "../../services/AltasBajasService";
import { Box, Button, IconButton, styled } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Delete, Edit } from "@mui/icons-material";
import ModalMUI from "../../components/mui/modal/Modal";
import AddAltasBajas from "./AddAltasBajas";
import UpdateAltasBajas from "./UpdateAltasBajas";
import { BsPersonFillAdd } from "react-icons/bs";
import DeleteAltasBajas from "./DeleteAltasBajas";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { dataGridStyles } from "../../components/mui/datagrid/DataGridStyle";
import { FaFilePdf } from "react-icons/fa";
import dayjs from "dayjs";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useNavigate } from "react-router-dom";

const Item = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  marginTop: "15px",
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const AltasBajas = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [keyDataGrid, setKeyDataGrid] = useState(Date.now());

  //Modal Add
  const [openAddM, setOpenAddM] = useState(false);
  const handleOpenAddM = () => setOpenAddM(true);
  const handleCloseAddM = () => setOpenAddM(false);

  //Modal Update
  const [openUpdM, setOpenUpdM] = useState(false);
  const [dataEdit, setDataEdit] = useState();
  const handleOpenUpdM = (row) => {
    const dateArr = row.date.split("/");
    const date = new Date(dateArr[2], dateArr[1], dateArr[0]);
    console.log(date.getUTCDate());
    setDataEdit({ ...row, date: new Date(row.date) });
    setOpenUpdM(true);
    console.log(row);
  };
  const handleCloseUpdM = () => setOpenUpdM(false);

  //Modal Delete Confirn
  const [openDelM, setOpenDelM] = useState(false);
  const [dataDel, setDataDel] = useState();
  const handleOpenDelM = (row) => {
    setOpenDelM(true);
    setDataDel(row);
  };
  const handleCloseDelM = () => setOpenDelM(false);

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
          return {
            ...item,
            id: count,
            date: new Date(item.date).toLocaleDateString(),
          };
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

  const actionsCol = {
    field: "actions",
    type: "actions",
    headerName: "Acciones",
    width: 160,
    renderCell: (params) => (
      <div>
        <IconButton
          aria-label="update"
          onClick={() => handleOpenUpdM(params.row)}
        >
          <Edit color="primary" />
        </IconButton>
        <IconButton
          aria-label="delete"
          onClick={() => handleOpenDelM(params.row)}
        >
          <Delete sx={{ color: "#e91e63" }} />
        </IconButton>
      </div>
    ),
  };

  const columns = [
    { field: "id", headerName: "ID", width: 150 },
    {
      field: "ci",
      headerName: "CI",
      width: 150,
    },
    {
      field: "baja",
      headerName: "Baja",
      width: 150,
    },
    {
      field: "date",
      headerName: "Fecha",
      width: 150,
    },
    {
      field: "municipality",
      headerName: "Municipio",
      width: 150,
    },
    {
      field: "province",
      headerName: "Provincia",
      width: 150,
    },
    {
      field: "school",
      headerName: "Escuela",
      width: 150,
    },
    { ...actionsCol },
  ];

  const [fecha, setFecha] = useState(dayjs());
  const handleChange = (newValue) => {
    const fecha = newValue?.toJSON().split("T")[0];
    console.log(newValue?.toJSON());
    console.log(fecha);
    setFecha(newValue);
  };

  const handdleSubmit = async (event) => {
    event.preventDefault();
    const anno = fecha.get("year");
    const mes = fecha.get("month") + 1;

    await reportemensual(anno, mes);
  };

  return (
    <Page title="Altas/Bajas">
      <Box>
        <Grid container spacing={3} sx={{ mt: 1 }}>
          <Grid
            display="flex"
            gap={2}
            width="90%"
            justifyContent="space-between"
          >
            <Grid
              xs={4}
              display="flex"
              justifyContent="flex-start"
              sx={{ mx: 2 }}
              gap={2}
            >
              <form
                onSubmit={handdleSubmit}
                style={{
                  display: "flex",
                  height: "45px",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Grid
                  item
                  mb={2}
                  width="100%"
                  display="flex"
                  justifyItems="flex-end"
                >
                  <Item sx={{ width: "100%", backgroundColor: "transparent" }}>
                    <LocalizationProvider
                      dateAdapter={AdapterDayjs}
                      adapterLocale="es"
                    >
                      <DatePicker
                        name="fecha"
                        label="Fechade creación del formulario"
                        value={fecha}
                        onChange={handleChange}
                        sx={{
                          ml: -1,
                          width: "103%",
                        }}
                      />
                    </LocalizationProvider>
                  </Item>
                </Grid>
                <Button
                  variant="contained"
                  type="submit"
                  startIcon={<FaFilePdf />}
                  sx={{ width: 400, height: 45 }}
                >
                  Registro de altas y bajas mensual
                </Button>
              </form>
            </Grid>
            <Grid
              xs={6}
              display="flex"
              justifyContent="flex-end"
              sx={{ mx: 10 }}
              gap={2}
            >
              <Button
                variant="contained"
                startIcon={<BsPersonFillAdd />}
                onClick={handleOpenAddM}
              >
                Agregar
              </Button>
              <Button
                variant="contained"
                startIcon={<FaFilePdf />}
                onClick={handleReportButtom}
              >
                Reporte
              </Button>
              <ModalMUI
                open={openAddM}
                handleClose={handleCloseAddM}
                title="Adicionar Alta/Baja"
              >
                <AddAltasBajas
                  setKeyDataGrid={setKeyDataGrid}
                  handleCloseAddM={handleCloseAddM}
                />
              </ModalMUI>
              <ModalMUI
                open={openUpdM}
                handleClose={handleCloseUpdM}
                title="Actualizar Alta/Baja"
              >
                <UpdateAltasBajas
                  setKeyDataGrid={setKeyDataGrid}
                  handleCloseUpdM={handleCloseUpdM}
                  dataEdit={dataEdit}
                />
              </ModalMUI>
              <ModalMUI
                open={openDelM}
                handleClose={handleCloseDelM}
                title="Eliminar Alta/Baja"
              >
                <DeleteAltasBajas
                  setKeyDataGrid={setKeyDataGrid}
                  handleCloseDelM={handleCloseDelM}
                  dataDel={dataDel}
                />
              </ModalMUI>
            </Grid>
          </Grid>

          <Grid xs={12}>
            <DataGrid
              key={keyDataGrid}
              rows={data}
              columns={columns}
              columnVisibilityModel={{
                id: false,
                regNumber: false,
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

export default AltasBajas;
