import styled from 'styled-components'

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 4fr;
`

export const ContentProducts = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 100%;
    border: 2px solid black;
    padding: 20px 0;
    *{
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
     }
`