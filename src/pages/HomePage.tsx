import { useEffect, useState } from "react";
import type { Job } from "../models/Job";
import { fetchJobs } from "../services/ApiFetch"; 
import TopOccupations from "../components/TopOccupationsBar";

export const HomePage = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const result = await fetchJobs("");
        setJobs(result);

        console.log("Antal hämtade annonser:", result.length);

        // Topp 5 yrken:
        const occMap = new Map<string, number>();
        for (const j of result) {
          const label =
            (j as any)?.occupation_field?.label ||
            (j as any)?.occupation?.label ||
            "Okänt yrke";
          occMap.set(label, (occMap.get(label) || 0) + 1);
        }
        const top5 = [...occMap.entries()]
          .map(([name, count]) => ({ name, count }))
          .sort((a, b) => b.count - a.count)
          .slice(0, 5);
        console.table(top5);

      } catch (e: any) {
        setErr(e?.message ?? "Kunde inte hämta jobb");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <>
      <h1>Home Page</h1>

      {err && <p role="alert">{err}</p>}
      {loading ? (
        <p>Laddar…</p>
      ) : (
        <>
          <TopOccupations jobs={jobs} />
        </>
      )}
    </>
  );
};
