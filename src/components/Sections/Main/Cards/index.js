import React from "react";
import cart from '../../../../assets/img/shopping-cart.svg';
import { CardContainer, ImgProduct, FooterCard, TitleProduct, ContentCard, Price, Button, ImgCart } from './style'

export default class Cards extends React.Component {
  render() {
    const price = Number(this.props.product.price)
    return (
      <CardContainer>
        <ImgProduct src={this.props.product.imageUrl} alt="Imagem" />
        <FooterCard>
          <TitleProduct title={this.props.product.title}>{this.props.product.title}</TitleProduct>
          <ContentCard>
            <Price>R$ {price.toFixed(2).replace(".", ",")}</Price>
            <Button>Adicionar <ImgCart src={cart} alt="Cart" /></Button>
          </ContentCard>
        </FooterCard>
      </CardContainer>
    )
  }
}