import styled from "styled-components";


export const SearchBarContainer = styled.div  `

  display: flex;
  flex-direction: column;
  width: 100vw;
  justify-content: center;
  align-items: center;
  
`
export const SearchBarInputContainer = styled.div  `
    display: flex;
    width: 100%;
    margin-bottom: 8px;
    background-color: #a3a3c7;
    justify-content: center;
    align-items: center;
    height: 200px;
  
`
export const SuggestionsContainer = styled.ul   `

    list-style: none;
    padding: 0;
    margin: 0;
    margin-top: -75px;
    background-color: white;
    width: 285px;
`
export const SuggestionItem = styled.li   `

    cursor: pointer;
    
    &:hover {
        background-color: var(--digi--grayscale-300);
        color: var(--digi--stratos-500);
    }

`
