import {  useEffect, useState } from "react"
import { Link } from "react-router"
import { fetchJobs } from "../services/ApiFetch"
import { Job } from "../models/Job"

export const ShowJobs = () => {
    const [jobs, setJobs] = useState<Job[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchJobs().then(setJobs).catch((err) => setError(err.message));
    },[])


    return(
        <div>
            <h1>Lediga Jobb</h1>
            {error && <p>{error}</p>}
            <ul>
                {jobs.map(job => (
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
    )
}