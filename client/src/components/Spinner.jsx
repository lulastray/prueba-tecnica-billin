import React from 'react'
import styled, {keyframes} from 'styled-components'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

const SpinnerAnimation = styled.img`
width: 8%;
display: block;
margin:0 auto;
animation: ${rotate} 1s linear infinite;`


const Spinner = () => <SpinnerAnimation src={`${process.env.PUBLIC_URL}/image/spinner.svg`}/>

export default Spinner