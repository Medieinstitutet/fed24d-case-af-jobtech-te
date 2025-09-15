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
            Publicerad:{" "}
            {job.publication_date
              ? new Date(job.publication_date).toLocaleDateString("sv-SE", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })
              : ""}
          </AdDate>
          <AdText>Arbetsgivare: {job.employer?.name}</AdText>
          <AdText>Yrkesområde: {job.occupation_field?.label}</AdText>
        </JobDetailsHeaderContainers>
        <JobDetailsHeaderContainers>
          <AdText>Arbetsort: {job.workplace_address?.region}</AdText>
          <AdText>Anställningsform: {job.employment_type?.label}</AdText>
          <AdText>Lön: {job.salary_type && job.salary_type.label}</AdText>
          <AdDate>
            {" "}
            Sista ansökningsdag:{" "}
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
