import React, { Component } from 'react'
import TokenService from '../services/TokenService'
import styled from 'styled-components'
import Button from '../components/Button'


// estilos generales del contenedor del buscador (hacerle un reseteo de estilos)
const Wraper = styled.section`
font-family: raleway;
color: grey;
margin: 5%;
`


const FormLabel = styled.label`
display:block;
font-weight: 600;
margin-bottom:4px;
`



const FormInput = styled.input`
width: 80%;
border: solid 1px rgba(225, 221, 220,.7);
padding:8px;
border-radius:8px;
margin-right: 8px;`




class SearchInvoice extends Component {
  constructor(props) {
    super()
    this.state = {
        invoiceId: ""
    }

    this.service = new TokenService()

  }
  handleChange = e => {
    const {value} = e.target
    this.setState ({
      invoiceId:value
    }
    ) 
  }

  handleSubmit = e => {
    e.preventDefault()
    const{ getOneInvoice} = this.props
    const {invoiceId} = this.state

    getOneInvoice(invoiceId.trim())
    
  }
  
  
  render() {
 
    return (
      <Wraper>
        <form>
          <FormLabel>Invoice id</FormLabel>
          <FormInput onChange={e => this.handleChange(e)} name="invoiceId" value={this.state.invoiceId}></FormInput>
          <Button handleSubmit={this.handleSubmit} text="Find"></Button>
        </form>
      </Wraper>
    )
  }
}



export default SearchInvoice