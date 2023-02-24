import Todo from "../models/todo";
import TodoItem from "./TodoList";

import classes from "./Todos.module.css";

interface ITodos {
  items: Todo[];
  onRemoveTodo: (id: number) => void;
  todoDone: (id:number) => void;
  //isStrikedThrough: boolean
}

const Todos = (props: ITodos) => {
  return (
    <ul className={classes.ul}>
      {props.items.map((item) => (
        <TodoItem
          //isStrikedThrough={props.isStrikedThrough}
          todoDone={props.todoDone.bind(null,item.id)}
          key={item.id}
          text={item.text}
          isStrikedThrough={item.isStrikedThrough}
          onRemoveTodo={props.onRemoveTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};
export default Todos;
