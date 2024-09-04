import { Box, Button, IconButton } from "@mui/material";
import Page from "../../components/page/Page";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { BsPersonFillAdd } from "react-icons/bs";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import ModalMUI from "../../components/mui/modal/Modal";
import { getAll, reporte } from "../../services/UserService";
import { Delete, Edit } from "@mui/icons-material";
import { dataGridStyles } from "../../components/mui/datagrid/DataGridStyle";
import AddUser from "./AddUser";
import UpdateUser from "./UpdateUser";
import DeleteUser from "./DeleteUser";
import { FaFilePdf } from "react-icons/fa";

const Users = () => {
  //const [request, setRequest] = useState(0);
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
    };

    getData();
  }, [keyDataGrid]);

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

  const handleReportButtom = async () => {
    await reporte();
  };

  const columns = [
    { field: "id", headerName: "ID", width: 150 },
    {
      field: "username",
      headerName: "Nombre de Usuario",
      width: 150,
    },
    {
      field: "identificacion",
      headerName: "CI",
      width: 150,
    },
    {
      field: "nombre",
      headerName: "Nombre",
      width: 150,
    },
    {
      field: "email",
      headerName: "Email",
      width: 150,
    },
    {
      field: "password",
      headerName: "Contraseña",
      width: 150,
    },
    {
      field: "enabled",
      headerName: "Habilitado",
      width: 150,
    },
    {
      field: "descripcion",
      headerName: "Descripción",
      width: 150,
    },
    { ...actionsCol },
  ];

  return (
    <Page title="Usuarios">
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
              startIcon={<FaFilePdf />}
              onClick={handleReportButtom}
            >
              Reporte
            </Button>

            <Button
              variant="contained"
              startIcon={<BsPersonFillAdd />}
              onClick={handleOpenAddM}
            >
              Agregar
            </Button>

            <ModalMUI
              open={openAddM}
              handleClose={handleCloseAddM}
              title="Adicionar Usuario"
            >
              <AddUser
                setKeyDataGrid={setKeyDataGrid}
                handleCloseAddM={handleCloseAddM}
              />
            </ModalMUI>
            <ModalMUI
              open={openUpdM}
              handleClose={handleCloseUpdM}
              title="Actualizar Usuario"
            >
              <UpdateUser
                setKeyDataGrid={setKeyDataGrid}
                handleCloseUpdM={handleCloseUpdM}
                dataEdit={dataEdit}
              />
            </ModalMUI>
            <ModalMUI
              open={openDelM}
              handleClose={handleCloseDelM}
              title="Eliminar Usuario"
            >
              <DeleteUser
                setKeyDataGrid={setKeyDataGrid}
                handleCloseDelM={handleCloseDelM}
                dataDel={dataDel}
              />
            </ModalMUI>
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
                  sortModel: [{ field: "username", sort: "desc" }],
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

export default Users;
