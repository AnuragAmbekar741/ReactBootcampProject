import React from 'react'
import { useState } from 'react'
import { TodoFormWrap, TodoInput, TodoBtn } from './TodoStyles'



function TodoForm(props) {

    const [input, setInput] = useState()

    const handleChange = e => {
        setInput(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        props.onSubmit({
            id: Math.floor(Math.random() * 1000000000000),
            text: input,
            status: false,
            remove: false,
            updateStatus: false,
            deleteStatus: false
        })
        setInput('')
    }

    return (
        <>
            <form onSubmit={handleSubmit} >
                <TodoFormWrap>
                    <TodoInput
                        placeholder='Add task'
                        value={input}
                        onChange={handleChange}
                    />
                    <TodoBtn>Add</TodoBtn>
                </TodoFormWrap>
            </form>
        </>
    )
}

export default TodoForm