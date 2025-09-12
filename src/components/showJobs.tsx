import { useEffect, useState } from "react";
import { Link } from "react-router";
import { fetchJobs } from "../services/jobService";
import { JobItem, JobsListContainer, JobHeadline, EmployerName } from "./styled/JobsPage/ShowJobsComponents";
import type { IJobAd } from '../models/IJobAd';
interface ShowJobsProps {
  search: string;
}

export const ShowJobs = ({ search }: ShowJobsProps) => {
  const [jobs, setJobs] = useState<IJobAd[]>([]);
  const [adTotal, setAdTotal] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!search) {
      setJobs([]);
      setAdTotal(0);
      return;
    }
    fetchJobs(search, 0, 15)
    fetchJobs(search, 0, 15)
      .then((result) => {
        setJobs(result.jobs);
        setAdTotal(result.adTotal);
        setError(null);
      })
      .catch((err) => {
        setJobs([]);
        setAdTotal(0);
        setError(err?.message ?? "Kunde inte hämta jobb");
      });
  }, [search]);

  return (
    <>
      {error && <p>{error}</p>}
      <JobsListContainer>
        <h1>Lediga Jobb</h1>
        <p>Det finns {adTotal} annonser som matchar din sökning</p>
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