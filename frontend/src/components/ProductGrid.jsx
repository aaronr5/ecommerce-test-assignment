import React, { useState } from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

import { Grid, Section } from './ProductGrid.styles.js';

import Product from './Product.jsx';
import Pagination from './Pagination.jsx';

const ProductGrid = () => {
  const [first, setFirst] = useState(20);
  const [offset, setOffset] = useState(0);
  return (
    <Query
      query={gql`
        {
          allProducts(first: ${first} offset: ${offset}) {
            products {
							_id
              name
              description
              image
            }
            count
          }
        }
      `}
    >
      {({ loading, error, data }) => {
        if (loading) return <p>Loading... :)</p>;
        if (error) return <p>Error :(</p>;
        return (
          <Section>
            <Grid>
              {data.allProducts.products.map(product => (
                <Product {...product} key={product._id} />
              ))}
            </Grid>
            <Pagination
              totalItems={data.allProducts.count}
              limit={20}
              neighbors={2}
              offset={offset}
              setOffset={setOffset}
            />
          </Section>
        );
      }}
    </Query>
  );
};

export default ProductGrid;
