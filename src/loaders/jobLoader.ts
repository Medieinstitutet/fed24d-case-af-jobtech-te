// src/loaders/jobLoader.ts
import type { LoaderFunctionArgs } from "react-router";
import { fetchJobById } from "../services/jobService";
import type { IJobAd } from "../models/IJobAd";

export type JobLoaderData = { job: IJobAd };

/**
 * Loader for /jobs/:id.
 * Validates the `id` route param, fetches the job, and returns { job } to useLoaderData().
 */


export const jobLoader = async ({ params }: LoaderFunctionArgs) => {
    const id = params.id?.trim();
    if (!id) throw new Error("Missing job id");

    const job = await fetchJobById(id);
    return { job } as JobLoaderData;
};
