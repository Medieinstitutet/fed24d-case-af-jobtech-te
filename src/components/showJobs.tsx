import { Link } from "react-router";

import { JobItem, JobHeadline, EmployerName, JobsListContainer } from "./styled/JobsPage/ShowJobsComponents";
import type { IJobAd } from '../models/IJobAd';
import { BaseBlockWrap } from './styled/Globals/Wrappers';

interface ShowJobsProps {
  jobs: IJobAd[];
  adTotal: number;
}

export const ShowJobs = ({ jobs, adTotal }: ShowJobsProps) => {
  return (
    <BaseBlockWrap>
      <p>Det finns <strong>{adTotal} </strong>annonser som matchar din sökning</p>
      <JobsListContainer>
        {jobs.map(job => (
          <JobItem key={job.id}>
            <Link to={`/jobs/${job.id}`}>
              <JobHeadline>{job.headline}</JobHeadline>
            </Link>
            <EmployerName>{job.employer?.name}</EmployerName>
            <p>{job.occupation_field?.label}</p>
          </JobItem>
        ))}
      </JobsListContainer>
    </BaseBlockWrap>
  )
};
