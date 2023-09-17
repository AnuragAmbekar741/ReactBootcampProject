import React, { useState } from 'react'
import { TodoFormWrap, TodoInput, TodoBtn } from './TodoStyles'

import { useTaskContext } from './TaskContextProvider'

function Form() {

    const { addNewTask } = useTaskContext()

    const [task, setTask] = useState({
        text: '',
        status: false,
        delete: false,
        edit: false,
    })


    const handleSubmit = e => {
        e.preventDefault();

        addNewTask(task)
        setTask({ text: "" })

    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <TodoFormWrap>
                    <TodoInput
                        placeholder="Add task"
                        value={task.text}
                        onChange={e => {
                            setTask({ ...task, text: e.target.value })
                        }}
                    />
                    <TodoBtn>Add</TodoBtn>
                </TodoFormWrap>
            </form>
        </>
    )
}

export default Form