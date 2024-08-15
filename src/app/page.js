"use client";
import ToDoItem from "@/components/ToDoItem";
import { useState } from "react";

export default function Home() {
  const [task, setTask] = useState("");
  const [toDoList, setToDoList] = useState([]);

  const handleChange = (event) => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    }
  };

  const addTask = () => {
    setToDoList([...toDoList, task]);
    setTask("");
  };

  const deleteTask = (index) => {
    const newToDoList = toDoList.filter((_, i) => i !== index);
    setToDoList(newToDoList);
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-center font-mono text-sm lg:flex">
        <input
          name="task"
          type="text"
          value={task}
          placeholder="What needs to be done?"
          onChange={handleChange}
          className="fixed flex w-full justify-center mr-4 border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30"
        />

        <button
          onClick={addTask}
          className="cursor-pointer border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-6 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30"
        >
          Added Task
        </button>
      </div>

      <div className="flex flex-col items-center justify-start w-full max-w-5xl">
        {toDoList.map((item, index) => (
          <ToDoItem
            key={index}
            task={item}
            deleteTask={() => deleteTask(index)}
          />
        ))}
      </div>
    </div>
  );
}
