import styled from 'styled-components';

export const StyleGeneral = styled.div`
 display: flex;
 flex-direction: row;
 justify-content: space-between;
 align-items: center;
 padding: 4px;
 background-color: #170055`


export const LogoHeader = styled.img`
 width: auto;
 height: 80px;
 cursor: pointer
 
`
export const LogoStyle = styled.div`
 background-color:#6605b6;
 border: 2px solid black;
 border-radius: 20px;
 padding: 0%;
 `

export const NavHome = styled.p`
 font-size: 30px;
 font-family: Cooper Black;
 text-decoration: none;
 color: #FFC600;
 font-weight: bold;
 margin-right: 130px;
 &:hover {
     color:  #f1ac0a;
     border-bottom:  1px solid #f1ac0a;
     transition: 0.3s;
 }
 `
export const Button = styled.img`
 background-color: #6605b6;
 border: 2px solid black;
 border-radius: 15px; 
 width: 100px;
 height: 45px;
 cursor: pointer;
 margin-right: 20px;
 &:hover{
     background-color: #f1ac0a;
     transition: all 0.5s;
 }
`


