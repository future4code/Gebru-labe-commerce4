import styled from 'styled-components'

export const CardContainer = styled.div`
    width: 15vw;
    display: grid;
    grid-template-rows: 70% 30%;
    border: 2px solid black;
    margin: 10px;
`

export const ImgProduct = styled.img`
    width: 100%;
`

export const FooterCard = styled.div`
    width: 100%;
    color: #FFC600;
    background-color: #AE00FB;
    font-weight: bold;
`

export const TitleProduct = styled.p`
    text-align: center;
    padding: 10px;
`

export const ContentCard = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
`

export const Price = styled.p`

`
export const Button = styled.button`
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    color: #FFC600;
    border-radius: 5px;
    background-color: #3E00FF;
    padding: 3px 0;
`

export const ImgCart = styled.img`
    width: 30px;
    height: 30px;
`