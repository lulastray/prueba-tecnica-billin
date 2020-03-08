import React from 'react'
import styled from 'styled-components'




const LineItem = props => {

    const { department, product, quantity, unitPrice} = props.lineItem
    return(
        <tr>
            <td>{product}</td>
            <td>{department}</td>
            <td>{quantity}</td>
            <td>{unitPrice}</td>
            <td>{quantity*unitPrice}</td>
        </tr>
    )
}

export default LineItem