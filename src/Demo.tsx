import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { todos } from "./api";
import { ToDo } from "./type";
import { ITask } from "./type/type";

export default function Demo() {
  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm();
  const [tasks, setTasks] = useState([]);

  const onSubmit = () => {
    const onSubmit: SubmitHandler<ITask> = (data) => console.log(data);
    reset();
  };

  return (
    <div>
      <h1>Cypress ToDo</h1>
      <ul>
        {todos?.map((elm: ToDo) => (
          <li>
            {elm.title} <input type="checkbox" />
          </li>
        ))}
      </ul>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register("name", { required: true, maxLength: 20 })} />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}
