import styled from 'styled-components';

export const TableCart = styled.tr`
 display: flex;
 flex-direction: row;
 justify-content: space-around;
 align-self:center;
 align-items: center;
 border: 1px solid black;

 &:hover{
     background-color: #FFC600;
     transition: 0.3s;
 }
`

export const Value = styled.h3`
 position: relative;
 margin-left: 10px;
 `