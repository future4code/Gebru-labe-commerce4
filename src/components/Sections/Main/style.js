import styled from 'styled-components'

export const Container = styled.div`
    display: grid;
    grid-template-rows: 40px 1fr;
    margin-top: -5px;
`

export const HeaderMain = styled.div`
    display: flex;
    justify-content: space-between;
    color: #170055;
    align-items: center;
    padding: 0 5vw;
`

export const Select = styled.select`
    width: 120px;
    color: #170055;
`

export const Option = styled.option`
`

export const ContentMain = styled.div`
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