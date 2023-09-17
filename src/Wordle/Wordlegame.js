import React from 'react'
import { Container, Block } from './styles'

const Wordlegame = ({ arrlist }) => {

    const finaleAns = 'CRAZE'
    const arr = finaleAns.split("")

    const finalCheck = () => {
        var tempobj = {}
        for (i = 0; i < arr.length; i++) {
            tempobj[i] = [tempobj.arr[i], false]
        }

    }

    return (
        <>
            {arrlist && arrlist.map((arr) => {
                return <Container>
                    {arr.map((val) => {
                        return <Block>{val}</Block>
                    })}
                </Container>
            })}

        </>
    )
}

export default Wordlegame