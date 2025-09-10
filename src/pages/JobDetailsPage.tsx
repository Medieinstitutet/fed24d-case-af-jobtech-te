import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { fetchJobById } from "../services/ApiFetch";
import { Job } from "../models/Job";

export const JobDetailsPage = () => {
    const { id } = useParams();
    const [job, setJob] = useState<Job | null>(null);
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
            <h1>{job.headline}</h1>
            <p>Arbetsgivare: {job.employer?.name}</p>
            <p>Yrkesområde: {job.occupation_field?.label}</p>
            
        </div>
    );
}