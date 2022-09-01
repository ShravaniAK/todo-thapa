// import logo from './logo.svg';
import './App.css';
import React , {useState} from "react";
import { TodoLists } from './TodoLists';


function App() {

  const [inputList,setInputList]=useState("");
  const[items,setItems]=useState([]);

  const itemEvent =(event)=>{
    setInputList(event.target.value);
  };

  const listOfItem=()=>{
setItems((olditem)=>{
  return[...olditem,inputList];
});
setInputList("");
  };

  const deleteItem=(id)=>{
setItems((olditems)=>{
  return olditems.filter((arrElem, index)=>{
    return index!== id;

  })
})
  }
  return (
   <>
   <div className="main_div">
     <div className="center_div">
       <br />
       <h1>ToDo List</h1>
       <br />
       <input type="text" placeholder="add your todo" onChange={itemEvent} value={inputList} />
       <button onClick={listOfItem}>➕</button>
       <ol>
         
         {items.map((itemval, index)=>{
         return  <TodoLists  text={itemval} key={index} id={index} onSelect={deleteItem}/> ;
         })}
       </ol>
     </div>
   </div>
   </>
  );
}

export default App;
