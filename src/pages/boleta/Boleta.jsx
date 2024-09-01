import { useEffect, useState } from "react";
import Page from "../../components/page/Page";
import {
  getAll,
  getAllBoleta,
  reporte,
} from "../../services/EstudianteCarreraService";
import { Box, Button, Divider, IconButton } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Delete, Edit } from "@mui/icons-material";
import ModalMUI from "../../components/mui/modal/Modal";
import AddBoleta from "./AddBoletas";
import { BsPersonFillAdd } from "react-icons/bs";

import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { dataGridStyles } from "../../components/mui/datagrid/DataGridStyle";
import { FaFilePdf } from "react-icons/fa";
import { Height } from "@mui/icons-material";

const Boleta = () => {
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
    setDataEdit(row);
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

  useEffect(() => {
    //simulando el tiempo de respuesta de la api
    const getData = async () => {
      setLoading(true);
      let count = 0;

      const res = await getAllBoleta();

      if (res) {
        const dataRequest = res.data;
        const dataT = dataRequest.map((item) => {
          count++;

          return { ...item, id: count };
        });
        setData(dataT);
        setLoading(false);
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

  const boletaColumna = {
    field: "carreras",
    //type: "actions",
    headerName: "Boleta",
    width: 160,
    renderCell: (params) => {
      console.log(params.row);
      const carreras = params.row.carreras;

      return (
        <div style={{ display: "flex", flexDirection: "column", padding: 12 }}>
          {carreras.map((carrera, index) => (
            <div key={index} style={{ padding: 3 }}>
              {carrera}
              <Divider />
            </div>
          ))}
        </div>
      );
    },
  };

  const columns = [
    { field: "id", headerName: "ID", width: 150 },
    {
      field: "ci",
      headerName: "CI",
      width: 150,
    },
    { ...boletaColumna },
    { ...actionsCol },
  ];

  return (
    <Page title="Boletas">
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
              title="Adicionar Boleta"
            >
              <AddBoleta
                setKeyDataGrid={setKeyDataGrid}
                handleCloseAddM={handleCloseAddM}
              />
            </ModalMUI>
            {/* <ModalMUI
              open={openUpdM}
              handleClose={handleCloseUpdM}
              title="Actualizar Boleta"
            >
              <UpdateStudents
                setKeyDataGrid={setKeyDataGrid}
                handleCloseUpdM={handleCloseUpdM}
                dataEdit={dataEdit}
              />
            </ModalMUI>
            <ModalMUI
              open={openDelM}
              handleClose={handleCloseDelM}
              title="Eliminar Boleta"
            >
              <DeleteStudents
                setKeyDataGrid={setKeyDataGrid}
                handleCloseDelM={handleCloseDelM}
                dataDel={dataDel}
              />
            </ModalMUI> */}
          </Grid>
          <Grid xs={12}>
            <DataGrid
              key={keyDataGrid}
              getRowHeight={() => "auto"}
              getEstimatedRowHeight={() => 200}
              rows={data}
              columns={columns}
              columnVisibilityModel={{
                id: false,
                //regNumber: false,
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
              sx={{
                ...dataGridStyles,
                "& .MuiDataGrid-cell": {
                  textAlign: "left",
                  display: "flex",
                  alignItems: "center",
                },
              }}
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

export default Boleta;
