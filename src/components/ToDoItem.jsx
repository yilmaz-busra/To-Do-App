import React from "react";

export default function ToDoItem({ task, deleteTask }) {
  return (
    <div className="flex items-center justify-between w-full max-w-5xl p-4 my-4 border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-6 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
      <p>Task: {task}</p>
      <button onClick={deleteTask} className="cursor-pointer">
        Delete
      </button>
    </div>
  );
}
