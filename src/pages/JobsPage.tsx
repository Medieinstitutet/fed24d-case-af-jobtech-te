import { useLoaderData, useNavigate } from "react-router-dom";
import { SearchBar } from "../components/SearchBar";
import { ShowJobs } from "../components/showJobs";

import { Paginator } from "../components/Paginator";
import { MainWrap } from "../components/styled/LayoutWrappers";

export const JobsPage = () => {
  // Get loader data (from jobsLoader)
  const { query, jobs, adTotal, limit, offset } = useLoaderData();
  const navigate = useNavigate();

  // Change page by updating URL (triggers loader)
  const API_MAX_OFFSET = 2000;
  const maxOffset = API_MAX_OFFSET;
  const maxPages = Math.ceil((maxOffset + 1) / limit);
  const totalPages = Math.min(Math.ceil(adTotal / limit), maxPages);
  const currentPage = Math.floor(offset / limit) + 1;

  const handlePageChange = (page: number) => {
    const newOffset = Math.min((page - 1) * limit, maxOffset);
    navigate(
      `/jobs?q=${encodeURIComponent(query)}&offset=${newOffset}&limit=${limit}`
    );
  };

  // Change search by updating URL (triggers loader)
  const handleSearch = (search: string) => {
    navigate(`/jobs?q=${encodeURIComponent(search)}&offset=0&limit=${limit}`);
  };

  return (
    <MainWrap>
      <SearchBar
        value={query}
        onSearch={handleSearch}
        placeholder="Sök jobb..."
      />
      <ShowJobs jobs={jobs} adTotal={adTotal}  />
      <Paginator
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
        jobsPerPage={limit}
        adTotal={adTotal}
      />
    </MainWrap>
  );
};
