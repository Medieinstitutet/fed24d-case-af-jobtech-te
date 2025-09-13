import { useState } from "react";
import { SearchBar } from "../components/SearchBar";
import { ShowJobs } from "../components/showJobs";
import { JobsPageContainer } from "../components/styled/JobsPage/ShowJobsComponents";
import { useJobs } from '../contexts/JobContext';
import { Paginator } from "../components/Paginator";


export const JobsPage = () => {
    const { state, dispatch } = useJobs();
    const [search, setSearch] = useState(state.query);
    const totalPages = Math.ceil(state.adTotal / state.limit);
    const currentPage = Math.floor(state.offset / state.limit) + 1;

    const handlePageChange = (page: number) => {
        if (
            typeof page === "number" &&
            !isNaN(page) &&
            state.limit > 0 &&
            totalPages > 0 &&
            page >= 1 &&
            page <= totalPages
        ) {
            // Calculate offset, but never exceed last available job index
            const maxOffset = Math.floor((state.adTotal - 1) / state.limit) * state.limit;
            const offset = Math.min((page - 1) * state.limit, maxOffset);
            dispatch({ type: "SET_OFFSET", offset });
        } else {
            console.warn("Invalid page, limit, or totalPages for paginator:", { page, limit: state.limit, totalPages });
        }
    };

    return (
        <JobsPageContainer>
            <SearchBar value={search} onSearch={setSearch} placeholder="Sök jobb..." />
            <ShowJobs search={search} initialJobs={state.jobs} initialTotal={state.adTotal} />
            <Paginator totalPages={totalPages} currentPage={currentPage} onPageChange={handlePageChange} />
        </JobsPageContainer>
    );
}
