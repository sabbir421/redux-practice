import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getToDos } from "../Services/Action/action";

const Todos = () => {
  const { isloadding, toDos, error } = useSelector((state) => state);
  console.log(isloadding);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getToDos());
  }, []);
  return (
    <div>
      <h1>toDos App</h1>
      {isloadding && <h3>Loadding....</h3>}
      {error && <h3>{error.message}</h3>}
      <section>
        {toDos.map((todo) => {
          return (
            <article key={todo.id}>
                <h3>{todo.id}</h3>
              <h3>{todo.title}</h3>
            </article>
          );
        })}
      </section>
    </div>
  );
};

export default Todos;
