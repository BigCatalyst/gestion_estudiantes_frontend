import { useEffect, useState } from "react";
import Page from "../../components/page/Page";
import { getAll } from "../../services/SubjectsService";
import { Box, Button, IconButton } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Delete, Edit } from "@mui/icons-material";
import ModalMUI from "../../components/mui/modal/Modal";
import AddSubjec from "./AddSubjec";
import UpdateSubject from "./UpdateSubject";
import { BsPersonFillAdd } from "react-icons/bs";
import DeleteSubject from "./DeleteSubject";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { dataGridStyles } from "../../components/mui/datagrid/DataGridStyle";

const Subjects = () => {
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
      const res = await getAll();
      setTimeout(() => {
        setData(res);
        setLoading(false);
      }, 1000);
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

  const columns = [
    { field: "id", headerName: "ID", width: 150 },
    {
      field: "grade",
      headerName: "Grade",
      width: 150,
    },
    {
      field: "name",
      headerName: "Nombre",
      width: 150,
    },
    {
      field: "tcp2",
      headerName: "Tcp 2",
      width: 150,
    },

    { ...actionsCol },
  ];

  return (
    <Page title="Asignatura">
      <Box>
        <Grid container spacing={3} sx={{ mt: 1 }}>
          <Grid
            xs={12}
            display="flex"
            justifyContent="flex-end"
            sx={{ mx: 10 }}
          >
            {/* <TextField
              id="buscar"
              label="Buscar"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <MdOutlinePersonSearch style={{ width: 24, height: 24 }} />
                  </InputAdornment>
                ),
              }}
            /> */}
            <Button
              variant="contained"
              startIcon={<BsPersonFillAdd />}
              onClick={handleOpenAddM}
            >
              Agregar
            </Button>
            <ModalMUI open={openAddM} handleClose={handleCloseAddM}>
              <AddSubjec
                setKeyDataGrid={setKeyDataGrid}
                handleCloseAddM={handleCloseAddM}
              />
            </ModalMUI>
            <ModalMUI open={openUpdM} handleClose={handleCloseUpdM}>
              <h3 style={{ marginBottom: "15px" }}>
                Update Id:{dataEdit && dataEdit.id}
              </h3>
              <UpdateSubject
                setKeyDataGrid={setKeyDataGrid}
                handleCloseUpdM={handleCloseUpdM}
                dataEdit={dataEdit}
              />
            </ModalMUI>
            <ModalMUI open={openDelM} handleClose={handleCloseDelM}>
              <DeleteSubject
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
              columnVisibilityModel={
                {
                  //id: false,
                }
              }
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

export default Subjects;
