import React from 'react'
import productsList from '../../../data/produtos.json'
import { Container, ContentProducts } from './style'
import Filters from './Filters'
import Cards from './Cards'

export default class Main extends React.Component {
    state = {
        products: productsList,
        text: "",
        minPrice: "",
        maxPrice: ""
    }

    updateText = (ev) => {
        this.setState({
         text: ev.target.value
        })
     }
  
     updateMinPrice = (ev) => {
        this.setState({
           minPrice: ev.target.value
        })
     }
  
     updateMaxPrice = (ev) => {
        this.setState({
           maxPrice: ev.target.value
        })
     }

    render () {
        return (
            <Container>
                <Filters 
                    text={this.state.text}
                    updateText={this.updateText}
                    updateMinPrice={this.updateMinPrice}
                    updateMaxPrice={this.updateMaxPrice}
                    minPrice={this.state.minPrice}
                    maxPrice={this.state.maxPrice}
                />
                <ContentProducts>
                    {this.state.products
                    .filter(product => {
                        return product.title.toLowerCase().includes(this.state.text.toLowerCase())
                     })
                     .filter(product => {
                        const value1 = product.price
                        const value2 = Number(this.state.minPrice)
                        return this.state.minPrice === "" || value1 >= value2
                     })
                     .filter(product => {
                        const value1 = product.price
                        const value2 = Number(this.state.maxPrice)
                        return this.state.maxPrice === "" || value1 <= value2
                     })
                     .map(product => {
                        return <Cards key={product.id} product={product} />
                     })}
                </ContentProducts>
            </Container>
        )
    }
}