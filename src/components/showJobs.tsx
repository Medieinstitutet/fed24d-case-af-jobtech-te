import { useEffect, useState } from "react";
import { Link } from "react-router";
import { fetchJobs } from "../services/jobService";
import { JobItem, JobsListContainer, JobHeadline, EmployerName } from "./styled/JobsPage/ShowJobsComponents";
import type { IJobAd } from '../models/IJobAd';
import { useJobs } from '../contexts/JobContext';

interface ShowJobsProps {
  search: string;
  initialJobs?: IJobAd[];
  initialTotal?: number;
}

export const ShowJobs = ({ search, initialJobs, initialTotal }: ShowJobsProps) => {
  const [jobs, setJobs] = useState<IJobAd[]>(initialJobs ?? []);
  const [adTotal, setAdTotal] = useState<number>(initialTotal ?? 0);
  const [error, setError] = useState<string | null>(null);
  const { state, dispatch } = useJobs();

  useEffect(() => {
    if (!search) {
      setJobs([]);
      setAdTotal(0);
      return;
    }
    fetchJobs(search, state.offset, state.limit)
      .then((result) => {
        setJobs(result.jobs);
        setAdTotal(result.adTotal);
        setError(null);
        dispatch({ type: "SET_JOBS", jobs: result.jobs, adTotal: result.adTotal });
      })
      .catch((err) => {
        setJobs([]);
        setAdTotal(0);
        setError(err?.message ?? "Kunde inte hämta jobb");
        dispatch({ type: "SET_JOBS", jobs: [], adTotal: 0 });
        // If we land on an empty page, reset to first page
        if (state.offset > 0) {
          dispatch({ type: "SET_OFFSET", offset: 0 });
        }
      });
  }, [search, state.offset, state.limit, dispatch]);

  return (
    <>
      {error && <p>{error}</p>}
      <JobsListContainer>
        <h1>Lediga Jobb</h1>
        <p>Visar {state.limit} av {adTotal}</p>
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