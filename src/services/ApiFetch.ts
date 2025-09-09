import { Job } from "../models/Job";

const API_URL = "https://jobsearch.api.jobtechdev.se/search?offset=0&limit=10" // catches first 10 jobs in the Api


export async function fetchJobs(): Promise<Job[]> {
    const response = await fetch(API_URL);
    if (!response.ok) {
        throw new Error("Något gick fel vid hämtning av jobb");
    }
    const data = await response.json();
    // Jobtech API returns jobs in data.hits
    return data.hits as Job[];
}