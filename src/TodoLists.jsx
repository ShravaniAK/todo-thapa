import React from 'react';
import './App.css';


export const TodoLists = (props) => {
  return (
    <div className='todoLists'>
<li>{props.text}</li>
<button onClick={()=>{
    props.onSelect(props.id);
}}>❌</button>

    </div>
  )
}
