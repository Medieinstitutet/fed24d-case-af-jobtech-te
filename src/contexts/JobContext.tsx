// src/context/jobContext.ts
import { createContext, useContext } from "react";
import { initialJobState, type JobState, type JobAction } from '../reducers/jobReducer';


/**
 * React context for job state.
 * Exposes { state, dispatch } typed with JobState/JobAction.
 * Uses initialJobState as default; replace via <JobContext.Provider>.
 * Access in components with useJobs().
 */

export type JobContextType = {
    state: JobState
    dispatch: React.Dispatch<JobAction>;
}

export const JobContext = createContext<JobContextType>({
    state: initialJobState,
    dispatch: () => { }
});

export const useJobs = () => useContext(JobContext);


