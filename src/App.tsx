import React, {useState} from 'react';
import './App.css';
import {Todolist,TaskType} from "./Todolist";


export type FilterValvesType = "all" | "completed" | "active";

function App() {
    let [tasks, setTasks] = useState<Array<TaskType>>([
        {id: 1, title: "CSS", isDone: true},
        {id: 2, title: "HTML", isDone: true},
        {id: 3, title: "JS", isDone: false}
    ]);
    let [filter, setFilter] = useState<FilterValvesType>("all")

    function removeTask(id: number) {
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

    return (
        <div className="App">
            <Todolist
                title="What to learn"
                tasks={tasksForTodolist}
                removeTask={removeTask}
                changeFilter={changeFilter}/>

        </div>
    )
}

export default App;
