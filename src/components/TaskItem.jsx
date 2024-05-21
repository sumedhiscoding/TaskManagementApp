import React from 'react'
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import {Card,Box, Typography} from "@mui/material"
const TaskItem = ({item,index}) => {
  console.log("item",item)
  return (
    <Draggable
    key={item.id}
    draggableId={item.id}
    index={index}
  >
    {(provided, snapshot) => {
      return (
        <Card
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          style={{
            userSelect: "none",
            padding: 16,
            margin: "0 0 8px 0",
            minHeight: "50px",
            backgroundColor: "white",
            color: "black",
            ...provided.draggableProps.style
          }}
        >
          <Typography variant="h5" color="#3B3B3B">{item.title}</Typography>
          <Typography variant="h6" color="InfoText">
            {item.description}
          </Typography>
        </Card>
      );
    }}
  </Draggable>
  )
}

export default TaskItem