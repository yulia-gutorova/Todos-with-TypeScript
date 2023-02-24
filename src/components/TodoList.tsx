import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import classes from './TodoList.module.css'
interface ITodoItem {
    text: string;
    todoDone: (event:React.MouseEvent) => void;
    onRemoveTodo: (event:React.MouseEvent) => void; 
    isStrikedThrough: boolean
}


function TodoItem(props: ITodoItem) {
    return (
    <li onClick={props.todoDone}  style={{ textDecoration: props.isStrikedThrough ? 'line-through' : 'none' }}  className={classes.li}>{props.text}
    <FontAwesomeIcon className={classes.icon} onClick={props.onRemoveTodo} icon={faTrash} />
    </li>
 );
}


export default TodoItem;