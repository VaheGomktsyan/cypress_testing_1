import { useQuery } from "@tanstack/react-query";
import { todos } from "./api";
import { ToDo } from "./type";

export default function Demo() {
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
    </div>
  );
}
