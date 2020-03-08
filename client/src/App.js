import React, { Component } from 'react';
import './App.css';
import InvoiceService from './services/InvoiceService'
import SearchInvoice from './components/Search-invoice'
import NavBar from './components/NavBar'
import Invoice from './components/Invoice';
import ProductService from './services/ProductService';
import Spinner from './components/Spinner';
import styled from 'styled-components'


const SearchWrapper = styled.div`

color: grey;
margin: 5%;
`

const Error = styled.div`
margin:5%;
color:tomato;

`

class App extends Component{
  constructor (){
    super()
    this.state = {
      invoice: undefined,
      spinner: false,
      error: ""
    }
    this.service = new InvoiceService ()
    this.productService = new ProductService()
}


getOneInvoice = id => {
  if(!id) this.setState({error: "Id is required"})
  else {
    this.setState({spinner: true})
    this.service.getOneInvoice(id)
      .then(invoice=> {
        if(!invoice) {
          this.setState({ error: "This invoice doesn´t exist", spinner: false})
        }
        this.setState({ invoice : invoice, spinner: false})
      })
      .catch(err=> this.setState({ error: "Oooohh, something went wrong! Try later", spinner: false}))
  }
}



render() {

  return (
    <div>
      <NavBar></NavBar>
      <SearchWrapper>
        <SearchInvoice getOneInvoice={this.getOneInvoice}></SearchInvoice>
      </SearchWrapper>
      {this.state.invoice ?
        <Invoice invoice={this.state.invoice} />
        : this.state.spinner ? <Spinner/> 
        : this.state.error ? <Error>{this.state.error}</Error> : null
      }
    </div>
  );
}
  
}

export default App;
