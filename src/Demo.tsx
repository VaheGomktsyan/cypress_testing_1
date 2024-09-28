import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { ToDo } from "./type";
import { ITask } from "./type/type";
import { useDispatch, useSelector } from "react-redux";
import { addTask, delTaskById } from "./features/task/taskSlice";
import { RootState } from "./app/store";
import "./task.css"

export const Demo: React.FC = React.memo(({ }): JSX.Element => {
  const dispatch = useDispatch()
  const save = (data: ITask) => {
    dispatch(addTask({ ...data, id: Date.now() }))
    reset()
  }
  const { handleSubmit, register, reset } = useForm<ITask>()
  const { tasks } = useSelector((st: RootState) => st.task)
  return (
    <div className="container">
      {/* <h1>Cypress ToDo</h1>
      <ul>
        {todos?.map((elm: ToDo) => (
          <li>
            {elm.title} <input type="checkbox" />
          </li>
        ))}
      </ul> */}
      <div className="input-section">
        <form onSubmit={handleSubmit(save)}>
          <input {...register("name", { required: "Enter task name", })} className="task-input" />
          <button className="add-btn">Add</button>
        </form>
      </div>
      {tasks.map((elm, index) => (
        <ul key={index} className="task-list">
          <li className="task">
            {elm.name}
            <button className="delete-btn" onClick={() => dispatch(delTaskById(elm.id))}>🗑️</button>
          </li>
        </ul>
      ))}
    </div>
  );
})
