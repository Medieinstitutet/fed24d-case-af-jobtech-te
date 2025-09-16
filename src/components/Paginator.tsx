import { DigiNavigationPagination } from "@digi/arbetsformedlingen-react";
import { PaginationContainer, TotalJobsText } from "./styled/JobsPage/ShowJobsComponents";

type PaginatorProps = {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  jobsPerPage: number;
  adTotal: number;
};

export const Paginator = ({
  totalPages,
  currentPage,
  onPageChange,
  jobsPerPage,
  adTotal
}: PaginatorProps) => {
   const shownJobs = Math.min(currentPage * jobsPerPage, adTotal);
  // Handle page change event from DigiNavigationPagination
  const handlePageChange = (event: CustomEvent<number>) => {
    const page = event.detail;
    onPageChange(page);
  };

  return (
    <PaginationContainer>
      <TotalJobsText>Visar <strong>{shownJobs}</strong> jobb av <strong>{adTotal}</strong></TotalJobsText>
      <DigiNavigationPagination
        afTotalPages={totalPages}
        afInitActivePage={currentPage}
        onAfOnPageChange={handlePageChange}
        afLimit={5}
        
      />
    </PaginationContainer>
  );
};
