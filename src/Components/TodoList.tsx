import React, { FC, useState } from 'react'



const TodoList: FC = () => {
    const [state, setState] = useState<string>('')
    const [todo, setAddTodo] = useState<string[]>([])
    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState(e.target.value)
    }

    const addTodo = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        setAddTodo([...todo, state])
        setState('')
    }

    const deleteTodo = (index: number) => {
        const newTodo = todo.filter((val, indx) => {
            return index !== indx
        })
        setAddTodo(newTodo)
    }



    return (
        <div className='container'>
            <h2 style={{ textAlign: 'center' }}>TodoList</h2>
            <div className='todoBox'>
                <input type="text" value={state} onChange={handleInput} />
                <button onClick={addTodo}>+</button>
            </div>
            <div className='addtodo'>
                {todo.map((val, index) => (
                    <ul key={index}>
                        <li>{val} <button onClick={() => deleteTodo(index)}>x</button></li>
                    </ul>
                ))}
            </div>
        </div>
    )
}

export default TodoList