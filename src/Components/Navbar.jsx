//import { Input } from '@material-ui/core'
import { LockOpen, Search, ShoppingCart } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
                //width: 100vw;
                height: 100px;
                border: solid black 2px;
                //background-Color: #0a1533;
                `
const Wrapper = styled.div`
                height: 80px;
                //justify-Content: space-between;
                display: flex; `

const Left    = styled.div`
                flex: 1;  margin-left: 20px;`

const Center = styled.div`
               flex: 1;
               align-items: center;
               
                `

const Right = styled.div`
              /* flex: 1;  */
              margin-right: 50px;
              `
const Input = styled.input`
            border: none;
            margin-left: 5px;
                `

const SearchContainer = styled.div`
              margin-top: 10px; 
              align-items: center;
              border: 2px solid lightgrey  ;
              width: 200px; `

const LoginContainer = styled.div`
              `





export default function Navbar() {
  return (
    <Container>
        <Wrapper>
            <Left>
                <SearchContainer>
                    <Input/>
                    <Search/>
                </SearchContainer>
            </Left>
            <Center> <h1>Sofiah Perfume Shop</h1></Center>
            <Right> 
                <LoginContainer>
                    <LockOpen/>
                    <button><ShoppingCart/></button>
                </LoginContainer>

            </Right>
        </Wrapper>
    </Container>
  )
}

