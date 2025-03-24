import React from "react";


import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
} from "reactstrap";


  
const Product = ({ product, orderCard }) => {
  const image = orderCard ? {} : product.images[0];
return (


  <Card className="product-card">
    <div className="image-wrapper">
      <CardImg
        top
        width="100%"
        src={`http://localhost:1337${
          orderCard ? product.imageUrl : image.url
        }`}
        alt={orderCard ? product.name : image.name}
      />
    </div>
    <CardBody>
      <CardTitle>
        {orderCard ? product.name : product.name}
      </CardTitle>
      <CardText>
        {orderCard ? product.description : product.description}
      </CardText>
      {orderCard ? (
        <CardSubtitle className="qunatity">
          <strong>Quantity: {product.quantity}</strong>
        </CardSubtitle>
      ) : null}
      <CardSubtitle>
        <strong>
          Price: ${orderCard ? product.price : product.price}
        </strong>
      </CardSubtitle>
    </CardBody>
  </Card>
);
 
};

export default Product;

