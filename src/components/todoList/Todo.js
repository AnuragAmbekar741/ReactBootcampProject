import React, { useState } from 'react'
import TodoForm from './TodoForm'
import { TodoCard, TodoCardIconsWrap, TodoCardTitle } from './TodoStyles'
import { CiEdit, CiCircleCheck, CiUndo } from 'react-icons/ci'





function Todo({ todoList }) {
    console.log(todoList)

    const [edit, setEdit] = useState({
        id: null,
        value: ''
    })

    const [complete, setComplete] = useState()

    return todoList.map((todo) =>

        <>
            <TodoCard border={complete} key={todo.id} >
                <TodoCardTitle>{todo.text}</TodoCardTitle>
                <TodoCardIconsWrap>
                    <CiCircleCheck
                        style={{ fontSize: "1.5rem", cursor: 'pointer' }}
                        onClick={() => setComplete(todo.status = true)}
                    />
                    <CiUndo
                        style={{ fontSize: "1.5rem", cursor: 'pointer' }}
                        onClick={() => setComplete(todo.status = false)}
                    />
                    <CiEdit style={{ fontSize: "1.5rem", cursor: 'pointer' }} />
                </TodoCardIconsWrap>
            </TodoCard>
        </>
    )

}

export default Todo