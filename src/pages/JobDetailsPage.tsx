import {
  JobLogo,
  JobDescription,
  JobWebpageUrl,
  JobDetailsHeader,
  JobDetailsHeaderContainers,
  JobDetailsBottomContainer,
  HeaderTitle,
  AdDate,
  AdText,
} from "../components/styled/JobDetailsPageStyle";
import { useLoaderData } from "react-router";
import { type JobLoaderData } from "../loaders/jobLoader";
import { MainWrap } from "../components/styled/LayoutWrappers";
export const JobDetailsPage = () => {
  const { job } = useLoaderData() as JobLoaderData;

  return (
    <MainWrap>
      <JobDetailsHeader>
        <JobDetailsHeaderContainers>
          {job.logo_url && (
            <JobLogo src={job.logo_url} alt={job.employer?.name ?? undefined} /> // If there is no logo just dont render it
          )}
          <HeaderTitle>{job.headline}</HeaderTitle>
          <AdDate>
            <strong>Publicerad:</strong>{" "}
            {job.publication_date
              ? new Date(job.publication_date).toLocaleDateString("sv-SE", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })
              : ""}
          </AdDate>
          <AdText><strong>Arbetsgivare:</strong> {job.employer?.name}</AdText>
          <AdText><strong>Yrkesområde:</strong> {job.occupation_field?.label}</AdText>
        </JobDetailsHeaderContainers>
        <JobDetailsHeaderContainers>
          <AdText><strong>Arbetsort:</strong> {job.workplace_address?.region}</AdText>
          <AdText><strong>Anställningsform: </strong> {job.employment_type?.label}</AdText>
          <AdText><strong>Lön:</strong> {job.salary_type && job.salary_type.label}</AdText>
          <AdDate>
            {" "}
            <strong>Sista ansökningsdag:</strong>{" "}
            {job.application_deadline
              ? new Date(job.application_deadline).toLocaleDateString("sv-SE", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })
              : ""}
          </AdDate>
          <JobWebpageUrl
            href={job.webpage_url ?? undefined}
            target="_blank"
            rel="noopener noreferrer"
          >
            Besök jobbannons
          </JobWebpageUrl>
        </JobDetailsHeaderContainers>
      </JobDetailsHeader>
      <JobDetailsBottomContainer>
        <JobDescription
          dangerouslySetInnerHTML={{
            __html: job.description?.text_formatted || "",
          }}
        />
      </JobDetailsBottomContainer>
    </MainWrap>
  );
};
