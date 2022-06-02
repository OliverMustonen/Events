import { useEffect } from 'react'
import { useDispatch, useSelector} from 'react-redux';
import { useParams } from 'react-router-dom';
import { clearTodo, getTodoById } from '../store/actions/todoCatalogActions';
import TodoCard from '../components/TodoCard';

const TodoDetails = () => {

  const id = useParams().id
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTodoById(id))

        return () => {
            dispatch(clearTodo())
        }


    }, [dispatch, id])

    const todo = useSelector(state => state.todo.todo)

    return (
        <div>
         {todo && < TodoCard todo={todo} details={true} />}
        </div>
    )
}

export default TodoDetails