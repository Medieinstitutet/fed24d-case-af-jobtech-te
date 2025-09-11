import { useEffect, useState } from "react";
import { Link } from "react-router";
import { fetchJobs } from "../services/ApiFetch";
import { Job } from "../models/Job";
import { JobItem, JobsListContainer, JobHeadline, EmployerName } from "./styled/JobsPage/ShowJobsComponents";
interface ShowJobsProps {
  search: string;
}

export const ShowJobs = ({ search }: ShowJobsProps) => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!search) {
      setJobs([]);
      return;
    }
    fetchJobs(search)
      .then(setJobs)
      .catch((err) => setError(err.message));
  }, [search]);

  return (
    <>
      {error && <p>{error}</p>}
      <JobsListContainer>
        <h1>Lediga Jobb</h1>
        {jobs.map((job) => (
          <JobItem key={job.id}>
            <Link to={`/jobs/${job.id}`}>
              <JobHeadline>{job.headline}</JobHeadline>
            </Link>
            <EmployerName>{job.employer?.name}</EmployerName>
            <p>{job.occupation_field?.label}</p>
          </JobItem>
        ))}
      </JobsListContainer>
    </>
  );
};