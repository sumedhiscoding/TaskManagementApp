export const tasks = [
    { id: "1", title: "First task", description:"lorem ipsum akdnfkajsf kadjfaskd fkajdf", priority:"high" },
    { id: "2", title: "Second task", description:"lorem ipsum akdnfkajsf kadjfaskd fkajdf", priority:"low" },
    { id: "3", title: "Third task", description:"lorem ipsum akdnfkajsf kadjfaskd fkajdf", priority:"medium" },
    // { id: "4", content: "Fourth task" },
    // { id: "5", content: "Fifth task" },
    // { id: "6", content: "Sixth task" },
    // { id: "7", content: "Seventh task" },
    // { id: "8", content: "Eight task" },
    // { id: "9", content: "Ninth task" },
    // { id: "10", content: "Tenth task" },
  
  ];
  
 export const taskStatus = {
    todos: {
      name: "Todos",
      items: tasks
    },
    Active: {
      name: "Active",
      items: []
    },
    Done: {
      name: "Completed",
      items: []
    }
  };