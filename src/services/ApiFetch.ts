import { Job } from "../models/Job";

const API_URL = "https://jobsearch.api.jobtechdev.se/search?offset=0&limit=25" // catches first 25 jobs in the Api

const JOB_DETAIL_URL = "https://jobsearch.api.jobtechdev.se/ad/"; // base URL for job details



export async function fetchJobs(): Promise<Job[]> {
    const response = await fetch(API_URL);
    if (!response.ok) {
        throw new Error("Något gick fel vid hämtning av jobb");
    }
    const data = await response.json();
    
    return data.hits as Job[];
}


export async function fetchJobById(id: string): Promise<Job> {
    const response = await fetch(`${JOB_DETAIL_URL}${id}`);
    if (!response.ok) {
        throw new Error("Något gick fel vid hämtning av jobbdetaljer");
    }
    const data = await response.json();
    
    return data as Job;
}