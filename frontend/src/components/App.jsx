import React from 'react';
import styled from 'styled-components';

import ProductGrid from './ProductGrid.jsx';

const Content = styled.main`
  width: 100%;

  @media (min-width: 769px) {
    width: 85%;
    max-width: 1500px;
    margin: auto;
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  text-transform: uppercase;
  text-decoration: underline;
  text-decoration-color: #6123ff;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
`;

const App = () => (
  <Content>
    <Title>E-Commerce Grid App</Title>
    <ProductGrid />
  </Content>
);

export default App;
