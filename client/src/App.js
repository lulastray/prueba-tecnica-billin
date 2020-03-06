import React, { Component } from 'react';
import './App.css';
import InvoiceService from './services/InvoiceService'


class App extends Component{
  constructor (){
    super()
    this.state = {
      invoice: undefined
    }
    this.service = new InvoiceService ()
}

componentDidMount(){
 
  this.service.getOneInvoice("I-00028988")
    .then(invoice => this.setState({ invoice }))
}

getTotalAmount = () => {
  const lineItems = this.state.invoice.lineItems
  const totalAmount=lineItems.map(lineItem => lineItem.quantity * lineItem.unitPrice).reduce((acc, val) => acc + val)
  console.log(totalAmount)
  return totalAmount
}

render() {
  this.state.invoice && this.getTotalAmount()
  return (
    <div>
      hola
    </div>
  );
}
  
}

export default App;
