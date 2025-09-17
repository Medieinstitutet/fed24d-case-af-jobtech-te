import { useLoaderData, useNavigate } from "react-router";
import { SearchBar } from "../components/jobs/SearchBar";
import { ShowJobs } from "../components/jobs/showJobs";

import { Paginator } from "../components/jobs/Paginator";
import { HiddenPageTitle, PageSection } from '../components/styled/global/Pages';
import { BaseBlockWrap } from '../components/styled/global/Wrappers';


export const JobsPage = () => {
  const { query, jobs, adTotal, limit, offset } = useLoaderData();
  const navigate = useNavigate();

  const API_MAX_OFFSET = 2000;
  const maxOffset = API_MAX_OFFSET;
  const maxPages = Math.ceil((maxOffset + 1) / limit);
  const totalPages = Math.min(Math.ceil(adTotal / limit), maxPages);
  const currentPage = Math.floor(offset / limit) + 1;

  const handlePageChange = (page: number) => {
    const newOffset = Math.min((page - 1) * limit, maxOffset);
    navigate(`/jobs?q=${encodeURIComponent(query)}&offset=${newOffset}&limit=${limit}`);
  };

  const handleSearch = (search: string) => {
    navigate(`/jobs?q=${encodeURIComponent(search)}&offset=0&limit=${limit}`);
  };

  // enkel resultatrad
  const start = Math.min(offset + 1, adTotal || 0);
  const end = Math.min(offset + (jobs?.length ?? 0), adTotal || 0);

  return (

    <PageSection>
      <HiddenPageTitle>Lediga jobb – Brandname</HiddenPageTitle>

      <BaseBlockWrap $maxW="100%" $p="2rem 1rem 5rem 1rem" $bg="var(--digi--color--background--complementary-1)">
        <h2>Sök lediga jobb</h2>
        <SearchBar
          value={query}
          onSearch={handleSearch}
          placeholder="Sök yrke, kompetens eller ort"
        />
      </BaseBlockWrap>

      <BaseBlockWrap>
        <ShowJobs jobs={jobs} adTotal={adTotal} />
        {adTotal > 0 && (
          <p aria-live="polite" style={{ margin: "0 0 0.5rem 0" }}>
            Visar {start}–{end} av {adTotal} jobb
          </p>
        )}

      </BaseBlockWrap>

      <BaseBlockWrap>
        <Paginator
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={handlePageChange}
          jobsPerPage={limit}
          adTotal={adTotal}
        />
      </BaseBlockWrap>
    </PageSection>

  );
};
