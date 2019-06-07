import styled from 'styled-components';

export const ItemCard = styled.div`
  width: 50%;
  padding: 10px;
  box-sizing: border-box;
  font-size: 1.5rem;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  text-align: center;

  @media (min-width: 1024px) {
    width: 25%;
    font-size: 1rem;
  }

  .description {
    color: rgba(0, 0, 0, 0.5);
  }
`;

export const Image = styled.img`
  width: 100%;
`;
