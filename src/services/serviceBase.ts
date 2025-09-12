// /src/services/baseService.ts

/**
 * Generic GET helper
 * - fetch data from API
 * - throw your message if response not ok
 * - log details only on network errors (catch)
 */
export const fetchData = async <T> (url: string, errorMsg: string = "Fel vid datahämtning"): Promise<T> => {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`${errorMsg}`)
        }
        return (await response.json()) as T;
    }
    catch (error) {
        const catchErrorMsg = `Nätverksfel - ${errorMsg} `
        console.error("GET failed:", error);
        throw new Error(catchErrorMsg);
    }
};
