import { createContext, useContext, useState } from "react";

const ContextBudget = createContext();

const ContextBudgetProvider = ({ children }) => {

    const [budgetList, setBudgetList] = useState([])

    const [Budget, setBudget] = useState(0)
    const [AllocattedBudget, setAllocattedBudget] = useState(0)
    const [RemainingBudget, setRemainingBudget] = useState(0)



    const assignBudget = (val) => {
        setBudget(val)
        setRemainingBudget(val)
        console.log('Assigned Budget is ' + Budget)
    }

    const totalAllocatedBudget = () => {
        let budget = Budget
        let allocatedBudget = budgetList.map(item => item.amount).reduce((a, b) => a + b, 0)
        let remainingBudget = budget - allocatedBudget
        setAllocattedBudget(allocatedBudget)
        setRemainingBudget(remainingBudget)
    }

    const addNewBudget = (budget) => {
        if (!budget.amount) return
        setBudgetList([...budgetList, budget])
        totalAllocatedBudget()
    }

    const editBudgetAmount = (id, as) => {
        const updatedList = budgetList
        updatedList.map((budget, i) => {
            if (id == i) {
                if (as == 'add') budget.amount = budget.amount + 10
                if (as == 'sub') budget.amount = budget.amount - 10
                totalAllocatedBudget()
            }
        })
        setBudgetList([...updatedList])
    }

    const deleteBudget = (id) => {
        const updateList = budgetList
        updateList.splice(id, 1)
        setBudgetList([...updateList])
        console.log(updateList)
    }

    const ContextValue = {
        budgetList,
        addNewBudget,
        editBudgetAmount,
        deleteBudget,
        assignBudget,
        Budget,
        AllocattedBudget,
        RemainingBudget
    }
    return <ContextBudget.Provider value={ContextValue}>{children}</ContextBudget.Provider>
}



export const BudgetContext = () => useContext(ContextBudget)

export default ContextBudgetProvider