
import styled from 'styled-components';

export const ButtonsGrid = styled.nav`
  width: min(100% - 2rem, 600px);
  margin-inline: auto;

  display: grid;
  gap: 0.5rem;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
`;

export const Buttons = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  min-height: 40px;
  padding: 0.5rem 0.9rem;
  border-radius: 1rem;

  border: 1px solid var(--digi--color--border--neutral-1, hsl(0, 0%, 92%));
  background: var(--digi--color--background--neutral-5, hsl(206, 17%, 93%));
  color: var(--digi--color--text--primary, hsl(300, 19%, 20%));

  cursor: pointer;
  font: inherit;
  text-align: center;

  &:hover {
    background: var(--brand-blue-100, hsl(206, 17%, 84%));
  }
`;