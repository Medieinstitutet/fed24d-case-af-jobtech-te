// src/components/layout/PageLayout.tsx
import { Outlet, useRouteLoaderData } from "react-router";
import { useReducer } from "react";
import { JobContext } from "../contexts/JobContext";
import { jobReducer, initialJobState } from "../reducers/jobReducer";
import type { JobsLoaderData } from "../loaders/jobsLoader";
import { FooterWrap, MainWrap, PageWrap, Typography } from "../components/styled/LayoutWrappers";
import { Header } from "../components/fixtures/Header";
import { FooterLogo } from '../components/fixtures/PageLogo';

export const PageLayout = () => {
  const data = useRouteLoaderData("jobs") as JobsLoaderData | undefined;
  // Lazy initiation - Note: don't know if its a good way
  const [state, dispatch] = useReducer(
    jobReducer,
    initialJobState,
    (base) =>
      data
        ? {
          ...base,
          query: data.query,
          limit: data.limit,
          offset: data.offset,
          jobs: data.jobs,
        }
        : base
  );

  return (
    <JobContext.Provider value={{ state, dispatch }}>
      <Typography>
        <PageWrap>
          <Header />
          <MainWrap>
            <Outlet />
          </MainWrap>
          <FooterWrap>
            <p>FooterContent</p>
            <FooterLogo />
          </FooterWrap>
        </PageWrap>
      </Typography>
    </JobContext.Provider>
  );
};
