import { useEffect, useState } from "react";
import Page from "../../components/page/Page";
import { getAll, reporte_escalafon, reportRequest } from "../../services/StudentsService";
import { Box, Button, IconButton } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Delete, Edit } from "@mui/icons-material";
import ModalMUI from "../../components/mui/modal/Modal";
import AddStudents from "./AddStudents";
import UpdateStudents from "./UpdateStudents";
import { BsPersonFillAdd } from "react-icons/bs";
import DeleteStudents from "./DeleteStudents";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { dataGridStyles } from "../../components/mui/datagrid/DataGridStyle";
import { FaFilePdf } from "react-icons/fa";
import  SubirDeGradoEstudiante from "./SubirDeGradoEstudiante"
const Students = () => {
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


  //Modal Delete Confirn
  const [openMSubirGrado, setOpenMSubirGrado] = useState(false);
  const [dataSubirGrado, setDataSubirGrado] = useState();
  const handleOpenDelMSubirGrado = (row) => {
    setOpenMSubirGrado(true);
    setDataSubirGrado(row);
  };
  const handleCloseDelMSubirGrado = () => setOpenMSubirGrado(false);

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

  const handleReportButtom = async () => {
    await reportRequest();
  };
  const handleReporteEscalfonButtom = async () => {
    await reporte_escalafon();
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
        <IconButton
          aria-label="Subir de grado"
          onClick={() => handleOpenDelMSubirGrado(params.row)}
        >
          <Delete sx={{ color: "yellow" }} />
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
      field: "address",
      headerName: "Address",
      width: 150,
    },
    {
      field: "grade",
      headerName: "Grade",
      width: 150,
    },
    {
      field: "lastName",
      headerName: "Last Name",
      width: 150,
    },
    {
      field: "name",
      headerName: "Name",
      width: 150,
    },
    {
      field: "regNumber",
      headerName: "Reg Number",
      width: 150,
    },
    {
      field: "sex",
      headerName: "Sex",
      width: 150,
    },
    { ...actionsCol },
  ];

  return (
    <Page title="Estudiantes">
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
            <Button
              variant="contained"
              startIcon={<FaFilePdf />}
              onClick={handleReporteEscalfonButtom}
            >
              Escalafón 
            </Button>
            <ModalMUI
              open={openAddM}
              handleClose={handleCloseAddM}
              title="Adicionar Estudiante"
            >
              <AddStudents
                setKeyDataGrid={setKeyDataGrid}
                handleCloseAddM={handleCloseAddM}
              />
            </ModalMUI>
            <ModalMUI
              open={openUpdM}
              handleClose={handleCloseUpdM}
              title="Actualizar Estudiante"
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
              title="Eliminar Estudiante"
            >
              <DeleteStudents
                setKeyDataGrid={setKeyDataGrid}
                handleCloseDelM={handleCloseDelM}
                dataDel={dataDel}
              />
            </ModalMUI>

            <ModalMUI
              open={openMSubirGrado}
              handleClose={handleCloseDelMSubirGrado}
              title="Subir de grado"
            >
              <SubirDeGradoEstudiante
                setKeyDataGrid={setKeyDataGrid}
                handleCloseDelM={handleCloseDelMSubirGrado}
                data_entrada={dataSubirGrado}
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
                  //regNumber: false,
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

export default Students;
