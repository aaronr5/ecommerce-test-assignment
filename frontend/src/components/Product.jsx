import React from 'react';
import PropTypes from 'prop-types';
import { ItemCard, Image } from './Product.styles.js';

const Product = ({ name, description, image }) => (
  <ItemCard>
    <Image src={image} />
    <h2>{name}</h2>
    <p className="description">{description}</p>
  </ItemCard>
);

Product.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string
};

export default Product;
