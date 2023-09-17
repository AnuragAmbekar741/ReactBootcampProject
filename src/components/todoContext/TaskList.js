import React from 'react'
import { useTaskContext } from './TaskContextProvider'
import { TodoCard, TodoCardTitle, TodoCardIconsWrap } from './TodoStyles'
import { CiEdit, CiCircleCheck, CiUndo, } from 'react-icons/ci'
import { MdDeleteForever } from 'react-icons/md'
import { useState } from 'react'

function TaskList() {

    const { taskList } = useTaskContext()

    const [editTask, setEditTask] = useState()

    return (

        taskList.map((task, index) =>
        (<TodoCard key={index}>
            <TodoCardTitle>{task.text}</TodoCardTitle>
            <TodoCardIconsWrap>
                {/* <TodoCardIconsWrap>
                    <CiCircleCheck
                        style={{ fontSize: "2.5rem", cursor: 'pointer' }}
                    />
                    <CiUndo
                        style={{ fontSize: "2.5rem", cursor: 'pointer' }}
                    />
                    <CiEdit
                        style={{ fontSize: "2.5rem", cursor: 'pointer' }}
                    />
                    <MdDeleteForever
                        style={{ fontSize: "2.5rem", cursor: 'pointer' }}
                    />
                </TodoCardIconsWrap> */}
            </TodoCardIconsWrap>
        </TodoCard>))

    )
}

export default TaskList