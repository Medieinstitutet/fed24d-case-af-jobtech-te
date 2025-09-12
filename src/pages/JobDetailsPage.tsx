
import {
  JobLogo,
  JobHeadLine,
  JobEmployerName,
  JobOccupationField,
  JobWorkPlaceRegion,
  JobEmploymentType,
  JobSalaryType,
  JobPublicationDate,
  JobDescription,
  JobApplicationDeadline,
  JobWebpageUrl,
  JobDetailsContainer,
  JobDetailsHeader,
  JobDetailsHeaderContainers,
  JobDetailsBottomContainer,
} from "../components/styled/JobDetailsPageStyle";
import { useLoaderData } from "react-router-dom";
import { type JobLoaderData } from "../loaders/jobLoader";
export const JobDetailsPage = () => {
  const { job } = useLoaderData() as JobLoaderData



  return (
    <JobDetailsContainer>
      <JobDetailsHeader>
        <JobDetailsHeaderContainers>
          <JobLogo src={job.logo_url} alt={job.employer?.name ?? undefined} />
          <JobHeadLine>{job.headline}</JobHeadLine>
          <JobPublicationDate>
            Publicerad:{" "}
            {job.publication_date
              ? new Date(job.publication_date).toLocaleDateString("sv-SE", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })
              : ""}
          </JobPublicationDate>
          <JobEmployerName>Arbetsgivare: {job.employer?.name}</JobEmployerName>
          <JobOccupationField>
            Yrkesområde: {job.occupation_field?.label}
          </JobOccupationField>
        </JobDetailsHeaderContainers>
        <JobDetailsHeaderContainers>
          <JobWorkPlaceRegion>
            Arbetsort: {job.workplace_address?.region}
          </JobWorkPlaceRegion>
          <JobEmploymentType>
            Anställningsform: {job.employment_type?.label}
          </JobEmploymentType>
          <JobSalaryType>
            Lön: {job.salary_type && job.salary_type.label}
          </JobSalaryType>
        </JobDetailsHeaderContainers>
      </JobDetailsHeader>
      <JobDetailsBottomContainer>
        <JobDescription
          dangerouslySetInnerHTML={{
            __html: job.description?.text_formatted || "",
          }}
        />
        <JobApplicationDeadline>
          {" "}
          Sista ansökningsdag:{" "}
          {job.application_deadline
            ? new Date(job.application_deadline).toLocaleDateString("sv-SE", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })
            : ""}
        </JobApplicationDeadline>
        <JobWebpageUrl
          href={job.webpage_url ?? undefined}
          target="_blank"
          rel="noopener noreferrer"
        >
          Besök jobbannons
        </JobWebpageUrl>
      </JobDetailsBottomContainer>
    </JobDetailsContainer>
  );
};
