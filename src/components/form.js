import React from 'react';

const Form=({inputText, setInputText, todos, setTodos, setStatus})=>{

    const submitHandler=(e)=>{
        e.preventDefault();
        if(inputText.length > 0){
            setTodos([
                ...todos,
                {text: inputText, id: Math.random()* 1000, completed: false}
            ])
        }
        setInputText('')
        
    }
    const textHandler=(e)=>{
        setInputText(e.target.value)
    }
    const selectHandler=(e)=>{
        setStatus(e.target.value)
    }
    return(
        <form>
            <input value={inputText} onChange={textHandler} type='text' className= 'todo-list'/>
            <button onClick={submitHandler} className='todo-button' type='submit'><i className='fas fa-plus-square'></i></button>
            <div className='select'>
                <select onChange={selectHandler} name='todos' className='filter-todo'>
                    <option value='all'>All</option>
                    <option value='completed'>Completed</option>
                    <option value='uncompleted'>Uncompleted</option>
                </select>
            </div>
        </form>
        
    )
}

export default Form;