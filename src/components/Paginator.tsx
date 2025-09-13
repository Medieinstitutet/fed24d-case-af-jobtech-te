import { DigiNavigationPagination } from "@digi/arbetsformedlingen-react";

type PaginatorProps = {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
};

export const Paginator = ({ totalPages, currentPage, onPageChange }: PaginatorProps) => {
  // Handler for page change (DigiNavigationPagination sends CustomEvent<number>)
  const handlePageChange = (event: CustomEvent<number>) => {
    const page = event.detail;
    onPageChange(page);
  };



  return (
    <DigiNavigationPagination
      afTotalPages={totalPages}
      afInitActivePage={currentPage}
      onAfOnPageChange={handlePageChange}
      afLimit={5}
    />
  );
};