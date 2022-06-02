
import { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { createTodo } from '../store/actions/todoCatalogActions';
import { useNavigate } from 'react-router-dom';


const CreateTodo = () => {

/*   const input_title = document.querySelector('#title');
  const input_desc = document.querySelector('#desc');
  const input_date = document.querySelector('#date'); */

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const title = useRef();
  const desc = useRef();
  const date = useRef();

  const handleSub = e => {
    e.preventDefault();
    if(validateText('reminder')) {
      dispatch(createTodo(title.current.value, desc.current.value, date.current.value))
      navigate(0)
    }
      
  }

  const validateText = id => {
    const input = document.querySelector('#reminder');
    const error = input.nextElementSibling;
    if(title.current.value === '' && desc.current.value === '' && date.current.value === '') {
      error.innerText = 'You forgot to fill in title, description and date';
      input.classList.add('is-invalid');
      return false;
    }
    if(title.current.value === '' && desc.current.value === '') {
      error.innerText = 'You forgot to fill in title and description';
      input.classList.add('is-invalid');
      return false;
    }
    if(title.current.value === '' && date.current.value === '') {
      error.innerText = 'You forgot to fill in title and date';
      input.classList.add('is-invalid');
      return false;
    }
    if(desc.current.value === '' && date.current.value === '') {
      error.innerText = 'You forgot to fill in description and date';
      input.classList.add('is-invalid');
      return false;
    }
    if(title.current.value === '') {
      error.innerText = 'You forgot to fill in title';
      input.classList.add('is-invalid');
      return false;
    }
    if(desc.current.value === '') {
      error.innerText = 'You forgot to fill in desc';
      input.classList.add('is-invalid');
      return false;
    } 
    if (date.current.value === '') {
      error.innerText = 'You forgot to fill in date';
      input.classList.add('is-invalid');
      return false;
    }
    
    else {
      error.innerText = '';
      return true;
    }
  }

  return (
   
        <form onSubmit={handleSub} className='form' id='todoForm'>
      <h1>Write down events</h1>
          <div>
           <div className='form-bg'>
             <input type="text" placeholder='Title' id='input_title' ref={title} />
           </div>
          
            <div className='form-bg'>
              <textarea type="" placeholder='Description' id='desc' ref={desc} /> 
            </div>

            <div className='form-date'>
              <input type="date" id='date' ref={date}/>
            </div>
            
            <button id='reminder'>ADD</button>
            <div className='invalid'>
              
             </div>

           
          </div>
        </form>
     
  
  )
}

export default CreateTodo