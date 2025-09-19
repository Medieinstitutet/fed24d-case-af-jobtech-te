// src/reducers/jobReducer.ts
import type { IJobAd } from '../models/IJobAd';

/**
 * App state for jobs. Add more fields as needed.
 */
export type JobState = {
  query: string;
  offset: number;
  limit: number;
  jobs: IJobAd[];
  adTotal: number;
  topLabels: string[];
};

/**
 * Initial state. Change default values here.
 */
export const initialJobState: JobState = {
  jobs: [],
  query: "*",
  offset: 0,
  limit: 25,
  adTotal: 0,
  topLabels: [],                    // ← NY
};

/**
 * Actions – add when you want to update state.
 */
export type JobAction =
  | { type: "SET_OFFSET"; offset: number }
  | { type: "SET_JOBS"; jobs: IJobAd[]; adTotal: number }
  | { type: "SET_TOP_LABELS"; labels: string[] }; // ← NY

/**
 * Reducer – switch on action types once you add actions.
 */
export function jobReducer (state: JobState, action: JobAction): JobState {
  switch (action.type) {
    case "SET_OFFSET":
      return { ...state, offset: action.offset };
    case "SET_JOBS":
      return { ...state, jobs: action.jobs, adTotal: action.adTotal };
    case "SET_TOP_LABELS":                         // ← NY
      return { ...state, topLabels: action.labels };
    default:
      return state;
  }
}
