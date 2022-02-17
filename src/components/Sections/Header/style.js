import styled from "styled-components"

export const StyleGeneral = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border: 2px solid black;
  background-color: #170055;
`

export const LogoStyle = styled.div`
  background-color: #6605b6;
  border: 2px solid black;
  border-radius: 20px;
`

export const LogoHeader = styled.img`
  width: auto;
  height: 80px;
  cursor: pointer;
`

export const NavHome = styled.a`
  font-size: 30px;
  font-family: cooper;
  text-decoration: none;
  color: #ffc600;
  font-weight: bold;
  margin-right: 130px;
  &:hover {
    color: #f1ac0a;
    border-bottom: 1px solid #f1ac0a;
    transition: 0.3s;
  }
`

export const Button = styled.button`
  background-color: #6605b6;
  border: 2px solid black;
  border-radius: 15px;
  width: 100px;
  height: 45px;
  cursor: pointer;
  margin-right: 20px;
`

export const ImgButton = styled.img`
  height: 40px;
`
