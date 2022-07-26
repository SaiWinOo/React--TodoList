import React,{useState, useEffect} from "react";
import './App.css';
import Form from './components/form';
import '@fortawesome/fontawesome-free/css/all.css';
import TodoList from './components/Todolist'



function App(){
    const [inputText, setInputText] = useState('');
    const [todos, setTodos] = useState([]);
    const [status, setStatus] = useState('all')
    const [filterTodos, setFilterTodos] = useState([  ])

    useEffect(()=>{
      statusHandler();
    },[todos, status  ])
    
    
    const statusHandler=()=>{
      switch (status){
        case('completed'):
        setFilterTodos(todos.filter(item=> item.completed === true))
        break;
        case('uncompleted'):
        setFilterTodos(todos.filter(item=> item.completed === false))
        break;
        default:
          setFilterTodos(todos)
          // break;
      }
    }
    return (
        <div className="App">
          <header>
            <h1>Phyo's Todo List</h1>
          </header>
          <Form
          inputText={inputText}
          setInputText= {setInputText}
          todos = {todos}
          setTodos = {setTodos}
          setStatus = {setStatus}
          />
          <TodoList
          todos = {todos}
          setTodos = {setTodos}
          filterTodos={filterTodos}
          />
        </div>
      );
}


export default App;

