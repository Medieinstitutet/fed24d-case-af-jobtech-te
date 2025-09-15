import { Link } from "react-router";
import { JobItem, JobsListContainer, JobHeadline, EmployerName } from "./styled/JobsPage/ShowJobsComponents";
import type { IJobAd } from '../models/IJobAd';
import { MainWrap } from "./styled/LayoutWrappers";
interface ShowJobsProps {
  jobs: IJobAd[];
  adTotal: number;

}

export const ShowJobs = ({ jobs, adTotal }: ShowJobsProps) => {
 

  return (
    <JobsListContainer>
      <h1>Lediga Jobb</h1>
      <p>Det finns {adTotal} annonser som matchar din sökning</p>
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
)
};