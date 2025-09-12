// /src/services/jobService.ts
import { Job, type TypeaheadItem } from "../models/Job";
import { fetchData } from './serviceBase';

const baseUrl = "https://jobsearch.api.jobtechdev.se/";

/**
 * Get jobs from JobTech API
 * - supports query, offset and limit
 * - returns an array of Job objects
 */
export async function fetchJobs (query: string, offset: number, limit: number): Promise<Job[]> {
  const apiUrl = `${baseUrl}/search?q=${encodeURIComponent(query)}&offset=${offset}&limit=${limit}`;
  const errorMsg = "Något gick fel vid hämtning av jobb";

  const data = await fetchData<{ hits: Job[] }>(apiUrl, errorMsg);

  console.log("fetchJobs full API-response:", "query:", query, "offset:", offset, "limit:", limit, "data:", data);
  return data.hits;
}


/**
 * Get a single job by its ID
 * - returns a Job object
 */
export async function fetchJobById (id: string): Promise<Job> {
  const apiUrl = `${baseUrl}/ad/${id}`
  const errorMsg = "Något gick fel vid hämtning av jobbdetaljer";

  const data = await fetchData<Job>(apiUrl, errorMsg);

  console.log("fetchJobById full API-response:", "id:", id, "data:", data);
  return data;
}

/**
 * Get job suggestions (autocomplete)
 * - returns an array of TypeaheadItem
 */
export async function fetchJobSuggestions (query: string): Promise<TypeaheadItem[]> {
  const apiUrl = `${baseUrl}/complete?q=${encodeURIComponent(query)}`;
  const errorMsg = "Något gick fel vid hämtning av förslag";
  const data = await fetchData<{ typeahead: TypeaheadItem[] }>(apiUrl, errorMsg);

  console.log("fetchJobSuggestion full API-response:", data);

  return data.typeahead ?? [];
}
