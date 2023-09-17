import React, { useState } from 'react'

import TodoForm from './TodoForm'

import { TodoCard, TodoCardIconsWrap, TodoCardTitle, TodoWrap, TodoTitle, TodoFormWrap, TodoInput, TodoBtn } from './TodoStyles'

import { CiEdit, CiCircleCheck, CiUndo, } from 'react-icons/ci'

import { MdDeleteForever } from 'react-icons/md'



function ToDoList() {

    const [todoList, setTodoList] = useState([])

    const addTodo = todo => {

        if (!todo.text || /^\s*$/.test(todo)) {
            return
        }

        const newTodo = [todo, ...todoList]
        setTodoList(newTodo)
        console.log(...todoList)
    }

    const Task = () => todoList.map((task) => {

        const [complete, setComplete] = useState(task.status)
        const [editStatus, setEditStatus] = useState(task.updateStatus)

        const [editInput, setEditInput] = useState(task.text)


        const editTaskStatus = (text, id) => {
            console.log(text)
            console.log(id)
            setEditStatus(task.updateStatus = true)
        }

        const handleChange = e => {
            setEditInput(e.target.value)
        }

        const handleSubmit = e => {
            e.preventDefault()
            setEditInput(task.text = editInput)
            setEditStatus(task.updateStatus = false)
        }

        if (!task.deleteStatus) {
            if (task.updateStatus == true) {
                return <>
                    <form onSubmit={handleSubmit}>
                        <TodoFormWrap>
                            <TodoInput
                                placeholder='Edit task'
                                onChange={handleChange}
                                value={editInput}
                            />
                            <TodoBtn>Edit</TodoBtn>
                        </TodoFormWrap>
                    </form>
                </>
            }

            return <>
                <TodoCard border={complete} key={task.id} >

                    <TodoCardTitle>{task.text}</TodoCardTitle>
                    <TodoCardIconsWrap>
                        <CiCircleCheck
                            style={{ fontSize: "1.5rem", cursor: 'pointer' }}
                            onClick={() => setComplete(task.status = true)}
                        />
                        <CiUndo
                            style={{ fontSize: "1.5rem", cursor: 'pointer' }}
                            onClick={() => setComplete(task.status = false)}
                        />
                        <CiEdit
                            style={{ fontSize: "1.5rem", cursor: 'pointer' }}
                            onClick={() => editTaskStatus(task.text, task.id, task.updateStatus)}
                        />
                        <MdDeleteForever
                            style={{ fontSize: "1.5rem", cursor: 'pointer' }}
                            onClick={() => editTaskStatus(task.deleteStatus = true)}
                        />
                    </TodoCardIconsWrap>
                </TodoCard>
            </>

        }



    })

    return (
        <>
            <TodoWrap>
                <TodoTitle>Today's task list</TodoTitle>
                <TodoForm onSubmit={addTodo} />
                <Task />
            </TodoWrap>

        </>
    )
}

export default ToDoList