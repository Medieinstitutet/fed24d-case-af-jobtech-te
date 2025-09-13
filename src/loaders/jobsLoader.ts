// src/loaders/jobsLoader.ts
import type { LoaderFunctionArgs } from "react-router";
import { fetchJobs } from "../services/jobService";
import type { IJobAd } from "../models/IJobAd";

export type JobsLoaderData = {
    query: string;
    limit: number;
    offset: number;
    jobs: IJobAd[];
    adTotal: number;
};

/**
 * Route loader for the jobs list.
 * - Reads query params from the URL: `q` (search, defaults to "*"), `limit` (defaults to 15), `offset` (defaults to 0).
 * - Calls `fetchJobs(q, offset, limit)` and returns `{ query, limit, offset, jobs, adTotal }` for `useLoaderData()`.
 */

export async function jobsLoader ({ request }: LoaderFunctionArgs) {
    const url = new URL(request.url);
    const query = (url.searchParams.get("q") ?? "*").trim() || "*";
    const limit = Number(url.searchParams.get("limit") ?? 25);
    const offset = Number(url.searchParams.get("offset") ?? 0);

    const { jobs, adTotal } = await fetchJobs(query, offset, limit);
    return { query, limit, offset, jobs, adTotal };
}
