import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
padding: 8px 20px;
background-color: #1D62BF;
color: #FFF;
border-radius: 8px;`



const Button = props => {
    const {text, handleSubmit} = props 



      
    return(
        <StyledButton onClick={e=>handleSubmit(e)}>{text}</StyledButton>
    )
}

export default Button