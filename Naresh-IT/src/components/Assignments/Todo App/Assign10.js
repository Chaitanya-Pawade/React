//! Create Todo App (Crud App) using useReducer


import React, { useReducer } from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";

function tasksReducer(tasks,action){

    switch (action.type){
        case "added" : {
            return [...tasks, { id: Date.now(), text: action.payload }];
       
        }
        case "deleted" : {
            return tasks.filter(task => task.id!== action.id);
        }
        // case "created" : {
        //     return [...tasks , {}]
        default: {
            throw Error("Unknown action: " + action.type);
          }
    }

}


export default function Assign10(){
    const initialTask = [];
    const [tasks , dispatch] = useReducer(tasksReducer , initialTask);

    function handleAddTask(text){
        dispatch({
            type : "added",
            payload : text,
    
        })
    }
    function handleDeleteTask(taskId){
        dispatch({
            type : "deleted",
            id : taskId
        })
    }
   
    return (
        <>
        <h2>Todo App using useReducer</h2>
        <AddTask addTask = {handleAddTask}/>
        <TaskList tasks = {tasks} deleteTask = {handleDeleteTask}/>
        </>
    )
}