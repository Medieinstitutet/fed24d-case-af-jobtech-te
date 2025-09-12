import { Job, type TypeaheadItem } from "../models/Job";

const baseUrl = "https://jobsearch.api.jobtechdev.se/";

export async function fetchJobs (query: string, offset: number, limit: number): Promise<Job[]> {
  const apiUrl = `${baseUrl}/search?q=${encodeURIComponent(query)}&offset=${offset}&limit=${limit}`;

  const response = await fetch(apiUrl);
  if (!response.ok) {
    throw new Error("Något gick fel vid hämtning av jobb");
  }
  const data = await response.json();
  console.log("fetchJobs full API-response:", "query:", query, "offset:", offset, "limit:", limit, "data:", data);
  return data.hits as Job[];
}

export async function fetchJobById (id: string): Promise<Job> {
  const apiUrl = `${baseUrl}/ad${id}`

  const response = await fetch(apiUrl);
  if (!response.ok) {
    throw new Error("Något gick fel vid hämtning av jobbdetaljer");
  }
  const data = await response.json();
  console.log("fetchJobById full API-response:", "id:", id, "data:", data);
  return data as Job;
}

export async function fetchJobSuggestions (query: string): Promise<TypeaheadItem[]> {
  const apiUrl = `${baseUrl}/complete?q=${encodeURIComponent(query)}`;

  const response = await fetch(apiUrl);
  if (!response.ok) {
    throw new Error("Något gick fel vid hämtning av förslag");
  }
  const data = await response.json();
  /*   console.log("fetchJobSuggestion full API-response:", data); */
  return data.typeahead || [];
}
