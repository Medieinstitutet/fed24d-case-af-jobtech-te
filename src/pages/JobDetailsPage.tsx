import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { fetchJobById } from "../services/ApiFetch";
import { type IJobAd } from "../models/JobAd";

export const JobDetailsPage = () => {
  const { id } = useParams();
  const [job, setJob] = useState<IJobAd | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      fetchJobById(id)
        .then(setJob)
        .catch((err) => setError(err.message));
    }
  }, [id]);

  if (error) return <p>{error}</p>;
  if (!job) return <p>Laddar...</p>;

  return (
    <div>
      <img src={job.logo_url} alt={job.employer?.name ?? undefined} />
      <h2>{job.headline}</h2>
      <p>Arbetsgivare: {job.employer?.name}</p>
      <p>Yrkesområde: {job.occupation_field?.label}</p>
      <p>Arbetsort: {job.workplace_address?.region}</p>
      <p>Anställningsform: {job.employment_type?.label}</p>
      <p>{job.salary_type && job.salary_type.label}</p>
      <p>
        Publicerad:{" "}
        {job.publication_date
          ? new Date(job.publication_date).toLocaleDateString("sv-SE", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })
          : ""}
      </p>
      <p>
        Senast publicerad:{" "}
        {job.last_publication_date
          ? new Date(job.last_publication_date).toLocaleDateString("sv-SE", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })
          : ""}
      </p>

      <p>{job.description?.text}</p>

      <div>
        <p>
          {" "}
          Sista ansökningsdag:{" "}
          {job.application_deadline
            ? new Date(job.application_deadline).toLocaleDateString("sv-SE", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })
            : ""}
        </p>
        <a href={job.webpage_url ?? undefined} target="_blank" rel="noopener noreferrer">
            Besök jobbannons
        </a>
      </div>
    </div>
  );
};
