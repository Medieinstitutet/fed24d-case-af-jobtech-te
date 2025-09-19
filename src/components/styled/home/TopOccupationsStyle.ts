import styled from "styled-components";

export const Card = styled.section`
  width: 100%;
  max-width: 400px;
  background:var(--digi--color--background--neutral-5);
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;


export const List = styled.ol`
  margin: 0;
  padding-left: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  font-size: 0.95rem;
`;
export const Title = styled.h3`
  margin: 0;
  font-size: 1.1rem;
  font-weight: bold;
  text-align: center;
`;