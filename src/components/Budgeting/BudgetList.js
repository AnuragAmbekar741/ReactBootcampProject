import React, { useState } from 'react'
import { Table, Td, Th, Tr } from './BudgetingStyles'
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci"; MdDeleteOutline
import { MdDeleteOutline } from "react-icons/md";
import { BudgetContext } from './ContextBudget'

const BudgetList = () => {

    const { budgetList, editBudgetAmount, deleteBudget } = BudgetContext()

    return (
        <>
            <Table>
                <thead>
                    <Tr>
                        <Th>
                            Department
                        </Th>
                        <Th>
                            Allocated
                        </Th>
                        <Th>
                            Increase by 10
                        </Th>
                        <Th>
                            Decrease by 10
                        </Th>
                        <Th>
                            Remove
                        </Th>
                    </Tr>
                </thead>
                {budgetList.map((budget, i) => {
                    return (
                        <>
                            <Tr key={i}>
                                <Td>
                                    {budget.department}
                                </Td>
                                <Td>
                                    {budget.amount}
                                </Td>
                                <Td>
                                    <CiCirclePlus
                                        key={i}
                                        style={{ fontSize: '1.5rem' }}
                                        onClick={() => editBudgetAmount(i, 'add')}
                                    />
                                </Td>
                                <Td>
                                    <CiCircleMinus
                                        key={i}
                                        style={{ fontSize: '1.5rem' }}
                                        onClick={() => editBudgetAmount(i, 'sub')}

                                    />
                                </Td>
                                <Td>
                                    <MdDeleteOutline
                                        key={i}
                                        style={{ fontSize: '1.5rem' }}
                                        onClick={() => deleteBudget(i)}
                                    />
                                </Td>
                            </Tr>
                        </>
                    )
                })}
            </Table>
        </>
    )
}

export default BudgetList