// /src/models/jobApiResponse.ts
import type { IJobAd } from "./IJobAd";

// --- JOB SEARCH (API response vs app result) ---
export type JobSearchResponse = {
    total: { value: number };
    hits: IJobAd[];
};

export type JobSearchResult = {
    adTotal: number;
    jobs: IJobAd[];
};

// --- SUGGESTIONS (API response vs app result) ---
export type TypeaheadResponseItem = {
    value: string;
    found_phrase?: string;
    found_phase?: string;
    type?: string;
    occurrences?: number;
};

export type SearchSuggestionResponse = {
    typeahead: TypeaheadResponseItem[];
};

export type Suggestion = string;

export type SearchSuggestionResult = {
    suggestions: Suggestion[];
};
