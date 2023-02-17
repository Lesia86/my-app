import React, {useState} from 'react';
import './App.css';
import {Todolist, TaskType} from "./Todolist";
import {v1} from "uuid";


export type FilterValvesType = "all" | "completed" | "active";

function App() {
    let [tasks, setTasks] = useState<Array<TaskType>>([
        {id: v1(), title: "CSS", isDone: true},
        {id: v1(), title: "HTML", isDone: true},
        {id: v1(), title: "JS", isDone: false}
    ]);
    let [filter, setFilter] = useState<FilterValvesType>("all")

    function removeTask(id: string) {
        let filteredTasks = tasks = tasks.filter(t => t.id !== id);
        setTasks(filteredTasks);
    }

    function changeFilter(value: FilterValvesType) {
        setFilter(value);
    }

    let tasksForTodolist = tasks;
    if (filter === "completed") {
        tasksForTodolist = tasks.filter(t => t.isDone === true)
    }
    if (filter === "active") {
        tasksForTodolist = tasks.filter(t => t.isDone === false)
    }
    function addTask(title:string){
        let newTask={id:v1(), title, isDone:false};
        let newTasks=[newTask,...tasks];
        setTasks(newTasks);
    };

    return (
        <div className="App">
            <Todolist
                title="What to learn"
                tasks={tasksForTodolist}
                removeTask={removeTask}
                changeFilter={changeFilter}
                addTask={addTask}
            />

        </div>
    )
}

export default App;
