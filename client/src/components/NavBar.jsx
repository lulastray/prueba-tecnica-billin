import React from 'react'
import styled from 'styled-components'


const WrapperNav = styled.nav`
background-color: #1D62BF;
padding: 20px 10px;
`


const Title = styled.h1`
font-size: 1.5em;
text-align: left;
color: #FFF;
margin-left:5%`



const NavBar = () =>{
    
        return (
            <WrapperNav>
                <Title>Invoice search</Title>

            </WrapperNav>
        )
    
}


export default NavBar