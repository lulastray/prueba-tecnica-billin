import React, {Component} from 'react'
import ProductService from '../services/ProductService'


class Product extends Component {
    constructor (props){
        super()
        this.state= {
            product:undefined
        }
        this.service = new ProductService()
    }

    capitalizeName = name => {
        return name[0].toUpperCase() + name.substring(1,name.length).toLowerCase() 
    }

    componentDidMount () {
        const {id} = this.props
        this.service.getOneProduct(id)
            .then(product => {
                product.name = this.capitalizeName(product.name)
                this.setState(
                {product}
            )})
    }

    render(){
        return this.state.product ?
        (
            <p>{this.state.product.name}</p>
        ): null
    }
}

export default Product