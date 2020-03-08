import React from 'react'
import styled from 'styled-components'
import Product from './Product'

const BodyRow = styled.tr`
text-align:center`


const LineItem = props => {

    const { department, product, quantity, unitPrice} = props.lineItem
    return(
        <BodyRow>
            <td><Product id={product}/></td>
            <td>{department}</td>
            <td>{unitPrice}</td>
            <td>{quantity}</td>
            <td>{quantity*unitPrice}</td>
        </BodyRow>
    )
}

export default LineItem