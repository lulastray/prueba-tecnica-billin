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
width: 80%;
border: solid 1px rgba(225, 221, 220,.7);
border-radius:10px;
margin-left:5%;
padding: 10px;`

const InvoiceWrapper = styled.div`
width: 85%;
margin: 0 auto`

const InvoiceTable = styled.table`
width:100%
`
const HeadRow = styled.tr`
background-color: #FFC12B`

const HeadCell = styled.td`
text-align: center;
font-weight: 600;
padding: 6px`


const Invoice = props => {

    const { id, client, lineItems, status } = props.invoice

    const getTotalAmount = () => {
        return lineItems.map(lineItem => lineItem.quantity * lineItem.unitPrice).reduce((acc, val) => acc + val)
    }

    return (
        <InvoiceCard>
            <InvoiceWrapper>
                <p>Invoice id:{id}</p>
                <p>Client id: {client}</p>
                <InvoiceTable>
                    <thead>
                        <HeadRow>
                            <HeadCell>Product</HeadCell>
                            <HeadCell>Department</HeadCell>
                            <HeadCell>Price</HeadCell>
                            <HeadCell>Quantity</HeadCell>
                            <HeadCell>Total</HeadCell>
                        </HeadRow>
                    </thead>
                    <tbody>
                        {
                            lineItems.map((lineItem, idx) =>
                                <LineItem key={idx} lineItem={lineItem}></LineItem>
                            )
                        }
                    </tbody>
                    <tfoot>
                        <HeadRow>
                            <HeadCell>Total amount</HeadCell>
                            <HeadCell></HeadCell>
                            <HeadCell></HeadCell>
                            <HeadCell></HeadCell>
                            <HeadCell>{getTotalAmount()}</HeadCell>
                        </HeadRow>
                    </tfoot>
                </InvoiceTable>
                <p>Status: <Status status={status} /> {status}</p>
            </InvoiceWrapper>
        </InvoiceCard>
    )
}


export default Invoice