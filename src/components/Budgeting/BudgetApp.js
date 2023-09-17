import React from 'react'
import BudgetForm from './BudgetForm'
import BudgetList from './BudgetList'
import { BudgetWrap } from './BudgetingStyles'

import ContextBudgetProvider from './ContextBudget'
import AllocationForm from './AllocationForm'

function BudgetApp() {
    return (
        <>
            <ContextBudgetProvider>
                <BudgetWrap>
                    <AllocationForm />
                    <BudgetList />
                    <BudgetForm />
                </BudgetWrap>
            </ContextBudgetProvider>
        </>
    )
}

export default BudgetApp