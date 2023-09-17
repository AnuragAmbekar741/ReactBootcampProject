import React from 'react'
import { useContext, useState } from 'react'
import TaskContextProvider from './TaskContextProvider'
import Form from './Form'
import TaskList from './TaskList'

import { TodoWrap } from './TodoStyles'


function TodoApp() {
    return (
        <>
            <TaskContextProvider>
                <TodoWrap>
                    <Form />
                    <TaskList />
                </TodoWrap>
            </TaskContextProvider>
        </>
    )
}

export default TodoApp