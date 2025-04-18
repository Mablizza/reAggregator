import { useState } from "react"
import SearchPanel from "./SearchPanel"
import DisplayCards from "./DisplayCards"

export default function MainContent(){

    const [filters, setFilters] = useState({
        precioMin: 0,
        precioMax: 1000000,
        Provincia: "Todas",
        tipo: "Todo"
    });

    const handleFilterChange = (newFilters) => {
        setFilters(newFilters);
    };

    return(
        <div className="main-container">
            <SearchPanel onFilterChange={handleFilterChange} />
            <DisplayCards filters={filters} />
        </div>
    )
}