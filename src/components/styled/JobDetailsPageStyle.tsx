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

  background-color: #a3a3c792;
  height: auto;
`;

export const JobDetailsHeaderContainers = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: auto;
  border-left: 4.5px solid #78789292;
  padding-bottom: 10px;
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
  }
`;

export const JobLogo = styled.img`
  width: 300px;
  height: 100px;
  object-fit: contain;
`;
export const HeaderTitle = styled.h2`
  color: green; // change color later
`;
export const AdText = styled.p`
  color: blue; // change color later
`;
export const AdDate = styled.p`
  color: red; // change color later
`;

export const JobApplicationDeadline = styled.p`
  width: 100%;
  margin-top: 30px;

  text-align: center;
  margin: 0;
`;
export const JobWebpageUrl = styled.a`
  font-size: 1.3rem;
`;
