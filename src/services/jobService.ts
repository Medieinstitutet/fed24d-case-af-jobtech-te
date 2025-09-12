// /src/services/jobService.ts
import type { JobSearchResponse, JobSearchResult, SearchSuggestionResponse, SearchSuggestionResult } from '../models/apiResponse';
import type { IJobAd } from '../models/IJobAd';
import { fetchData } from './serviceBase';

const baseUrl = "https://jobsearch.api.jobtechdev.se/";

/**
 * Get jobs from JobTech API
 * - supports query, offset and limit
 * - returns an array of Job objects
 */
export async function fetchJobs (query: string, offset: number, limit: number): Promise<JobSearchResult> {
  const apiUrl = `${baseUrl}/search?q=${encodeURIComponent(query)}&offset=${offset}&limit=${limit}`;

  const data = await fetchData<JobSearchResponse>(apiUrl, "Något gick fel vid hämtning av jobb");

  console.log("fetchJobs full API-response:", "query:", query, "offset:", offset, "limit:", limit, "data:", data);

  return {
    adTotal: data.total?.value ?? 0,
    jobs: data.hits,
  };
}


/**
 * Get a single job by its ID
 * - returns a Job object
 */
export async function fetchJobById (id: string): Promise<IJobAd> {
  const apiUrl = `${baseUrl}/ad/${id}`

  const data = await fetchData<IJobAd>(apiUrl, "Något gick fel vid hämtning av jobbdetaljer");

  console.log("fetchJobById full API-response:", "id:", id, "data:", data);
  return data;
}

/**
 * Get job suggestions (autocomplete)
 * - returns an array of TypeaheadItem
 */
export async function fetchJobSuggestions (query: string): Promise<SearchSuggestionResult> {
  const apiUrl = `${baseUrl}/complete?q=${encodeURIComponent(query)}`;

  const data = await fetchData<SearchSuggestionResponse>(apiUrl)

  const suggestions = (data.typeahead ?? [])
    .map(item => item.value || item.found_phrase || "")
    .filter(suggestion => suggestion !== "");

  console.log("fetchJobSuggestion full API-response:", suggestions);
  return { suggestions };
}