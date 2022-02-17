import React from 'react'
import { FiltersContainer, Title, Label, Input } from "./style"

export default function Filters(props) {
   return (
      <FiltersContainer>
         <Title>Filtros</Title>

         <Label htmlFor="minPrice">Valor mínimo:</Label>

         <Input
            id='minPrice'
            type="number"
            placeholder="Preço mínimo"
            value={props.minPrice}
            onChange={props.updateMinPrice}
         />

         <Label htmlFor="maxPrice">Valor maximo:</Label>

         <Input
            id='maxPrice'
            type="number"
            placeholder="Preço máximo"
            value={props.maxPrice}
            onChange={props.updateMaxPrice}
         />

         <Label htmlFor="nome">Pesquisa por nome:</Label>

         <Input
            id='nome'
            placeholder="Pesquisa"
            value={props.text}
            onChange={props.updateText}
         />
      </FiltersContainer>
   )
}