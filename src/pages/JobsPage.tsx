import { ShowJobs } from "../components/showJobs"
import { SearchBar } from "../components/SearchBar"
import { useState } from "react"

export const JobsPage = () => {
    const [search, setSearch] = useState("");

    return(
        <div>
              <SearchBar  value={search} onChange={setSearch} placeholder="Sök jobb..."/>
              <ShowJobs search={search} />
        </div>
    )
}