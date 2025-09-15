import styled from "styled-components";

export const JobsListContainer = styled.ul `
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
  height: auto;
  justify-content: center;
  align-items: center;
  
`

export const JobItem = styled.li `
    height:125px;
    display: flex;
    flex-direction: column;
    justify-content:space-between;
    background-color: #ececec;
    padding-left: 8px;
    width: 700px;
    
`

export const JobHeadline = styled.p `
    font-size: 1.4rem;
    
` 
export const EmployerName = styled.p  `
    margin-bottom: 0;
    font-size: 1.1rem;
    font-weight: bold;
`
export const JobsPageContainer = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;   
    gap: 16px; 
   
`
export const PaginationContainer = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`
export const TotalJobsText = styled.p `
    font-size: 1.2rem;
    margin-bottom:5px;
`