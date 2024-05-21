import React, { useState, useEffect } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { Card, Box, Typography } from "@mui/material";
import { tasks, taskStatus } from "./data/tasks";
import TaskList from "./components/TaskList";
import  ColumnContext  from "./context/ColumnContext";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const onDragEnd = (result, columns, setColumns) => {
  if (!result.destination) return;
  const { source, destination } = result;

  if (source.droppableId !== destination.droppableId) {
    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];
    const sourceItems = [...sourceColumn.items];
    const destItems = [...destColumn.items];
    const [removed] = sourceItems.splice(source.index, 1);
    destItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...sourceColumn,
        items: sourceItems,
      },
      [destination.droppableId]: {
        ...destColumn,
        items: destItems,
      },
    });
  } else {
    const column = columns[source.droppableId];
    const copiedItems = [...column.items];
    const [removed] = copiedItems.splice(source.index, 1);
    copiedItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...column,
        items: copiedItems,
      },
    });
  }
};

function App() {
  // set the 3 columns
  const [columns, setColumns] = useState(taskStatus);
  // const [items, setItems] = useState(columns)

  // useEffect(() => {
  //   localStorage.setItem("columns", JSON.stringify(columns));
  //   setColumns(columns);
  // }, [columns]);

  // useEffect(() => {
  //   const columns = JSON.parse(localStorage.getItem("columns"));
  //   if (columns) {
  //     setColumns(columns);
  //   }
  // }, []);

  return (
    <Card sx={{ backgroundColor: "#808080", width: "100%" }}>
      <Box sx={{ textAlign: "center", fontSize: "h2.fontSize" }}>
        <Typography variant="h2" color="white">

        Todo Management App
        </Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", height: "100%" }}>
        <ColumnContext.Provider value={{columns,setColumns}}>
        <DragDropContext
          onDragEnd={(result) =>{ onDragEnd(result, columns, setColumns);console.log(columns) }}>
          <TaskList columns={columns} />
        </DragDropContext>
        </ColumnContext.Provider>
      </Box>
    </Card>
  );
}

export default App;
