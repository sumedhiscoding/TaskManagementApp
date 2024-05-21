import React, { useEffect, useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { Box, Button, Card, Modal, Typography, Container } from "@mui/material";
import TaskItem from "./TaskItem";
import { FaPlus } from "react-icons/fa";
import TaskForm from "./TaskForm";
import { flexbox } from "@mui/system";
const TaskList = (props) => {
  const { columns, setColumns } = props;
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  useEffect(() => {
    console.log("columsns", columns)

  }, [columns])

  return (
    <>
      {Object.entries(columns).map(([columnId, column], index) => {
        return (
          <Box
            variant="outlined"
            elevation={5}
            style={{
              margin: "1rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
            key={columnId}
          >
            <Box sx={{ fontSize: "1.5rem" }}>
              <Typography variant="h4" color="white">
                {column.name}
              {column.name == "Todos" ? (
                <Button style={{marginLeft:"1rem"}} color="inherit" onClick={handleOpen} variant="contained">
                  <FaPlus color="#3B3B3B" />{" "}
                </Button>
              ) : (
                ""
              )}
              </Typography>

              <TaskForm handleClose={handleClose} setColumns={setColumns} handleOpen={handleOpen} open={open} columns={columns} />
            </Box>

            <div style={{ margin: 8 }}>
              <Droppable droppableId={columnId} key={columnId}>
                {(provided, snapshot) => {
                  return (
                    // this is the taskslist holder
                    <Box
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                      style={{
                        background: snapshot.isDraggingOver
                          ? "#525252"
                          : "#AEAEAE",
                        padding: 4,
                        width: 250,
                        minHeight: 500,
                        borderRadius: "0.5rem",
                      }}
                    >
                      {/* this is individual item that will present in the tasklist container */}
                      {column.items.map((item, index) => {
                        return (
                          <TaskItem key={index} item={item} index={index} />
                        );
                      })}
                      {provided.placeholder}
                    </Box>
                  );
                }}
              </Droppable>
            </div>
          </Box>
        );
      })}
    </>
  );
};

export default TaskList;
