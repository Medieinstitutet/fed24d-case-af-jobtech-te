import { Link } from 'react-router';
import styled from 'styled-components';

export const Panel = styled.section`
  width: 100%;
  margin-inline: auto;
  display: grid;
  gap: 1rem;
  padding: 1rem;
  max-width: 1200px;
`;

export const HeaderRow = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between; 
  `


export const TitleLink = styled(Link)`
  min-height: 48px;
  min-width: 48px;
  width: 100%;
  padding: 0 1rem;
  max-width: max-content;
  display: inline-flex;
  align-items: center;
`;

export const ContentGrid = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr;       
  align-items: start;

  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;  
  }
`;
