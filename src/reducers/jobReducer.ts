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
export type JobAction = never;

/**
 * Reducer – switch on action types once you add actions.
 */
export function jobReducer (state: JobState, _action: JobAction): JobState {
    // switch (_action.type) {
    //   case "SET_QUERY":
    //     return { ...state, query: _action.query };
    //   default:
    //     return state;
    // }
    return state;
}
