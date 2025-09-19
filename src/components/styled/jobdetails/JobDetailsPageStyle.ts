import styled from "styled-components";

export const JobDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  width: 50%;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const JobDetailsHeader = styled.div`
width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: row;
margin-top: 3rem;
   background-color: var(--digi--color--background--neutral-5); 
  height: auto;
  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
    width: auto;
    gap: 1.5rem;  
    margin-top: 0;
     max-width: 100%;
  }
  /* Normal Phones (481px to 768px) */
  @media (min-width: 481px) and (max-width: 768px) {
 max-width: 100%;
        margin-top: 0;

  }
  /* Tablets and Small Laptops (769px to 1200px) */
  @media (min-width: 769px) and (max-width: 1200px) {
        margin-top: 0;
    max-width: 100%;
  }

  
`;

export const JobDetailsHeaderContainers = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: auto;
  padding: 2rem 1rem;
  border-left: 4.5px solid
  var( --border-tertiary);
  padding-bottom: 0.75rem;
  padding-left: 20px;
  justify-content: end; 
  p {
    font-size: 1.2rem;
    margin-bottom: 0;
  }
  h2 {
    margin-bottom: 0;
  }

  &:first-child {
    width: 100%;
  }
  &:last-child {
    width: 50%;
    display: flex;
    gap: 5px;
    padding-top: 20px;
  }
  @media (max-width: 480px) {
    border-left: none;
    border-bottom: 4.5px solid
    var(--clr-secondary);
    width: 100%;

    padding-left: 10px;
    padding-top: 10px;
    &:first-child {
      width: 100%;
    }
    &:last-child {
      width: 100%;
      padding-top: 0;
    }
  }

`;
export const JobDetailsBottomContainer = styled.div`
  width: 1000px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  align-items: center;
  margin-bottom: 50px;
  @media (max-width: 480px) {
    width: auto;
    margin: 10px;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    width: auto;
    margin: 15px;
  }
  @media (min-width: 769px) and (max-width: 1024px) {
      width: auto;
      margin: 15px;
    }
`;
export const JobDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  white-space: pre-wrap;
  p {
    max-width: 800px;
    margin-bottom: 0;
  }
  ul {
    margin-bottom: 0;
    padding-left: 20px;
  }
`;

export const JobLogo = styled.img`
  width: 300px;
  height: 100px;
  object-fit: contain;
`;
export const HeaderTitle = styled.h2``;
export const AdText = styled.p``;
export const AdDate = styled.p``;

export const JobApplicationDeadline = styled.p`
  width: 100%;
  margin-top: 30px;

  text-align: center;
  margin: 0;
`;
export const JobWebpageUrl = styled.a`
  font-size: 1.3rem;
`;
