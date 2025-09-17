// src/components/layout/PageLayout.tsx
import { Outlet, useRouteLoaderData } from "react-router";
import { useReducer } from "react";
import { JobContext } from "../contexts/JobContext";
import { jobReducer, initialJobState } from "../reducers/jobReducer";
import type { JobsLoaderData } from "../loaders/jobsLoader";
import { FooterWrap, MainWrap, PageWrap, Typography } from "../components/styled/global/LayoutWrappers";
import { Header } from "../components/fixtures/Header";
import { Footer } from "../components/fixtures/Footer";

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
            <Footer />
          </FooterWrap>
        </PageWrap>
      </Typography>
    </JobContext.Provider>
  );
};
