/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { getAll } from "../../services/NotesServices";
import { Box, Button, IconButton } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Delete, Edit } from "@mui/icons-material";
import ModalMUI from "../../components/mui/modal/Modal";
import AddNote from "./AddNote";
import UpdateNote from "./UpdateNote";
import { BsPersonFillAdd } from "react-icons/bs";
import DeleteNote from "./DeleteNote";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { dataGridStyles } from "../../components/mui/datagrid/DataGridStyle";
import { useNavigate } from "react-router-dom";

const Notes = ({ grade }) => {
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

  const navigate = useNavigate();

  useEffect(() => {
    //simulando el tiempo de respuesta de la api
    const getData = async () => {
      setLoading(true);
      let count = 0;
      let res;

      try {
        const notes = await getAll(grade);
      if (notes) {
        res = notes.data.map((item) => {
          count++;
          return { ...item, id: count };
        });

        setData(res);
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

  const titleGrade = grade === 7 ? "7mo" : grade === 8 ? "8vo" : "9no";

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
      field: "nombre",
      headerName: "Nombre",
      width: 150,
    },
    {
      field: "apellidos",
      headerName: "Apellido",
      width: 150,
    },
    {
      field: "grade",
      headerName: "Grado",
      width: 150,
    },
    {
      field: "asignatura",
      headerName: "Asignatura",
      width: 150,
    },
    {
      field: "as",
      headerName: "Acs",
      width: 150,
    },
    {
      field: "tcp1",
      headerName: "TCP 1",
      width: 150,
    },
    {
      field: "tcp2",
      headerName: "TCP 2",
      width: 150,
    },
    {
      field: "exmane_final",
      headerName: "Examen Final",
      width: 150,
    },
    {
      field: "nota_final",
      headerName: "Nota Final",
      width: 150,
    },
    { ...actionsCol },
  ];

  return (
    <Box>
      <Grid container spacing={3} sx={{ mt: 1 }}>
        <Grid xs={12} display="flex" justifyContent="flex-end" sx={{ mx: 10 }}>
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
            title={`Adicionar Nota/Asignatura ${titleGrade}`}
          >
            <AddNote
              setKeyDataGrid={setKeyDataGrid}
              handleCloseAddM={handleCloseAddM}
              grade={grade}
            />
          </ModalMUI>
          <ModalMUI open={openUpdM} handleClose={handleCloseUpdM}>
            <UpdateNote
              setKeyDataGrid={setKeyDataGrid}
              handleCloseUpdM={handleCloseUpdM}
              dataEdit={dataEdit}
            />
          </ModalMUI>
          <ModalMUI open={openDelM} handleClose={handleCloseDelM}>
            <DeleteNote
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
  );
};

export default Notes;
