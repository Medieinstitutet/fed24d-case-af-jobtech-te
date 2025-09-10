import { Job, type TypeaheadItem } from "../models/Job";


const JOB_DETAIL_URL = "https://jobsearch.api.jobtechdev.se/ad/"; // base URL for job details



export async function fetchJobs(search: string): Promise<Job[]> {
    const  API_URL =`https://jobsearch.api.jobtechdev.se/search?q=${encodeURIComponent(search)}&offset=1&limit=25`
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

export async function fetchJobSuggestions(query: string): Promise<TypeaheadItem[]> {
  const url = `https://jobsearch.api.jobtechdev.se/complete?q=${encodeURIComponent(query)}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Något gick fel vid hämtning av förslag");
  }
  const data = await response.json();
  console.log("Full API response:", data); // Debug line
  return data.typeahead || [];
}