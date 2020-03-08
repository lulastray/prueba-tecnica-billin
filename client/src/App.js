import React, { Component } from 'react';
import './App.css';
import InvoiceService from './services/InvoiceService'
import SearchInvoice from './components/Search-invoice'
import NavBar from './components/NavBar'
import Invoice from './components/Invoice';




class App extends Component{
  constructor (){
    super()
    this.state = {
      invoice: undefined,
      spinner: false
    }
    this.service = new InvoiceService ()
}


getOneInvoice = id => {
  this.setState({spinner: true})
  this.service.getOneInvoice(id)
    .then(invoice=>this.setState({ invoice : invoice, spinner: false}))
}



render() {

  return (
    <div>
      <NavBar></NavBar>
      <SearchInvoice getOneInvoice={this.getOneInvoice}></SearchInvoice>
      {this.state.invoice ?
        <Invoice invoice={this.state.invoice}></Invoice>
        : this.state.spinner ? <p>Spinner</p> : null
      }
    </div>
  );
}
  
}

export default App;
