// app/tasks/page.js (Task Page)
"use client";

import React, { useState } from 'react';

const TasksPage = () => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [mainTask, setMainTask] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);

  const editHandler = (index) => {
    setEditIndex(index);
    setTitle(mainTask[index].title);
    setDesc(mainTask[index].desc);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (editIndex === -1) {
      setMainTask([...mainTask, { title, desc }]);
    } else {
      const updatedTasks = mainTask.map((task, index) =>
        index === editIndex ? { title, desc } : task
      );
      setMainTask(updatedTasks);
      setEditIndex(-1);
    }
    setTitle('');
    setDesc('');
  };

  const deleteHandler = (i) => {
    const copyTask = [...mainTask];
    copyTask.splice(i, 1);
    setMainTask(copyTask);
  };

  let renderTask = <h2>No Tasks Available</h2>;

  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => (
      <li key={i} className="flex items-center justify-between mb-5">
        <div className="flex items-center justify-between w-2/3">
          <h5 className="text-2xl font-semibold">{t.title}</h5>
          <h6 className="text-xl font-semibold">{t.desc}</h6>
        </div>
        <button
          onClick={() => deleteHandler(i)}
          className="bg-red-400 px-4 py-2 rounded font-bold"
        >
          Delete
        </button>
        <button
          onClick={() => editHandler(i)}
          className="bg-blue-400 px-4 py-2 rounded font-bold"
        >
          Edit
        </button>
      </li>
    ));
  }

  return (
    <>
      <h1 className="bg-black text-white p-5 text-6xl font-bold text-center">
        Todo Application
      </h1>

      <form onSubmit={submitHandler}>
        <input
          type="text"
          className="text-2xl border-zinc-800 border-2 m-5 px-4 py-2"
          placeholder="Enter your task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          className="text-2xl border-zinc-800 border-2 m-5 px-4 py-2"
          placeholder="Describe the task"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <button className="bg-rose-300 text-zinc-900 px-4 py-2 text-2xl font-serif rounded">
          {editIndex === -1 ? 'Add Task' : 'Update Task'}
        </button>
      </form>

      <hr />

      <div className="p-8 bg-slate-200">
        <ul>{renderTask}</ul>
      </div>
    </>
  );
};

export default TasksPage;
