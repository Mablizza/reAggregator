import { promerica } from "../dataBank/promerica_data"


export default function DisplayCards ({ filters }){
// Filter the cards based on the filters
const filteredCards = promerica.filter(card => {
    // Convert price to number for comparison
    const cardPrice = parseFloat(card.price.replace(/[^0-9.-]+/g, ''));
    
    // Check if price is within range
    const isPriceInRange = 
        cardPrice >= parseFloat(filters.precioMin) && 
        cardPrice <= parseFloat(filters.precioMax);
    
    // Check if province matches
    const isProvinceMatch = 
        filters.Provincia === "Todas" || 
        card.location.includes(filters.Provincia);
    
    // Check if type matches
    const isTypeMatch = 
        filters.tipo === "Todo" || 
        card.type === filters.tipo.toLowerCase();
    
    // Return true if all filters match
    return isPriceInRange && isProvinceMatch && isTypeMatch;
});

// Map the filtered cards to components
const mappedCards = filteredCards.map((x) => {
    return (
        <div className="card" key={x.id}>
            <div>
                <img className="card-img" src={x.photo} alt={x.title.slice(0,7)} />
            </div>
            <div className="card-data">
                <h2>{x.title}</h2>
                <label>Promerica</label>
                <p>{x.location}</p>
                <h3>Precio: {x.price}</h3>
            </div>
        </div>
    )
});

return (
    <div className="card-container">
        {mappedCards.length > 0 ? 
            mappedCards : 
            <p>No se encontraron propiedades que coincidan con los criterios de búsqueda.</p>
        }
    </div>
)
}