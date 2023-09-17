import { useContext, useState, createContext } from "react";

// const TaskContext = createContext(
//     {
//         task: {
//             text: '',
//             status: false,
//             edit: false,
//             delete: false
//         },
//         setTask: () => { },
//     }
// )


const TaskContext = createContext();

const TaskContextProvider = ({ children }) => {

    const [taskList, setTaskList] = useState([])


    const addNewTask = (newTask) => {
        if (!newTask.text || /^\s*$/.test(newTask.text)) {
            return
        }
        setTaskList([...taskList, newTask])
        console.log(taskList)
    }

    const contextValue = {
        taskList,
        addNewTask
    }

    return (
        <TaskContext.Provider value={contextValue} >{children}</TaskContext.Provider>
    );
};


export const useTaskContext = () => useContext(TaskContext)
export default TaskContextProvider;