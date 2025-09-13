import { useState } from "react";
import { SearchBar } from "../components/SearchBar";
import { ShowJobs } from "../components/showJobs";
import { JobsPageContainer } from "../components/styled/JobsPage/ShowJobsComponents";
import { useJobs } from '../contexts/JobContext';

export const JobsPage = () => {
    const { state } = useJobs();
    const [search, setSearch] = useState(state.query);

    return (
        <JobsPageContainer>
            <SearchBar value={search} onSearch={setSearch} placeholder="Sök jobb..." />
            <ShowJobs search={search} initialJobs={state.jobs} initialTotal={state.adTotal} />
        </JobsPageContainer>
    );
}
