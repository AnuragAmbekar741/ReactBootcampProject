import styled from "styled-components";

export const TodoWrap = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    margin: 10% 30%;
    border: solid 1.5px black;
    padding: 2.5%;
    border-radius:10px;
`
export const TodoTitle = styled.h1`
    font-size: 30px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    margin: 5% 0;

`
export const TodoFormWrap = styled.div`
    display:flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    margin: 2.5%;
    `

export const TodoInput = styled.input`
    padding:0.7rem;
    color: black;
    margin: 0 1%;
    border: solid 1.5px black;
    border-radius: 5px;
    width: 70%;
`
export const TodoBtn = styled.button`
    padding: 0.7rem;
    border: solid 1.5px black;
    border-radius: 5px;
    width: 20%;
`
export const TodoCard = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    border-radius:7px;
    border: ${props => props.border ? 'solid 1.7px lightgreen' : 'solid 1.7px red'};
    margin:2% 1%;
`

export const TodoCardTitle = styled.h2`
    font-size: medium;
`

export const TodoCardIconsWrap = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 25%;
`

export const TodoIcons = styled.button`
    padding: 5%;
    width: 10%;
    margin: 0.3%;
`