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
};

/**
 * Actions – add when you want to update state.
 * Example:
 * // | { type: "SET_QUERY"; query: string }
 * // | { type: "SET_JOBS"; jobs: IJobAd[] }
 */
export type JobAction =
  | { type: "SET_OFFSET"; offset: number }
  | { type: "SET_JOBS"; jobs: IJobAd[]; adTotal: number }

/**
 * Reducer – switch on action types once you add actions.
 */
export function jobReducer(state: JobState, action: JobAction): JobState {
  switch (action.type) {
    case "SET_OFFSET":
      return { ...state, offset: action.offset };
    case "SET_JOBS":
      return { ...state, jobs: action.jobs, adTotal: action.adTotal };
    default:
      return state;
  }
}
