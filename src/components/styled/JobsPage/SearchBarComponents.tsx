import styled from "styled-components";


export const SearchBarContainer = styled.div  `

  display: flex;
  flex-direction: column;
  
`
export const SearchBarInputContainer = styled.div  `
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  
  
`
export const SuggestionsContainer = styled.ul   `

    list-style: none;
    padding: 0;
    margin: 0;

`
export const SuggestionItem = styled.li   `

    cursor: pointer;
    
    &:hover {
        background-color: var(--digi--grayscale-300);
        color: var(--digi--stratos-500);
    }

`