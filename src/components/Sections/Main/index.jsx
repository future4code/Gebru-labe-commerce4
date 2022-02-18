import React from 'react'
import productsList from '../../../data/produtos.json'
import { Container, HeaderMain, Select, Option, ContentMain, ContentProducts } from './style'
import Filters from './Filters'
import Cards from './Cards'

export default class Main extends React.Component {
    state = {
        products: productsList,
        minPrice: "",
        maxPrice: "",
        text: "",
        sortingParameter: "bestSellers",
        order: 1
    }

     updateMinPrice = (e) => {
        this.setState({
           minPrice: e.target.value
        })
     }
  
     updateMaxPrice = (e) => {
        this.setState({
           maxPrice: e.target.value
        })
     }
     
     updateText = (e) => {
        this.setState({
         text: e.target.value
        })
     }

     updateSortingParameter = (e) => {
         this.setState({
            sortingParameter: e.target.value
         })
      }

     updateOrder = (e) => {
      this.setState({
         order: e.target.value
      })
   }

    render () {
        return (
            <Container>
               <HeaderMain>
                  <p></p>
                  <span>
                     <label htmlFor="sort">Ordenar por: </label>
                     <Select
                        name="sort"
                        value={this.state.sortingParameter}
                        onChange={this.updateSortingParameter}
                     >
                        <Option value="bestSellers">Mais vendidos</Option>
                        <Option value="titleAaZ">Nome de A a Z</Option>
                        <Option value="titleZaA">Nome de Z a A</Option>
                        <Option value="minPrice">Menores Preços</Option>
                        <Option value="maxPrice">Maiores Preços</Option>
                     </Select>
                  </span>
               </HeaderMain>
               <ContentMain>
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
                           .sort((currentProduct, nextProduct) => {
                              switch (this.state.sortingParameter) {
                                 case "titleAaZ":
                                    return this.state.order * currentProduct.title.localeCompare(nextProduct.title)
                                 case "titleZaA":
                                    return this.state.order * nextProduct.title.localeCompare(currentProduct.title)
                                 case "minPrice":
                                    return this.state.order * (currentProduct.price - nextProduct.price)
                                 case "maxPrice":
                                    return this.state.order * (nextProduct.price - currentProduct.price)
                                 default:
                                    return this.state.order * (nextProduct.sold - currentProduct.sold)
                              }
                           })
                           .map(product => {
                              return <Cards key={product.id} product={product} />
                           })}
                     </ContentProducts>
               </ContentMain>
            </Container>
        )
    }
}