import { useState } from "react"
import SearchPanel from "./SearchPanel"
import DisplayCards from "./DisplayCards"

export default function MainContent(){

    const [filters, setFilters] = useState({
        precioMin: 0,
        precioMax: 1000000,
        provincia: "todas",
        tipo: "todo"
    });

    function handleFilterChange(newFilters) {
        setFilters(newFilters);
    };

    return(
        <div className="main-container">
            <SearchPanel onFilterChange={handleFilterChange} filters={filters} />
            <DisplayCards filters={filters} />
        </div>
    )
}