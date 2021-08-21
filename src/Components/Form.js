import { useState } from "react";
import Task from "./Task";

export default function Form() {
  const [taskArray, setTaskArray] = useState([
    { taskContent: "Lire" },
    { taskContent: "Sport" },
    { taskContent: "Coding" },
  ]);

  return (
    <div className="m-auto px-4 col-12 col-sm-10 col-lg-6">
      <form className="mb-3">
        <label htmlFor="todo" className="form-label mt-3"></label>
        <input
          type="text"
          placeholder="Ma nouvelle tâche"
          className="form-control"
          id="todo"
        />

        <button className="mt-2 btn btn-primary d-block">Valider</button>
      </form>

      <h2>Ma liste des tâches à faire : </h2>
      <ul className="list-group">
        {taskArray.map((item, i) => {
          return <Task taskContent={item.taskContent} key={i} />;
        })}
      </ul>
    </div>
  );
}
