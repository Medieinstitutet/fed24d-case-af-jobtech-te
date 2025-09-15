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

      @media (max-width: 480px) {
      width: 350px;
      gap: 10px;
    }
  
`

export const JobItem = styled.li `
    height:125px;
    display: flex;
    flex-direction: column;
    justify-content:space-between;
    background-color: #ececec;
    padding-left: 8px;
    width: 700px;
    /* Small Phones (up to 480px) */
    @media (max-width: 480px) {
      width: 350px;
      height: auto;
      display: flex;
        flex-direction: column;
        gap: 5px;
    }
    /* Normal Phones (481px to 768px) */
    @media (min-width: 481px) and (max-width: 768px) {

    }
    /* Tablets and Small Laptops (769px to 1024px) */
    @media (min-width: 769px) and (max-width: 1024px) {}
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

