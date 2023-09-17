import React from 'react'
import { useState } from 'react'
import { FormWrap, FormInput, FormBtn } from './BudgetingStyles'

import { BudgetContext } from './ContextBudget'

const AllocationForm = () => {

    const { assignBudget, AllocattedBudget, RemainingBudget } = BudgetContext()

    const [budAmt, setBudAmt] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        assignBudget(budAmt)
        console.log(budAmt)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <FormWrap>
                    <FormInput
                        value={budAmt}
                        onChange={e => {
                            setBudAmt(parseInt(e.target.value))
                        }}
                    />
                    <FormBtn>Add</FormBtn>
                    <FormInput
                        readOnly
                        value={'Allocated budget : ' + AllocattedBudget}
                    />
                    <FormInput
                        readOnly
                        value={'Remaining amt : ' + RemainingBudget}
                    />
                </FormWrap>
            </form>
        </>
    )
}

export default AllocationForm