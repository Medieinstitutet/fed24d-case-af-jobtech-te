import { ShowJobs } from "../components/showJobs"
import { SearchBar } from "../components/SearchBar"
import { useState } from "react"
import { JobsPageContainer } from "../components/styled/JobsPage/ShowJobsComponents"
export const JobsPage = () => {
    const [search, setSearch] = useState("*");

    return (
        <JobsPageContainer>
            <SearchBar value={search} onSearch={setSearch} placeholder="Sök jobb..." />
            <ShowJobs search={search} />
        </JobsPageContainer>
    )
}