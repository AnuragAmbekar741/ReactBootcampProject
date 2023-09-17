import React, { useState } from 'react'
import { FormWrap, Dropdown, FormInput, FormBtn } from './BudgetingStyles'
import { BudgetContext } from './ContextBudget'

const BudgetForm = () => {

    const { addNewBudget, Budget } = BudgetContext()


    const [budget, setBudget] = useState({
        department: '',
        allocation: '',
        amount: ''
    })

    const handleSubmit = e => {
        e.preventDefault()
        addNewBudget(budget);
        console.log(budget)
    }

    const handleChange = e => {
        console.log(Budget)
        if (Budget > parseInt(e.target.value)) setBudget({ ...budget, amount: parseInt(e.target.value) })
        else {
            alert('budget is exceeding')
            setBudget({ ...budget, amount: Budget })
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <FormWrap>
                    <Dropdown
                        onChange={e => setBudget({ ...budget, department: e.target.value })}
                    >
                        <option>Department</option>
                        <option value={'marketing'}>Marketing</option>
                        <option value={'finance'}>Finance</option>
                        <option value={'sales'}>Sales</option>
                        <option value={'hr'}>Hr</option>
                        <option value={'IT'}>IT</option>
                    </Dropdown>
                    <Dropdown
                        onChange={e => setBudget({ ...budget, allocation: e.target.value })}
                    >
                        <option value={'add'}>Add</option>
                        <option value={'subtract'}>Subtract</option>
                    </Dropdown>
                    <FormInput
                        placeholder='Amount'
                        type='number'
                        value={budget.amount}
                        onChange={handleChange}
                    />
                    <FormBtn>Add</FormBtn>
                </FormWrap>
            </form>
        </>
    )
}

export default BudgetForm