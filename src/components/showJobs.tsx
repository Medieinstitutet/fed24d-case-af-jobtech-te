import { useEffect, useState } from "react";
import { Link } from "react-router";
import { fetchJobs } from "../services/ApiFetch";
import { Job } from "../models/Job";

interface ShowJobsProps {
  search: string;
}

export const ShowJobs = ({ search }: ShowJobsProps) => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [error, setError] = useState<string | null>(null);
  const filteredJobs = jobs.filter(
    (job) =>
      job.headline &&
      job.employer &&
      job.occupation_field &&
      (job.headline.toLowerCase().includes(search.toLowerCase()) ||
        job.employer.name.toLowerCase().includes(search.toLowerCase()) ||
        job.occupation_field.label.toLowerCase().includes(search.toLowerCase()))
  );

  useEffect(() => {
    fetchJobs()
      .then(setJobs)
      .catch((err) => setError(err.message));
  }, []);

  return (
    <div>
      <h1>Lediga Jobb</h1>
      {error && <p>{error}</p>}
      <ul>
        {filteredJobs.map((job) => (
          <li key={job.id}>
            <h2>{job.headline}</h2>
            <p>{job.employer?.name}</p>
            <p>{job.occupation_field?.label}</p>
            <Link to={`/jobs/${job.id}`}>Se annons</Link>
          </li>
        ))}
      </ul>
      <p>test</p>
    </div>
  );
};
