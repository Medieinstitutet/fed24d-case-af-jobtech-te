import { useLoaderData, useNavigate } from "react-router-dom";
import { SearchBar } from "../components/SearchBar";
import { ShowJobs } from "../components/showJobs";
import { JobsPageContainer } from "../components/styled/JobsPage/ShowJobsComponents";
import { Paginator } from "../components/Paginator";

export const JobsPage = () => {
  // Get loader data (from jobsLoader)
  const { query, jobs, adTotal, limit, offset } = useLoaderData();
  const navigate = useNavigate();

  const totalPages = Math.ceil(adTotal / limit);
  const currentPage = Math.floor(offset / limit) + 1;

  // Change page by updating URL (triggers loader)
  const handlePageChange = (page: number) => {
    const newOffset = (page - 1) * limit;
    navigate(`/jobs?q=${encodeURIComponent(query)}&offset=${newOffset}&limit=${limit}`);
  };

  // Change search by updating URL (triggers loader)
  const handleSearch = (search: string) => {
    navigate(`/jobs?q=${encodeURIComponent(search)}&offset=0&limit=${limit}`);
  };

  return (
    <JobsPageContainer>
      <SearchBar value={query} onSearch={handleSearch} placeholder="Sök jobb..." />
      <ShowJobs jobs={jobs} adTotal={adTotal} />
      <Paginator totalPages={totalPages} currentPage={currentPage} onPageChange={handlePageChange} />
    </JobsPageContainer>
  );
};