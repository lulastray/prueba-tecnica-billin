import React from 'react'
import styled from 'styled-components'
import LineItem from './LineItem'

const Status = styled.span`
background-color: ${props => props.status == "sent" ? "green" : "red"};
border-radius: 50%;
width: 15px;
height:15px;
margin:0 5px;
display: inline-block`

const InvoiceCard = styled.section`
background-color: #F9F8F7;
width: 90%;
border: solid 1px rgba(225, 221, 220,.7);
border-radius:10px;
margin:0 auto;
padding: 10px;`



const Invoice = props => {

    const { id, client, lineItems, status } = props.invoice
    
    const getTotalAmount = () => {
        return lineItems.map(lineItem => lineItem.quantity * lineItem.unitPrice).reduce((acc, val) => acc + val)
      }

    return (
        <InvoiceCard>
            <p>invoice id:{id}</p>
            <p>client id: {client}</p>
            <p>Line Items:</p>
            <table>
                <thead>
                    <th>Product</th>
                    <th>Department</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                </thead>
                <tbody>
            {
                lineItems.map( (lineItem, idx)=> 
                    <LineItem key={idx} lineItem={lineItem}></LineItem>
                )
            }
                </tbody>
                <tfoot>
                    <tr>
                        <th>Total amount</th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th>{getTotalAmount()}</th>
                    </tr>
                </tfoot>
            </table>
            <p>status: <Status status={status}/> {status}</p>
        </InvoiceCard>
    )
}


export default Invoice