import styled from 'styled-components';

export const HeaderContent = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1200px;
  padding: 0 .5rem;
  gap: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

      @media (min-width: 400px) {
   padding:0 1rem;
   gap: 1rem;
  }
`;

export const HeaderBrandTitle = styled.h1`
  margin:0;
`