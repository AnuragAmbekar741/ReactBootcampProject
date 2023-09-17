import React, { useState } from 'react'
import Wordlegame from './Wordlegame'
import {
    Container,
    Ip,
    Btn
} from './styles'
import { useEffect } from 'react'

const form = () => {


    const [input, setInput] = useState()
    const [ansList, setAnsList] = useState([])
    const [finalAnsList, setFinalAnsList] = useState([])

    const handleSubmit = e => {
        e.preventDefault()
        const wordList = [input, ...ansList]
        setAnsList(wordList)
        console.log(ansList)
        deStructureWord(ansList[0])
    }

    useEffect(() => {
        handleSubmit()
    })


    return (
        <>
            <Container>
                <form>
                    <Ip
                        value={input}
                        onChange={e => setInput(e.target.value)}
                    />
                    {/* <Btn type='submit' >Submit</Btn> */}
                </form>
            </Container>
            <Wordlegame />
        </>
    )
}


export default form



























































// const deStructureWord = (word) => {
//     if (word) {
//         const wordObj = {}
//         const wordArr = word.split("")
//         for (i = 0; i < wordArr.length; i++) {
//             wordObj[i] = {
//                 index: i,
//                 value: wordArr[i],
//                 vstatus: false,
//                 istatus: false
//             }
//         }
//         console.log(wordObj)
//         const finalWordArr = Object.values(wordObj)
//         checkWord(finalWordArr)
//     }
// }

// const checkWord = (word) => {
//     const ANS = [
//         {
//             index: 0,
//             value: 'C',
//             vstatus: false,
//             istatus: false
//         },
//         {
//             index: 1,
//             value: 'R',
//             vstatus: false,
//             istatus: false
//         },
//         {
//             index: 2,
//             value: 'A',
//             vstatus: false,
//             istatus: false
//         },
//         {
//             index: 3,
//             value: 'Z',
//             vstatus: false,
//             istatus: false
//         },
//         {
//             index: 4,
//             value: 'E',
//             vstatus: false,
//             istatus: false
//         },
//     ]

//     for (let i = 0; i < ANS.length; i++) {
//         if (!ANS[i].vstatus) {
//             for (let j = 0; j < word.length; j++) {
//                 if (ANS[i].value == word[j].value) {
//                     ANS[i].vstatus = true
//                     word[j].vstatus = true
//                 }
//             }

//         }
//         if (!ANS[i].istatus) {
//             if (word[i].vstatus) {
//                 if (ANS[i].index == word[i].index) {
//                     ANS[i].istatus = true
//                     word[i].istatus = true
//                 }
//             }
//         }
//     }
//     console.log(ANS)
//     console.log(word)
//     const temArr = [word, ...finalAnsList]
//     setFinalAnsList(temArr)
//     console.log(finalAnsList)
// }