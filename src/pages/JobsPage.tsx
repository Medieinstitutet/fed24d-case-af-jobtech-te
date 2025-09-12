// src/pages/JobsPage.tsx

import { useLoaderData } from "react-router";
import { useState } from "react";
import type { JobsLoaderData } from "../loaders/jobsLoader";
import { SearchBar } from "../components/SearchBar";
import { ShowJobs } from "../components/showJobs";
import { JobsPageContainer } from "../components/styled/JobsPage/ShowJobsComponents";

export const JobsPage = () => {
    const { query, jobs, adTotal } = useLoaderData() as JobsLoaderData;
    const [search, setSearch] = useState(query);

    return (
        <JobsPageContainer>
            <SearchBar value={search} onSearch={setSearch} placeholder="Sök jobb..." />
            <ShowJobs search={search} initialJobs={jobs} initialTotal={adTotal} />
        </JobsPageContainer>
    );
}
