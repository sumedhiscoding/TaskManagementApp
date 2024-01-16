import { Modal } from "@mui/material";
import React, { useContext } from "react";
import { Formik, Field, Form } from "formik";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useFormik } from "formik";
import {
  Container,
  Box,
  Card,
  Paper,
  Typography,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";
import ColumnContext from "../context/ColumnContext";

const TaskForm = (props) => {
  const { handleOpen, handleClose, open, columns } = props;

  const { setColumns } = useContext(ColumnContext);

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      priority: "",
    },
    onSubmit: (values) => {
      let sum =
        columns.todos.items.length +
        columns.Active.items.length +
        columns.Done.items.length +
        1;
      console.log(sum);
      console.log(values);
      const columnsupdated = {
        ...columns,
        todos: {
          ...columns.todos,
          items: [
            ...columns.todos.items,
            { id: sum.toString(), content: values.title },
          ],
        },
      };
      console.log("updatedcolumns", columnsupdated);
      setColumns(columnsupdated);
    },
  });

  const handleChange = (event) => {
    formik.setFieldValue("priority", event.target.value);
  };
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Container sx={{ height: "100%" }}>
          <Box
            sx={{ height: "100%" }}
            display="flex"
            alignItems="center"
            justifyContent="center"
            height="100vh"
            padding="1rem"
          >
            <Paper
              display="flex"
              alignItems="center"
              justifyContent="center"
              height="20vh"
              sx={{ padding: "1rem" }}
            >
              <form onSubmit={formik.handleSubmit}>
                <Box padding="1rem">
                  <TextField
                    id="title"
                    name="title"
                    label="Title"
                    variant="outlined"
                    fullWidth
                    value={formik.values.title}
                    onChange={formik.handleChange}
                    error={formik.touched.title && Boolean(formik.errors.title)}
                    helperText={formik.touched.title && formik.errors.title}
                  />
                </Box>

                <Box padding="1rem">
                  <TextField
                    id="description"
                    name="description"
                    label="Description"
                    variant="outlined"
                    fullWidth
                    value={formik.values.description}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.description &&
                      Boolean(formik.errors.description)
                    }
                    helperText={
                      formik.touched.description && formik.errors.description
                    }
                  />
                </Box>

                <Box padding="1rem">
                  <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="priority">Priority</InputLabel>
                    <Select
                      labelId="priority"
                      id="priority"
                      value={formik.values.priority}
                      onChange={handleChange}
                      label="Priority"
                    >
                      <MenuItem value={"High"}>High</MenuItem>
                      <MenuItem value={"Medium"}>Medium</MenuItem>
                      <MenuItem value={"Low"}>Low</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  marginTop="1rem"
                >
                  <Button
                    onClick={()=>{ formik.handleSubmit(); handleClose();}}
                    type="submit"
                    variant="contained"
                    color="primary"
                  >
                    Submit
                  </Button>
                  <Button
                    onClick={handleClose}
                    variant="contained"
                    color="error"
                  >
                    Close
                  </Button>
                </Box>
              </form>
            </Paper>
          </Box>
        </Container>
      </Modal>
    </>
  );
};

export default TaskForm;
