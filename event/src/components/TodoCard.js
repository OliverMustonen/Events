import React from 'react'
import { MdDeleteForever } from 'react-icons/md';
import { Link } from 'react-router-dom';


const TodoCard = ({todo, details}) => {
 
  return (  
    <div className='todo events-list'>
     
        <h2>{todo.title}</h2>
        <div className='event-footer'>
        {!details && <Link to={`/todos/${todo._id}`}>Read more</Link>}
        {details 
              ? <p>{todo.desc}</p>
              : <p></p>
          }
          {details
            ?<Link to={`/`}>Return</Link>
            : <p></p>
          }
          <small>{todo.date}</small>
          <MdDeleteForever className='delete-icon' size='1.3em'/>
        </div>
      
</div>
  )
}
TodoCard.defaultProps = {
  details: false
}

export default TodoCard