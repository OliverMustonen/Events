import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getTodoCatalog } from '../store/actions/todoCatalogActions';
import TodoCard from '../components/TodoCard';

const Todos = () => {

    const dispatch = useDispatch();
    const todoCatalog = useSelector(state => state.todoCatalog);

    useEffect(() => {
        dispatch(getTodoCatalog());
    }, [dispatch])

    return (
        <div className="todos-list">
            {
                todoCatalog && todoCatalog.map(todo => (
                    <TodoCard todo={todo} key={todo._id}/>
                ))
            }
        </div>
    )
}

export default Todos