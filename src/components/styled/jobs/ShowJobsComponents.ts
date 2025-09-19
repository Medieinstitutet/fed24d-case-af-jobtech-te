import styled from "styled-components";

export const JobsListContainer = styled.ul`
    width: 100%;
    max-width: max-content;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
`

export const JobItem = styled.li`
    min-height: 200px;
    width: 100%;

    padding: 1rem;
    border-radius: .5rem;
 
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    gap: 0.5rem;

    list-style: none;
     background-color: var(--clr-secondary-lighter);

`

export const JobHeadline = styled.p`
    font-size: 1.4rem;
    
`
export const EmployerName = styled.p`
    margin-bottom: 0;
    font-size: 1.1rem;
    font-weight: bold;
`
export const JobsPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;   
    gap: 16px; 
    
   
`
export const PaginationContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`
export const TotalJobsText = styled.p`
    font-size: 1.2rem;
    margin-bottom:5px;
`
