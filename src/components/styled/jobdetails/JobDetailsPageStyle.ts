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
  width: 1200px;
  display: flex;
  flex-direction: row;

  background-color: hsl(171, 35%, 81%);
  height: auto;
  margin-top: 15px;
  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
    width: auto;
    margin: 10px;
    gap: 20px;
  }
  /* Normal Phones (481px to 768px) */
  @media (min-width: 481px) and (max-width: 768px) {
    width: auto;
    margin: 15px;
  }
  /* Tablets and Small Laptops (769px to 1024px) */
  @media (min-width: 769px) and (max-width: 1024px) {
    width: 900px;
  }
  /* Tablets and Small Laptops (769px to 1024px) */
    @media (min-width: 769px) and (max-width: 1024px) {
      width: auto;
      margin: 15px;
    }
  
`;

export const JobDetailsHeaderContainers = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: auto;
  border-left: 4.5px solid
    hsl(168.8888888888889, 14.754098360655732%, 64.11764705882352%);
  padding-bottom: 10px;
  padding-left: 20px;
  justify-content: end;
  margin-top: 10px;
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
      hsl(168.8888888888889, 14.754098360655732%, 64.11764705882352%);
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
