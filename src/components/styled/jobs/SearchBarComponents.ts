import styled from "styled-components";

export const SearchBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  width: 100%;
  max-width: 560px;

  @media (max-width: 600px) {
    max-width: 450px;
  }
`;

export const SearchBarInputContainer = styled.form`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: stretch;
    gap: 1rem;
  }

  #searchBtn {
    border-radius: 1rem;
    height: 48px;
    max-width: 450px;
  }

  .sc-digi-form-input-h .digi-form-input.sc-digi-form-input {
    gap: 0;
  }
`;

export const SearchInput = styled.div`
  position: relative;
  flex: 1;
  max-width: 470px;
  z-index: 2;

  label {
    margin-left: -1rem;
    padding-bottom: 0.75rem;
  }

  #search-bar {
    border-radius: 1rem;
    height: 48px;
  }

  @media (max-width: 600px) {
    label {
      margin-left: -0.5rem;
    }
  }
`;

// Dropdown wrapper: keeps rounded corners and hides scrollbar bleed
export const SuggestionsWrapper = styled.div`
  width: 100%;
  max-width: 470px;
  margin-top: -1.6rem;
  padding-top: 1rem;
  z-index: 1;
  border: var(--digi--form-input--border--neutral) solid
    var(--digi--color--border--neutral-3);
  border-top: 0;
  border-radius: 0 0 1rem 1rem;
  background: var( --digi--color--background--input);
  overflow: hidden;
  clip-path: inset(0 round 0 0 1rem 1rem);

  @media (max-width: 600px) {
    margin-top: -5rem;
  }
`;

export const SuggestionsContainer = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  max-height: calc(48px * 3);
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
 scrollbar-width: thin; 
   scrollbar-color: var(--digi--grayscale-500) transparent; 

  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 8px;
    border: 2px solid transparent;
    background-clip: padding-box;
  }
`;

export const SuggestionItem = styled.li`
  display: flex;
  align-items: center;
  height: 48px;
  padding: 0 1rem;
  cursor: pointer;

  &:hover {
    background-color: var(--digi--grayscale-700); 
    color: var(--digi--color--text--inverted);
  }
`;
